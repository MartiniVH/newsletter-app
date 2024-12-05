<script>
	import { browser } from "$app/environment";
    import "../app.css";
	import Navigation from "../components/organisms/Navigation.svelte";
    let { children } = $props();
    import { QueryClientProvider, QueryClient } from "@tanstack/svelte-query";
    import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools';

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                enabled: browser,
            }
        }
    });
</script>

<Navigation />

<QueryClientProvider client={queryClient}>
    <div class="bg-white items-center mt-4">
        {@render children()}
    </div>
    <SvelteQueryDevtools />
</QueryClientProvider>
