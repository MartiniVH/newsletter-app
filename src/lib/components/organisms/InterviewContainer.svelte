<script lang="ts">
	import Article from '../molecules/Article.svelte';

	interface IProps {
		interviews: any[];
	}

	let { interviews }: IProps = $props();
</script>

<ul class="list-none flex flex-wrap gap-4 flex-col md:flex-row justify-center mt-4">
	{#each interviews as interview}
		<Article {interview} />
	{/each}
</ul>
