<script>
	import PresenterNotes from '$lib/PresenterNotes.svelte';
</script>

<div class=" bg-gray-700 font-thin text-gray-50">
	<div id="slide" class="flex flex-col justify-center p-8">
		<div class="flex grow flex-col justify-center sm:w-[72%]">
			<p class="text-xl sm:text-4xl">
				“A blockchain is <span class="font-semibold">a magic computer</span> that anyone can upload
				programs to and <span class="font-semibold">leave the programs to self-execute</span>… and
				which carries a very strong cryptoeconomically secured guarantee that programs running on
				the chain will <span class="font-semibold">continue to execute</span> in exactly the way that
				the blockchain protocol specifies.”
			</p>
			<p class="mt-16 self-end text-base font-bold text-gray-300 sm:text-2xl">
				Vitalik Buterin, 2015
			</p>
		</div>
		<p class="text-right text-gray-300">
			Source: https://blog.ethereum.org/2015/04/13/visions-part-1-the-value-of-blockchain-technology
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
