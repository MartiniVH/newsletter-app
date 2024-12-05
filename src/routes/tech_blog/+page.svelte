<script lang="ts">
	import { createQuery, useQueryClient, createMutation } from '@tanstack/svelte-query';
	import Container from '../../components/organisms/Container.svelte';
	import Post from '../../components/molecules/Post.svelte';
	import Button from '../../components/atoms/Button.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const queryClient = useQueryClient();

	const query = createQuery({
		queryKey: ['posts'],
		queryFn: data.getPosts
	});

	const handlePrefetchPost = async (postId: number) => {
		await queryClient.prefetchQuery({
			queryKey: ['post', postId],
			queryFn: () => data.getPost(postId)
		});
	};

	const createPostMutation = createMutation({
		mutationFn: data.createPost,
		onSuccess: async (newPost) => {
			await queryClient.setQueryData(['posts'], (oldPosts: any[]) => {
				return [...(oldPosts || []), newPost];
			});
		}
	});
</script>

<Container>
	{#if $query.status === 'pending'}
		<p>Loading...</p>
	{/if}

	{#if $query.status === 'error'}
		<p>Error :(</p>
	{/if}

	{#if $query.status === 'success'}
		<div class="flex items-center">
			<h1 class="mr-4">Tech</h1>
			<Button onClick={() => $createPostMutation.mutate()}>Post new post</Button>
		</div>

		<ul class="mt-4 grid gap-8 grid-cols-2">
			{#each $query.data as post}
				<Post id={post.id} title={post.title} body={post.body} onMouseOver={handlePrefetchPost} />
			{/each}
		</ul>
	{/if}
</Container>
