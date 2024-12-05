<script lang="ts">
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
	import articles from '../../../data/articles.json';
	import { marked } from 'marked';
	import Container from '../../../components/organisms/Container.svelte';
	import Navigation from '../../../components/organisms/Navigation.svelte';
	import Button from '../../../components/atoms/Button.svelte';
	import { goto } from '$app/navigation';
	const { articleId } = $page.params;
	const article = articles.find((article) => article.id === parseInt(articleId));
	let { data } = $props();

	if (!article) {
		error(404, 'not Found');
	}
</script>

<Navigation />

<Container>
	{#if data.markdown}
		<article>
			{@html marked(data.markdown)}
		</article>
		<Button onClick={() => goto('/')}>Go back</Button>
	{:else}
		<p>we couldn't find an article</p>
	{/if}
</Container>
