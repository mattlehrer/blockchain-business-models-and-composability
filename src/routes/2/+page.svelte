<script>
	import PresenterNotes from '$lib/PresenterNotes.svelte';
	import evolution from './evolution.excalidraw.svg';
</script>

<div class="flex min-h-screen flex-col justify-between bg-white px-16">
	<div class="py-16 text-5xl font-extralight">Evolution in Open Innovation</div>
	<div class="w-full px-16 pb-4">
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
