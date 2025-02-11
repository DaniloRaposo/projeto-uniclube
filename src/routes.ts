import wrap from "svelte-spa-router/wrap";
import Home from "./Page/Home/Home.svelte";

const routes = new Map();

routes.set(
  "/",
  wrap({
    component: Home,
  })
);

export default routes;
