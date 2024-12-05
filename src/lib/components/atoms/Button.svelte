<script lang="ts">
	import type { Snippet } from "svelte";

    interface IProps {
        onClick: () => void;
        className?: string;
        children: Snippet;
    }

    const { children, onClick, className }: IProps = $props();
</script>

<button class={`bg-green-400 hover:bg-green-500 px-2 py-1 rounded-md ${className}`} onclick={onClick}>{@render children()}</button>
