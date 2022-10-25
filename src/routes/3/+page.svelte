<script>
	import PresenterNotes from '$lib/PresenterNotes.svelte';
	import oecd from './OECD-innovation-title.png';
</script>

<div class="relative flex min-h-screen bg-gray-600">
	<div class="flex w-1/2 justify-center bg-white">
		<img
			class="absolute top-1/2 max-h-screen max-w-[50%] -translate-y-1/2 transform"
			src={oecd}
			alt="Title page of the OECD's The Innovation Imperative report from 2015"
		/>
	</div>
	<div class="w-1/2">
		<div class="flex h-full flex-col px-4 text-white md:px-12">
			<div class="mt-8 text-4xl font-semibold md:mt-32">Innovation (n):</div>
			<div class="mt-6 text-2xl font-thin">
				“the implementation of a new or significantly improved product (good or service) or process,
				a new marketing method, or a new organisational method in business practices, workplace
				organisation or external relations.”
			</div>
			<div class="mt-auto pb-4 text-right text-xs font-thin md:-mr-8">
				<p>Source:</p>
				<a
					href="https://read.oecd-ilibrary.org/science-and-technology/the-innovation-imperative_9789264239814-en"
				>
					https://read.oecd-ilibrary.org/science-and-technology/the-innovation-imperative_9789264239814-en
				</a>
			</div>
		</div>
	</div>
</div>

<PresenterNotes>
	<p>
		Brilliant image capturing the idea of innovation as a spark of genius as represented by the
		lightbulb but hiding the truth, that it’s generally a staircase, making progress one small step
		at a time, building on what has come before
	</p>
	<p>evolution image: https://phys.org/news/2019-09-evolution-doesnt-proceed-straight-line.html</p>
</PresenterNotes>
