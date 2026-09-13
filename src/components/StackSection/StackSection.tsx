import { use, type Dispatch, type SetStateAction } from "react";
import StackCard from "../StackCard/StackCard";
import type { TechnologyType } from "../../Type";

export interface TechnologyProps {
  technologyPromise: Promise<TechnologyType[]>;
  setAddStack: Dispatch<SetStateAction<TechnologyType[]>>;
}

const StackSection = ({ 
    technologyPromise,
    setAddStack
}: TechnologyProps) => {
 const technologies = use(technologyPromise);

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
      {technologies.map((technology) => (
        <StackCard key={technology.id} technology={technology} setAddStack={setAddStack} />
      ))}
    </div>
  );
};

export default StackSection;
