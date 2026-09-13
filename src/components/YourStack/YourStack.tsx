import { X } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import type { TechnologyType } from "../../Type";

export interface YourStackProps {
  addStack: TechnologyType[];
  setAddStack: Dispatch<SetStateAction<TechnologyType[]>>;
}

const YourStack = ({ addStack, setAddStack }: YourStackProps) => {
  const handleRemove = (name: string) => {
    setAddStack((prev) => prev.filter((item) => item.name !== name));
    toast.error(`${name} removed from your stack.`, {
    position: "bottom-right",
  });
  };

  const handleRemoveAll = () => {
    setAddStack([]);
    toast.error("All technologies removed from your stack.", {
    position: "bottom-right",
  });
  };

  return (
    <div className="h-full w-full max-w-sm rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-sm text-slate-400">
        {addStack.length === 0
          ? "No technologies selected yet."
          : `${addStack.length} Technology Selected`}
      </p>

      {addStack.length === 0 ? (
        <div className="mt-5 flex h-28 items-center justify-center rounded-xl border border-dashed border-slate-200">
          <p className="text-sm text-slate-400">Your stack is empty.</p>
        </div>
      ) : (
        <div className="mt-5 flex flex-col gap-3">
          {addStack.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-9 w-9 rounded-lg object-contain"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-400">{item.category}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleRemove(item.name)}
                aria-label={`Remove ${item.name}`}
                className="text-slate-400 transition-colors hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {addStack.length > 0 && (
        <button
          type="button"
          onClick={handleRemoveAll}
          className="mt-6 w-full rounded-xl border border-red-200 py-3 text-sm font-semibold text-red-500 transition-colors hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;