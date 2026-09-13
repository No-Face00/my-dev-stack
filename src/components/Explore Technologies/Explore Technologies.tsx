
import YourStack from "../YourStack/YourStack";
import StackSection from "../StackSection/StackSection";

const ExploreTechnologies = () => {
  return (
    <div className=" container mx-auto mt-30    px-5 py-8 ">
        
      <div>
        <p className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-4xl">
          Explore the <span className=" text-[#D91B7E]">Technologies</span>
        </p>
        <p className="max-w-md text-sm text-slate-600 sm:text-base font-Plus Jakarta Sans">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="flex justify-between pt-10">

          <StackSection/>

          <YourStack/>

      </div>
      
    </div>
  );
};

export default ExploreTechnologies;
