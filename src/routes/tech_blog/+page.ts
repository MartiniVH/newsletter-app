import { createPost, getPost, getPosts } from '$lib/services/postService';
import type { PageLoad } from './$types';

export const load: PageLoad = async() => {
    return { getPost, getPosts, createPost }
};
