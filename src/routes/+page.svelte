<script>
	import Container from '$lib/components/organisms/Container.svelte';
	import interviews from '../data/articles.json';
	import InterviewContainer from '$lib/components/organisms/InterviewContainer.svelte';
</script>

<div class="flex justify-center">
	<Container>
		<h1 class="text-center">Recent interviews</h1>
		<InterviewContainer {interviews} />
	</Container>
</div>
