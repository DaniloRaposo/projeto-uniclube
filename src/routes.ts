import wrap from "svelte-spa-router/wrap";

import HomeViewModel from "./Pages/Home/HomeViewModel.svelte";

const routes = new Map();

routes.set(
  "/",
  wrap({
    component: HomeViewModel,
  })
);

export default routes;
