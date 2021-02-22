<script lang="ts">
    import { Router } from "super-svelte-router";
    import AppRouter from "./router";
    const { routes } = AppRouter;
</script>

<Router {routes} />
