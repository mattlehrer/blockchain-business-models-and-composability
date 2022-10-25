<script>
	import PresenterNotes from '$lib/PresenterNotes.svelte';
	import planning_the_software_industrial_revolution from './planning_the_software_industrial_revolution.png';
	import software_hybrid_concrete_abstract from './software_hybrid_concrete_abstract.png';
</script>

<div class="relative flex min-h-screen bg-white">
	<div class="flex w-1/2 justify-center bg-white">
		<img
			class="absolute top-1/2 max-h-screen max-w-[50%] -translate-y-1/2 transform py-2"
			src={planning_the_software_industrial_revolution}
			alt="First page of Planning the software industrial revolution by B Cox, IEEE Software, 1990"
		/>
	</div>
	<div class="flex w-1/2 flex-col p-4">
		<div class="flex flex-1 flex-col justify-center">
			<img class="mx-auto max-w-[66%]" src={software_hybrid_concrete_abstract} alt="" />
		</div>
		<div class="text-right text-sm font-extralight">
			<p>Source:</p>
			Cox, B. J. (1990). Planning the software industrial revolution.<span class="italic"
				>IEEE software</span
			>, 7(6), 25-33.
		</div>
	</div>
</div>

<PresenterNotes>
	<p>Digitizing those building blocks unlocks new possibilities.</p>
	<p>
		In the mid to late 1990s, software started to work that way too. In 1990, Brad Cox called for an
		industrial revolution for software in his paper, hoping for “reusable software components”
	</p>
	<p>Now software can be built using prior art.</p>
	<p>
		Cox, B. J. (1990). Planning the software industrial revolution. <span class="italic"
			>IEEE software</span
		>, 7(6), 25-33.
	</p>
</PresenterNotes>
