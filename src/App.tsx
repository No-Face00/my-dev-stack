import { Suspense, useState } from "react";
import ExploreTechnologies from "./components/Explore Technologies/Explore Technologies"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import type { TechnologyType } from "./Type";


const Technology = async (): Promise<TechnologyType[]> => {
  const response = await fetch("/data.json");
  if (!response.ok) {
    throw new Error("Failed to load players");
  }
   
  return response.json();
};

function App() {
  
  const [TechnologyPromise] = useState(Technology())

  return (
    <>
    
    
      <Navbar />
      <Hero/>
      <Suspense fallback = {<h1>Loading...</h1>}>
        <ExploreTechnologies technologyPromise={TechnologyPromise} />
      </Suspense>
      
      <Footer/>

    </>
  )
}

export default App
