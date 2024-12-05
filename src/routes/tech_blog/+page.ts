import { createPost, getPost, getPosts } from '../../scripts/services/postService';
import type { PageLoad } from './$types';

export const load: PageLoad = async() => {
    return { getPost, getPosts, createPost }
};