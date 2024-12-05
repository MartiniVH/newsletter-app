import { createPost, getPost, getPosts } from '$lib/services/+postService.server';
import type { PageLoad } from './$types';

export const load: PageLoad = async() => {
    return { getPost, getPosts, createPost }
};