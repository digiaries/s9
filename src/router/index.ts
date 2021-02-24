// import Index from "@pages/Index.svelte";

const Router = {
    "routes": [
        {
            "path": "/"
            // , "component": Index
            , "lazyLoad": {
                component: () => import("@pages/Index.svelte")
            }
            , "name": "Index"
        }
        , {
            "path": "/lazy"
            , "lazyLoad": {
                component: () => import("@pages/Lazy.svelte")
            }
            , "name": "Lazy page"
        }
        , {
            "path": "/dynamic/:type"
            , "lazyLoad": {
                component: () => import("@pages/Dynamic.svelte")
            }
            , "name": "Dynamic page"
        }
    ]
}

export default Router;