import { Star } from "lucide-react";
import { Button } from "@heroui/react";
import type { TechnologyType } from "../../Type";
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

interface StackCardProps {
  technology: TechnologyType;
  setAddStack: Dispatch<SetStateAction<TechnologyType[]>>;
}

const StackCard = ({ technology, setAddStack }: StackCardProps) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectPlayer = () => {
    setIsSelected(true);
    toast.success(`${technology.name} added to your stack.`,{
    position: "bottom-right",
  });
    setAddStack((prevStack) => [...prevStack, technology]);
  };

  return (
    <div
      className={`flex h-full w-full max-w-90 flex-col justify-between gap-4 rounded-2xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md ${
        isSelected
          ? "border-[#D91B7E] ring-1 ring-[#D91B7E]"
          : "border-slate-100"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-6 w-6 object-contain"
          />
        </div>

        <span className="rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-medium text-[#D91B7E] font-semibold">
          {technology.badge}
        </span>
      </div>

      <div>
        <h3 className="text-lg font-bold text-slate-900">{technology.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-500">
          {technology.description}
        </p>
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
            {technology.category}
          </span>
          <span className="text-xs font-medium text-slate-400">
            {technology.difficulty}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span className="text-xs font-semibold text-slate-700">
            {technology.rating}
          </span>
        </div>
      </div>

<Button
  className={`w-full rounded-xl py-3 text-sm font-semibold transition-colors ${
    isSelected
      ? "cursor-not-allowed bg-pink-50 text-[#D91B7E]"
      : "bg-slate-900 text-white hover:bg-slate-800"
  }`}
  isDisabled={isSelected}
  onClick={handleSelectPlayer}
>
  {isSelected ? "✓ Added to Stack" : "Add to Stack"}
</Button>
    </div>
  );
};

export default StackCard;
