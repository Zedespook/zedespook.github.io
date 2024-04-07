<script lang="ts">
	import { cards } from '$lib';
	import type { Card } from '$lib';
	import { onMount } from 'svelte';

	enum GameType {
		DAILY,
		RANDOM
	}

	let gameType = GameType.DAILY;

	let cardToGuess = {} as Card;
	let searchResults = [] as Card[];
	let guesses = [] as Card[];

	let isWon = false;

	function getCardOfTheDay() {
		const now = new Date();
		const utcDate = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
		const seed = utcDate.toISOString().slice(0, 10);
		const seedNumber = parseInt(seed.replace(/-/g, ''));
		const randomIndex = Math.abs(seedNumber % cards.length);
		return cards[randomIndex];
	}

	function searchCards(e: Event) {
		if (isWon) return;

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
	}

	function guessCard(card: Card) {
		if (isWon) return;

		guesses = [...guesses, card];

		if (card === cardToGuess) {
			isWon = true;
		}

		searchResults = [];
	}

	function startNewGameWithRandomCard() {
		cardToGuess = cards[Math.floor(Math.random() * cards.length)];
		searchResults = [];
		guesses = [];
		isWon = false;
		gameType = GameType.RANDOM;
	}

	onMount(() => {
		cardToGuess = getCardOfTheDay();
	});
</script>

<div class="flex flex-col justify-center items-center mx-4 my-12 md:max-w-xl md:mx-auto">
	<div class="flex flex-col text-center">
		<h1 class="text-4xl font-bold">Spiredle (v2)</h1>
		<p class="mt-4">Guess a card, get a hint after every try.</p>
	</div>

	<div class="relative overflow-hidden mt-8">
		<img
			src={cardToGuess.image}
			alt="Bro, why are you checking the source?"
			class="h-full object-cover transform scale-[5] origin-[50%_25%]"
		/>
	</div>
	<p class="font-bold italic">Guess the card on the image.</p>

	{#if isWon}
		<div class="my-4">
			<p class="text-green-500 text-xl font-bold text-center">You Win!</p>
			{#if gameType === GameType.DAILY}
				<p class="text-green-500 font-bold text-center">
					You've guessed the card of the day, but you can play again with a random card.
				</p>
			{/if}
		</div>

		<div class="flex justify-center items-center gap-4 my-8">
			<button class="btn btn-primary" on:click={startNewGameWithRandomCard}
				>Guess New Random Card</button
			>
		</div>
	{:else}
		<div class="flex justify-center items-center gap-4 mb-4 mt-8">
			<button class="text-primary underline" on:click={startNewGameWithRandomCard}
				>Guess Random Card</button
			>
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
						<img src={card.image} alt={card.name} class="h-full object-cover" />
						<p>{card.name}</p>
					</div>
				</button>
			</li>
		{/each}
	</ul>

	<ul class="w-full my-8">
		{#each guesses as card}
			<li class="my-2">
				<p class="text-center my-2">{card.name}</p>
				<div class="flex justify-center items-center gap-2">
					<div
						class="p-4 w-20 h-20 text-center flex items-center text-xs justify-center rounded-lg"
						class:bg-green-500={card.owner === cardToGuess.owner}
						class:bg-red-500={card.owner !== cardToGuess.owner}
					>
						{card.owner}
					</div>
					<div
						class="p-4 w-20 h-20 text-center flex items-center text-xs justify-center rounded-lg"
						class:bg-green-500={card.energy === cardToGuess.energy}
						class:bg-red-500={card.energy !== cardToGuess.energy}
					>
						{card.energy}
					</div>
					<div
						class="p-4 w-20 h-20 text-center flex items-center text-xs justify-center rounded-lg"
						class:bg-green-500={card.rarity === cardToGuess.rarity}
						class:bg-red-500={card.rarity !== cardToGuess.rarity}
					>
						{card.rarity}
					</div>
					<div
						class="p-4 w-20 h-20 text-center flex items-center text-xs justify-center rounded-lg"
						class:bg-green-500={card.type === cardToGuess.type}
						class:bg-red-500={card.type !== cardToGuess.type}
					>
						{card.type}
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>
