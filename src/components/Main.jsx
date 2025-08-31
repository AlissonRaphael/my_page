import Header from './Header';
import ExploreAnimation from './ExploreAnimation';
import Title from './Title';

export default function Main() {
  return <section className="w-full h-svh z-0 flex flex-col items-center justify-between relative">
    <Header />
    <ExploreAnimation />
    <Title />
  </section>
}
