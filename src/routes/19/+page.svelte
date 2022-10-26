<script>
	import PresenterNotes from '$lib/PresenterNotes.svelte';
	import looksrare from './looksrare.svg';
</script>

<div class="bg-white">
	<div id="slide" class="relative flex ">
		<div class="flex w-1/2 justify-center bg-white">
			<figure class="absolute top-1/2 max-h-screen max-w-[35%] -translate-y-1/2 transform py-2">
				<img src={looksrare} alt="LooksRare logo" class="w-full" />
				<caption class="text-center text-4xl font-thin sm:text-5xl">LooksRare</caption>
			</figure>
		</div>
		<div class="flex w-1/2 flex-col bg-blue-900 py-16">
			<div class="flex grow flex-col justify-center text-center text-3xl text-gray-50 sm:text-4xl">
				NFT Marketplace Launch
			</div>
			<!-- <div class="grid grid-cols-12">
				<div class="col-span-1 col-start-2 h-0 border-b-2 border-gray-50" />
			</div> -->
		</div>
	</div>
</div>

<PresenterNotes>
	<p>
		Open source started catching on in the mid 1990s. Using open source, software products and
		services can be built reliably, using the inventions of others, and count on them. It might not
		get updates or be supported forever but that version can be counted on.
	</p>
	<p>Netscape logo https://logodix.com/logo/40915.png</p>
	<p>
		Cathedral and bazaar / open source
		https://images-us.bookshop.org/ingram/9780596001087.jpg?height=800&v=v2
	</p>
</PresenterNotes>

<style>
	#slide {
		height: min(100vh, 800px);
	}
</style>
