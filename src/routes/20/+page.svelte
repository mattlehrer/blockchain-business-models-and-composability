<script>
	import opensea from './opensea.png';
	import giftbox from './giftbox.png';
	import pie_chart from './pie_chart.png';
</script>

<div class="min-h-max bg-gray-50">
	<div id="slide" class="grid grid-cols-7 gap-2 p-16 text-gray-900">
		<div class="col-span-5 col-start-3 flex flex-col border-t-4 border-b-2 border-gray-900 py-4">
			<div class="text-3xl font-thin sm:text-[2.5rem]">LooksRare Vampire Attack</div>
			<div class="mt-8 pr-20 text-lg sm:text-2xl">
				<p class="flex items-center font-normal">
					<img src={opensea} alt="OpenSea logo" /><span>OpenSea had near-monopoly</span>
				</p>
				<p class="flex items-center font-normal">
					<img src={giftbox} alt="Gift-wrapped box" /><span
						>Distributed governance tokens to OS’s top users at launch</span
					>
				</p>
				<p class="flex items-center font-normal">
					<img src={pie_chart} alt="Pie chart with small percentage called out" /><span
						>Staking and fee-sharing tokenomics encouraged continued platform use</span
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
