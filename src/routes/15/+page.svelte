<script>
	import PresenterNotes from '$lib/PresenterNotes.svelte';
</script>

<div class="min-h-screen bg-blue-900 text-gray-100">
	<div id="slide" class="p-16">
		<div
			class=" flex h-full flex-col justify-center border-t-4 border-b-2 border-white p-4 text-center text-6xl font-extralight"
		>
			How does blockchain improve composability?
		</div>
	</div>
</div>

<PresenterNotes>
	<p>You don’t have to worry that a company will shut down an API or change how they monetize it</p>
	<p>
		Better than using APIs as building blocks - facebook killed zynga and others, twitter shut down
		competitive clients This led to a fear of building on other platforms. Could be a waste of time
		or money.
	</p>
</PresenterNotes>

<style>
	#slide {
		height: min(100vh, 800px);
	}
</style>
