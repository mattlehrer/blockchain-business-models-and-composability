<script>
	import PresenterNotes from '$lib/PresenterNotes.svelte';
	import evolution from './evolution.excalidraw.svg';
</script>

<div class="relative min-h-screen bg-white px-16">
	<div id="evolution" class="relative z-10 pt-16 text-5xl font-extralight">
		Evolution in Open Innovation
	</div>
	<div class="md:w-7/8 absolute inset-x-0 bottom-0 z-0 mx-auto px-4 pb-4 md:px-16">
		<!-- TODO: add animation -->
		<img class="w-full" src={evolution} alt="Five figures evolving from ape to man over time" />
	</div>
</div>

<PresenterNotes>
	<p>
		Chesbrough, H. W. (2003). <span class="italic">
			Open innovation: The new imperative for creating and profiting from technology.</span
		> Harvard Business Press.
	</p>
	<p>evolution image: https://phys.org/news/2019-09-evolution-doesnt-proceed-straight-line.html</p>
</PresenterNotes>

<style>
	#evolution {
		max-width: min(100vh, 65vw);
	}

	img {
		max-height: 85vh;
	}
</style>
