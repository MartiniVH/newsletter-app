export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await res.json();
};

export const getPost = async (postId: number | string) => {
    if(typeof postId === 'number') {
        postId.toString();
    }

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return await res.json();
};

export async function createPost() {
    return await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then((response) => response.json());
}
