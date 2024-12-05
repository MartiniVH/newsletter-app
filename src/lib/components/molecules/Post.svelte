<script lang="ts">
	import { goto } from "$app/navigation";
	import Button from "../atoms/Button.svelte";

    interface IProps {
        id: number;
        title: string;
        body: string;
        onMouseOver: (postId: number) => void;
    };

    let { id, title, body, onMouseOver }: IProps = $props();
</script>

<li class="py-2 px-2 bg-slate-100 rounded-md border-solid border-2 border-transparent hover:border-lime-400 transition ease-in-out">
    <a class="h-full flex flex-wrap flex-col justify-between" href="/tech_blog/posts/{id}" onfocus={() => onMouseOver} onmouseover={() => onMouseOver}>
        <article>
            <h1>{title}</h1>
            <p>{body}</p>
        </article>
        <div class="mt-4">
            <Button onClick={() => goto(`/tech_blog/posts/${id}`)}>Read more</Button>
        </div>
    </a>
</li>
