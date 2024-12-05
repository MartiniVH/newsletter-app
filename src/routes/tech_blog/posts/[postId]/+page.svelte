<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import type { PageData } from './$types';
	import Container from '../../../../components/organisms/Container.svelte';

	let { data }: { data: PageData } = $props();

	const getPost = async () => {
		const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${data.postId}`);
		return await res.json();
	};

	const query = createQuery({
		queryKey: ['post', data.postId],
		queryFn: getPost
	});
</script>

{#if $query.status === 'success'}
	<Container className={''}>
		<h1>{$query.data.title}</h1>
        <p>{$query.data.body}</p>
	</Container>
{/if}
