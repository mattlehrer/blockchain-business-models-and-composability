<script lang="ts">
	import '../app.postcss';

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import current from '$lib/store';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;

	// Array with the order of the slides
	const slides = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'17',
		'18',
		'19',
	];

	let start: number = slides.indexOf(data.path);

	const isPresentation = $page.url.searchParams.has('presentation');

	onMount(() => {
		$current = start > 0 ? start : 0;
		const unsubscribe = current.subscribe((c) => {
			if (isPresentation) {
				goto(`/${slides[c]}?presentation`);
			} else {
				goto(`/${slides[c]}`);
			}
		});

		document.addEventListener('keydown', (ev) => {
			if (ev.key == 'ArrowRight' && $current < slides.length - 1) {
				$current++;
			}
			if (ev.key == 'ArrowLeft' && $current != 0) {
				$current--;
			}
		});
		return unsubscribe;
	});
</script>

{#if !isPresentation}
	<a
		class="text-white underline hover:text-blue-600"
		href="{$page.url.pathname}?presentation"
		target="_blank"
		rel="noreferrer">Open presentation</a
	>
{/if}

<div class="mx-auto max-h-[20rem] max-w-7xl font-sans">
	<slot />
</div>
