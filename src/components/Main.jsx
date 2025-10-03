import Datetime from "./Datetime";
import Header from "./Header";
import ExploreAnimation from "./ExploreAnimation";
import Video from "./Video";

export default function Main() {
  return <section id="main" className="w-svw h-svh z-0 flex flex-col items-center justify-between relative">
    <Header />
    <ExploreAnimation />
    <Video />
    <Datetime />
  </section>
}
