<script>
	import PresenterNotes from '$lib/PresenterNotes.svelte';
	import netscape_logo from './netscape_logo.png';
	import cathedral_and_bazaar_cover from './cathedral_and_bazaar_cover.jpeg';
</script>

<div class="relative flex min-h-screen bg-white">
	<div class="flex w-1/2 justify-center bg-white">
		<img
			class="absolute top-1/2 max-h-screen max-w-[35%] -translate-y-1/2 transform py-2"
			src={netscape_logo}
			alt="Netscape logo"
		/>
	</div>
	<div class="flex w-1/2 flex-col p-4">
		<div class="flex flex-1 flex-col justify-center">
			<img
				class="mx-auto max-w-[66%] border border-gray-500"
				src={cathedral_and_bazaar_cover}
				alt=""
			/>
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
