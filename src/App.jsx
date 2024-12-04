import Features from "./sections/Features";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";

const App = () => {
  return (
    <div>
      <main className="overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <Pricing/>
      </main>
    </div>
  );
};

export default App;
