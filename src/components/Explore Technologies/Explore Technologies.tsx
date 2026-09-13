import { Suspense, useState } from "react";
import YourStack from "../YourStack/YourStack";
import StackSection from "../StackSection/StackSection";

import type { TechnologyType } from "../../Type";
import TechnologiesLoading from "../TechCardSkeleton/TechnologiesLoading";

export interface TechnologyProps {
  technologyPromise: Promise<TechnologyType[]>;
}

const ExploreTechnologies = ({ technologyPromise }: TechnologyProps) => {
  const [addStack, setAddStack] = useState<TechnologyType[]>([]);

  return (
    <div className="container mx-auto mt-30 px-5 py-8">
      <div>
        <p className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-4xl">
          Explore the <span className="text-[#D91B7E]">Technologies</span>
        </p>
        <p className="max-w-md text-sm text-slate-600 sm:text-base font-Plus Jakarta Sans">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

     
      <div className="flex flex-col gap-8 pt-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="w-full lg:flex-1">
          <Suspense fallback={<TechnologiesLoading />}>
            <StackSection
              technologyPromise={technologyPromise}
              setAddStack={setAddStack}
            />
          </Suspense>
        </div>

        <div className="w-full lg:w-96 lg:shrink-0">
          <YourStack addStack={addStack} setAddStack={setAddStack} />
        </div>
      </div>
    </div>
  );
};

export default ExploreTechnologies;