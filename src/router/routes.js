import Home from "../pages/Home";
import DcHeroes from "../pages/HeroList";
import Calendar from "../pages/Calendar";
import Markdown from "../pages/Markdown";
import Carousel from "../pages/Carousel";

const routes = [
  { id: 1, name: "Home", path: "/", component: Home },
  { id: 2, name: "Dc Heroes", path: "/dc-heroes", component: DcHeroes },
  { id: 3, name: "Calendar", path: "/calendar", component: Calendar },
  { id: 4, name: "Markdown", path: "/markdown", component: Markdown },
  { id: 5, name: "Carousel", path: "/carousel", component: Carousel }
];

export default routes;
