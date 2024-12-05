<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '../atoms/Button.svelte';

	interface IProps {
		interview: any;
	}

	let { interview }: IProps = $props();
</script>

<li
	class="rounded-md first:mx-0 md-3 p-4 bg-slate-100 border-solid border-2 border-transparent hover:border-lime-400 transition ease-in-out cursor-pointer"
>
	<a href='/article/{interview.id}'>
		<article>
			<h1>{interview.title}</h1>
			<p>{interview.intro}</p>
			<Button className="mt-4" onClick={() => goto(`/article/${interview.id}`)}>Read more</Button>
		</article>
	</a>
</li>
