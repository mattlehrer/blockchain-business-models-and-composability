<script>
	import looksrare from './looksrare.svg';
	import uniswap from './uniswap.svg';
	import farcaster from './farcaster.png';
</script>

<div class="min-h-max bg-gray-50">
	<div id="slide" class="grid grid-cols-7 gap-2 p-16 text-gray-900">
		<div class="col-span-5 col-start-3 flex flex-col border-t-4 border-b-2 border-gray-900 py-4">
			<div class="text-3xl font-thin sm:text-[2.5rem]">Business and blockchain composability</div>
			<div class="mt-8 sm:text-3xl">
				<p class="flex items-center font-normal">
					<img src={looksrare} alt="Looksrare logo" /><span
						>Marketplace competition: LooksRare, hic et nunc</span
					>
				</p>
				<p class="flex items-center font-normal">
					<img src={uniswap} alt="Uniswap logo" /><span>Frontends for Uniswap and other defi</span>
				</p>
				<p class="flex items-center font-normal">
					<img src={farcaster} alt="Farcaster logo" /><span
						>Farcaster protocol & social network</span
					>
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	#slide {
		height: min(100vh, 800px);
	}

	p {
		margin: 3rem 0;
	}

	p > img {
		@apply -ml-16 mr-4 inline w-12;
	}
</style>
