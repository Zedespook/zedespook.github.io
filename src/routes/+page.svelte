<script lang="ts">
	import { base } from '$app/paths';
</script>

<main class="mx-16 md:mx-0 flex flex-col justify-center items-center min-h-[100vh]">
	<section class="text-center">
		<h1 class="text-6xl flex item-center justify-center gap-2">
			Hi, I'm
			<span class="flex items-center bg-secondary rounded md:p-1 p-2 text-secondary-content"
				>Zede.</span
			>
		</h1>
		<h2 class="mt-6 text-lg">
			I'm a
			<span class="bg-accent p-1 rounded text-accent-content">game</span> &
			<span class="bg-primary p-1 rounded text-primary-content">web</span>
			developer.
		</h2>
	</section>

	<section class="flex flex-wrap gap-8 justify-center items-center mt-24 max-w-7xl">
		<p>
			Check out my game
			<span>
				<a href="{base}/spiredle" class="underline text-accent">Spiredle</a>
			</span>
		</p>
	</section>
</main>
