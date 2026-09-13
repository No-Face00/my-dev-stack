import { use, useEffect, useState } from "react";
import StackCard from "../StackCard/StackCard";
import type { TechnologyType } from "../../Type";

export interface TechnologyProps {
  technologyPromise: Promise<TechnologyType[]>;
}

const StackSection = ({ technologyPromise }: TechnologyProps) => {
 const technologies = use(technologyPromise);

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
      {technologies.map((technology) => (
        <StackCard key={technology.id} technology={technology} />
      ))}
    </div>
  );
};

export default StackSection;
