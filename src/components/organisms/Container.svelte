<script lang="ts">
	import type { Snippet } from "svelte";

	interface IProps {
		className?: any;
		children: Snippet; // Define children as a function
	}

	let { className, children }: IProps = $props();
</script>

<div class={`relative isolate px-6 pt-14 lg:px-8 w-full ${className}`}>
    {@render children()}
</div>
