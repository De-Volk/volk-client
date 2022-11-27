<script>
    import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
    import Router from 'svelte-spa-router';
    import routes from './pages';
    import Navigation from "$components/Navigation.svelte";

    const queryClient = new QueryClient();
  </script>

<QueryClientProvider client={queryClient}>
  <Router {routes} />
  <Navigation/>
</QueryClientProvider>