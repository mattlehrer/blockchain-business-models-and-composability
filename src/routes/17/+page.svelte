<script>
	import PresenterNotes from '$lib/PresenterNotes.svelte';
</script>

<div class=" bg-gray-700 font-thin text-gray-50">
	<div id="slide" class="flex flex-col justify-center p-8">
		<div class="flex grow flex-col justify-center sm:w-[72%]">
			<p class="text-3xl sm:text-7xl">“Computers that can make commitments.”</p>
			<p class="mt-16 self-end text-base font-bold text-gray-300 sm:text-2xl">
				- Chris Dixon, 2020
			</p>
		</div>
		<p class="text-right text-gray-300">
			Source: <a href="https://cdixon.org/2020/01/26/computers-that-can-make-commitments"
				>https://cdixon.org/2020/01/26/computers-that-can-make-commitments</a
			>
		</p>
	</div>
</div>

<PresenterNotes>
	<p />
</PresenterNotes>

<style>
	#slide {
		height: min(100vh, 800px);
	}
</style>
