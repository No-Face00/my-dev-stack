import { Atom, Star } from "lucide-react"
import { Button } from "@heroui/react";


const StackCard = () => {
  return (
     <div className="flex w-77.5 max-w-sm flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      {/* Top row: icon + popular badge */}
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50">
          <Atom className="h-6 w-6 text-sky-500" />
        </div>

        <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-600">
          Popular
        </span>
      </div>

      {/* Title + description */}
      <div>
        <h3 className="text-lg font-bold text-slate-900">React</h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-500">
          A declarative, component-based JavaScript library for building
          modern user interfaces.
        </p>
      </div>

      {/* Tags + rating */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
            Frontend
          </span>
          <span className="text-xs font-medium text-slate-400">
            Beginner-Friendly
          </span>
        </div>

        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span className="text-xs font-semibold text-slate-700">4.9</span>
        </div>
      </div>

      {/* CTA */}
      

      <Button className="w-full rounded-xl bg-slate-900 py-3 text-sm font-Plus Jakarta Sans text-white "
      > Add to Stack</Button>
    </div>
  )
}

export default StackCard
