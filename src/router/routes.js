import Home from "../pages/Home";
import DcHeroes from "../pages/HeroList";
import Calendar from "../pages/Calendar";

const routes = [
  { path: "/", component: Home },
  { path: "/dc-heroes", component: DcHeroes },
  { path: "/calendar", component: Calendar }
];

export default routes;
