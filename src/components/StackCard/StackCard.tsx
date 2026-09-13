import { Star } from "lucide-react";
import { Button } from "@heroui/react";
import type { TechnologyType } from "../../Type";

interface StackCardProps {
  technology: TechnologyType;
}

const StackCard = ({ technology }: StackCardProps) => {
  return (
    <div className="flex h-full w-full max-w-90 flex-col justify-between gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50">
          <img src={technology.icon} alt={technology.name} className="h-6 w-6 object-contain" />
        </div>

        <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-600">
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
          <span className="text-xs font-semibold text-slate-700">{technology.rating}</span>
        </div>
      </div>

      <Button className="w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white">
        Add to Stack
      </Button>
    </div>
  );
};

export default StackCard;
