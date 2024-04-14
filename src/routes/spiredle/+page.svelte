<script lang="ts">
	import Icon from '@iconify/svelte';

	import { onMount } from 'svelte';

	import type { Card } from '$lib';
	import { cards } from '$lib';

	let loading = true;

	enum GameType {
		DAILY,
		RANDOM
	}

	enum GameState {
		PLAYING,
		WON,
		LOST
	}

	let gameType = GameType.DAILY;
	let gameState = GameState.PLAYING;

	let cardToGuess = {} as Card;
	let searchResults = [] as Card[];
	let guesses = [] as Card[];

	type SpiredleSettings = {
		disableSearchImages: boolean;
		disableZoomOnGuess: boolean;
		disableHintOnGuess: boolean;
		allowFiveGuessesOnly: boolean;
		grayscaleImage: boolean;
		randomRotation: boolean;
		showTimer: boolean;
	};

	let spiredleSettings: SpiredleSettings = {
		disableSearchImages: false,
		disableZoomOnGuess: false,
		disableHintOnGuess: false,
		allowFiveGuessesOnly: false,
		grayscaleImage: false,
		randomRotation: false,
		showTimer: true
	};

	let score = 100;
	let overallScore = 0;
	let scoreMultiplier = 1.0;
	let zoomLevel = 10;
	let canChangeSettings = true;

	let timer = 0;
	let timerStarted = false;
	let timerDisplay = '00:00';
	let timerInterval: number | undefined;

	$: {
		if (!loading) {
			if (spiredleSettings) {
				localStorage.setItem('spiredleSettings', JSON.stringify(spiredleSettings));

				scoreMultiplier = 1.0;

				if (spiredleSettings.disableSearchImages) {
					scoreMultiplier += 0.06;
				}

				if (spiredleSettings.disableZoomOnGuess) {
					scoreMultiplier += 0.06;
				}

				if (spiredleSettings.disableHintOnGuess) {
					scoreMultiplier += 0.12;
				}

				if (spiredleSettings.allowFiveGuessesOnly) {
					scoreMultiplier += 0.12;
				}

				if (spiredleSettings.grayscaleImage) {
					scoreMultiplier += 0.6;
				}

				if (spiredleSettings.randomRotation) {
					scoreMultiplier += 0.6;
				}
			}

			if (gameState === GameState.WON) {
				localStorage.setItem('spiredleOverallScore', overallScore.toString());
			}
		}
	}

	function startTimer() {
		timer = 0;
		timerStarted = true;
		timerInterval = setInterval(() => {
			timer++;
			updateTimerDisplay();
		}, 1000);
	}

	function stopTimer() {
		timerStarted = false;
		clearInterval(timerInterval);
	}

	function resetTimer() {
		stopTimer();
		timer = 0;
		updateTimerDisplay();
	}

	function updateTimerDisplay() {
		const minutes = Math.floor(timer / 60)
			.toString()
			.padStart(2, '0');
		const seconds = (timer % 60).toString().padStart(2, '0');
		timerDisplay = `${minutes}:${seconds}`;
	}

	function getSeed() {
		const now = new Date();
		const utcDate = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
		return utcDate.toISOString().slice(0, 10);
	}

	function getCardOfTheDay() {
		const seed = getSeed();
		const seedNumber = parseInt(seed.replace(/-/g, ''));
		const randomIndex = Math.abs(seedNumber % cards.length);
		return cards[randomIndex];
	}

	function searchCards(e: Event) {
		if (gameState === GameState.WON) return;

		const searchTerm = (e.target as HTMLInputElement).value;

		if (!searchTerm) {
			searchResults = [];
			return;
		}

		searchResults = cards
			.filter((card) => {
				return card.name.toLowerCase().includes(searchTerm.toLowerCase());
			})
			.sort((a, b) => {
				const aIndex = a.name.toLowerCase().indexOf(searchTerm);
				const bIndex = b.name.toLowerCase().indexOf(searchTerm);

				if (aIndex === 0 && bIndex !== 0) {
					return -1;
				} else if (bIndex === 0 && aIndex !== 0) {
					return 1;
				} else {
					return aIndex - bIndex;
				}
			})
			.slice(0, 5);

		canChangeSettings = false;

		if (!timerStarted) {
			startTimer();
		}
	}

	function guessCard(card: Card) {
		if (gameState === GameState.WON) return;

		guesses = [...guesses, card];

		if (card === cardToGuess) {
			score *= scoreMultiplier;
			overallScore += score;
			gameState = GameState.WON;
			stopTimer();

			if (gameType === GameType.DAILY) {
				const dailySeedStore = localStorage.getItem('spiredleDailyCompleted');
				const todaySeed = getSeed();

				if (dailySeedStore && dailySeedStore === getPreviousDateSeed(todaySeed)) {
					const streak = localStorage.getItem('spiredleDailyStreak');
					localStorage.setItem('spiredleDailyStreak', String(Number(streak) + 1));
				} else {
					localStorage.setItem('spiredleDailyStreak', '1');
				}

				localStorage.setItem('spiredleDailyCompleted', getSeed());
			}
		} else if (guesses.length === 5 && spiredleSettings.allowFiveGuessesOnly) {
			gameState = GameState.LOST;
			stopTimer();

			if (gameType === GameType.DAILY) {
				const dailySeedStore = localStorage.getItem('spiredleDailyCompleted');
				const todaySeed = getSeed();

				if (dailySeedStore && dailySeedStore === getPreviousDateSeed(todaySeed)) {
					const streak = localStorage.getItem('spiredleDailyStreak');
					localStorage.setItem('spiredleDailyStreak', String(Number(streak) + 1));
				} else {
					localStorage.setItem('spiredleDailyStreak', '1');
				}

				localStorage.setItem('spiredleDailyCompleted', getSeed());
			}
		} else {
			if (cardToGuess.owner !== card.owner) {
				score -= 2;
			}

			if (cardToGuess.energy !== card.energy) {
				score -= 2;
			}

			if (cardToGuess.rarity !== card.rarity) {
				score -= 2;
			}

			if (cardToGuess.type !== card.type) {
				score -= 2;
			}

			if (!arraysMatch(cardToGuess.attributes.keywords, card.attributes.keywords)) {
				score -= 2;
			}

			if (!arraysMatch(cardToGuess.attributes.numbers, card.attributes.numbers)) {
				score -= 2;
			}
		}

		searchResults = [];
		zoomLevel = zoomLevel > 5 ? zoomLevel - 1 : zoomLevel;
	}

	function arraysMatch(arr1: any[], arr2: any[]): boolean {
		if (arr1.length !== arr2.length) return false;
		const sortedArr1 = [...arr1].sort();
		const sortedArr2 = [...arr2].sort();
		for (let i = 0; i < sortedArr1.length; i++) {
			if (sortedArr1[i] !== sortedArr2[i]) return false;
		}
		return true;
	}

	function startNewGameWithRandomCard() {
		cardToGuess = cards[Math.floor(Math.random() * cards.length)];
		searchResults = [];
		guesses = [];
		gameState = GameState.PLAYING;
		gameType = GameType.RANDOM;
		score = 100;
		resetTimer();
		canChangeSettings = true;
	}

	function getPreviousDateSeed(currentSeed: string): string {
		const currentDate = new Date(currentSeed);
		const previousDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
		return previousDate.toISOString().slice(0, 10);
	}

	function openSettings() {
		const settingsModal = document.getElementById('settingsModal') as HTMLDialogElement;

		if (settingsModal) {
			settingsModal.showModal();
		}
	}

	onMount(() => {
		cardToGuess = getCardOfTheDay();

		const settingsStore = localStorage.getItem('spiredleSettings');
		if (settingsStore) {
			spiredleSettings = JSON.parse(settingsStore);
		}

		const overallScoreStore = localStorage.getItem('spiredleOverallScore');
		if (overallScoreStore) {
			overallScore = parseFloat(overallScoreStore);
		}

		const dailySeedStore = localStorage.getItem('spiredleDailyCompleted');
		if (dailySeedStore) {
			if (getSeed() === dailySeedStore) {
				gameType = GameType.RANDOM;
				startNewGameWithRandomCard();
			}
		}

		loading = false;
		resetTimer();
	});
</script>

<svelte:head>
	<title>Spiredle</title>
	<meta name="description" content="A Wordle-inspired Slay the Spire fan game." />
</svelte:head>

<main class="flex flex-col justify-center items-center mx-4 my-4 md:max-w-xl md:mx-auto">
	<div class="flex flex-col text-center">
		<div class="flex items-center justify-center text-center gap-4">
			<h1 class="text-3xl font-bold">Spiredle</h1>
			<button
				id="buttonSettings"
				title="Settings"
				class="btn btn-primary"
				on:click={openSettings}
				disabled={!canChangeSettings}><Icon icon="mdi:settings-outline" class="w-8 h-8" /></button
			>
		</div>
	</div>

	<p class="my-4 font-bold text-lg">Your Overall Score: {overallScore.toFixed(2)}</p>

	<div class="relative overflow-hidden">
		<img
			src={cardToGuess.image}
			alt="Bro, why are you checking the source?"
			class="h-full object-cover transform origin-[50%_25%]"
			style="scale: {zoomLevel}; filter: {spiredleSettings.grayscaleImage
				? 'grayscale(100%)'
				: 'none'}; transform: {`rotate(${spiredleSettings.randomRotation ? `${Math.floor(Math.random() * 360)}deg` : '0deg'})`};"
		/>
	</div>

	<div class="flex justify-center items-center gap-4 my-4">
		<button class="btn btn-sm btn-primary" on:click={startNewGameWithRandomCard}
			>Guess Random Card</button
		>
	</div>

	{#if spiredleSettings.showTimer}
		<div class="font-bold">
			<p>Time Elapsed: {timerDisplay}</p>
		</div>
	{/if}

	{#if gameState === GameState.WON}
		<div class="my-4">
			<p class="text-green-500 text-xl font-bold text-center">You Win!</p>
			<p class="text-green-500 text-center">
				Final score: {score.toFixed(2)} (with {scoreMultiplier.toFixed(2)}x multiplier)
			</p>
			{#if gameType === GameType.DAILY}
				<p class="text-green-500 font-bold text-center">
					You've guessed the card of the day, but you can play again with a random card.
				</p>
				<p class="font-bold text-center">
					Your daily streak is: {localStorage.getItem('spiredleDailyStreak')}
				</p>
			{/if}
		</div>
	{:else if gameState === GameState.LOST}
		<div class="my-4">
			<p class="text-red-500 text-xl font-bold text-center">You Lost.</p>
			{#if gameType === GameType.DAILY}
				<p class="text-red-500 font-bold text-center">
					Unfortunately you didn't guess the card of the day with your difficulty settings. Good
					luck tomorrow!
				</p>
			{/if}
		</div>
	{:else}
		<div class="flex flex-col items-center justify-between gap-2 my-4">
			<p class="text-sm">
				Your score: {score.toFixed(0)} (with {scoreMultiplier.toFixed(2)}x multiplier)
			</p>
			{#if spiredleSettings.allowFiveGuessesOnly}
				<p class="font-bold text-sm">Guesses left: {5 - guesses.length}</p>
			{/if}
		</div>

		<div class="flex justify-center items-center gap-4 mb-8">
			<input
				type="text"
				placeholder="Type here"
				class="input input-bordered input-primary w-full max-w-xs"
				on:input={searchCards}
			/>
		</div>
	{/if}

	<ul class="w-full">
		{#each searchResults as card}
			<li>
				<button on:click={() => guessCard(card)} class="w-full">
					<div class="h-24 p-2 bg-base-200 w-full flex items-center gap-2 rounded-lg border my-1">
						{#if !spiredleSettings.disableSearchImages}
							<img src={card.image} alt={card.name} class="h-full object-cover" />
						{/if}

						<p class="ml-2">{card.name}</p>
					</div>
				</button>
			</li>
		{/each}
	</ul>

	<ul class="w-full">
		{#each guesses as card}
			<li class="my-2">
				<p class="text-center my-2">
					{card.name}
					{cardToGuess === card ? '(correct)' : '(incorrect)'}
				</p>

				{#if !spiredleSettings.disableHintOnGuess}
					<div class="flex justify-center items-center gap-2 overflow-x-scroll md:overflow-hidden">
						<div
							class="p-4 w-20 h-20 text-center text-sm flex flex-col items-center justify-center rounded-lg"
							class:bg-green-500={card.owner === cardToGuess.owner}
							class:bg-red-500={card.owner !== cardToGuess.owner}
						>
							<span class="font-bold">Owner</span>
							<!-- Header -->
							{card.owner}
						</div>
						<div
							class="p-4 w-20 h-20 text-center text-sm flex flex-col items-center justify-center rounded-lg"
							class:bg-green-500={card.energy === cardToGuess.energy}
							class:bg-red-500={card.energy !== cardToGuess.energy}
						>
							<span class="font-bold">Cost</span>
							<!-- Header -->
							{card.energy}
						</div>
						<div
							class="p-4 w-20 h-20 text-center text-sm flex flex-col items-center justify-center rounded-lg"
							class:bg-green-500={card.rarity === cardToGuess.rarity}
							class:bg-red-500={card.rarity !== cardToGuess.rarity}
						>
							<span class="font-bold">Rarity</span>
							{card.rarity}
						</div>
						<div
							class="p-4 w-20 h-20 text-center text-sm flex flex-col items-center justify-center rounded-lg"
							class:bg-green-500={card.type === cardToGuess.type}
							class:bg-red-500={card.type !== cardToGuess.type}
						>
							<span class="font-bold">Type</span>
							{card.type}
						</div>
						<div
							class="p-4 w-20 h-20 text-center text-sm flex flex-col items-center justify-center rounded-lg"
							class:bg-green-500={arraysMatch(
								cardToGuess.attributes.keywords,
								card.attributes.keywords
							)}
							class:bg-red-500={!arraysMatch(
								cardToGuess.attributes.keywords,
								card.attributes.keywords
							)}
						>
							<span class="font-bold">Keywords</span>
							{card.attributes.keywords.join(', ')}
						</div>
						<div
							class="p-4 w-20 h-20 text-center text-sm flex flex-col items-center justify-center rounded-lg"
							class:bg-green-500={arraysMatch(
								cardToGuess.attributes.numbers,
								card.attributes.numbers
							)}
							class:bg-red-500={!arraysMatch(
								cardToGuess.attributes.numbers,
								card.attributes.numbers
							)}
						>
							<span class="font-bold">Numbers</span>
							{card.attributes.numbers.join(', ')}
						</div>
					</div>
				{/if}
			</li>
		{/each}
	</ul>
</main>

<dialog id="settingsModal" class="modal">
	<div class="modal-box">
		<h2 class="font-bold text-lg">Settings</h2>
		<p class="text-sm italic mb-2">*You can only change settings before you start guessing.</p>

		<h3 class="text-sm font-bold my-1">General</h3>
		<div>
			<div class="form-control">
				<label class="cursor-pointer label">
					<span class="label-text text-xs">Show timer</span>
					<input
						type="checkbox"
						class="toggle toggle-primary"
						bind:checked={spiredleSettings.showTimer}
					/>
				</label>
			</div>
		</div>

		<h3 class="text-sm font-bold my-1">Difficulty</h3>
		<div>
			<div class="form-control">
				<label class="cursor-pointer label">
					<span class="label-text text-xs">Disable images in search bar (+0.06x multiplier)</span>
					<input
						type="checkbox"
						class="toggle toggle-primary"
						bind:checked={spiredleSettings.disableSearchImages}
					/>
				</label>
			</div>

			<div class="form-control">
				<label class="cursor-pointer label">
					<span class="label-text text-xs">Disable zoom after every guess (+0.06x multiplier)</span>
					<input
						type="checkbox"
						class="toggle toggle-primary"
						bind:checked={spiredleSettings.disableZoomOnGuess}
					/>
				</label>
			</div>

			<div class="form-control">
				<label class="cursor-pointer label">
					<span class="label-text text-xs">Disable hints after every guess (+0.12x multiplier)</span
					>
					<input
						type="checkbox"
						class="toggle toggle-primary"
						bind:checked={spiredleSettings.disableHintOnGuess}
					/>
				</label>
			</div>

			<div class="form-control">
				<label class="cursor-pointer label">
					<span class="label-text text-xs">Allow 5 guesses only (+0.12x multiplier)</span>
					<input
						type="checkbox"
						class="toggle toggle-primary"
						bind:checked={spiredleSettings.allowFiveGuessesOnly}
					/>
				</label>
			</div>

			<div class="form-control">
				<label class="cursor-pointer label">
					<span class="label-text text-xs">Grayscale (black & white) image (+0.06x multiplier)</span
					>
					<input
						type="checkbox"
						class="toggle toggle-primary"
						bind:checked={spiredleSettings.grayscaleImage}
					/>
				</label>
			</div>

			<div class="form-control">
				<label class="cursor-pointer label">
					<span class="label-text text-xs">Random rotation on image (+0.06x multiplier)</span>
					<input
						type="checkbox"
						class="toggle toggle-primary"
						bind:checked={spiredleSettings.randomRotation}
					/>
				</label>
			</div>
		</div>

		<div class="my-1">
			<p class="font-bold">
				Score multiplier: {scoreMultiplier.toFixed(2)}x
			</p>
		</div>

		<div class="modal-action">
			<form method="dialog">
				<button class="btn btn-primary btn-sm w-24 mr-1">Done</button>
			</form>
		</div>
	</div>
</dialog>
