const YourStack = () => {
  return (
    <div className="w-2xl h-1/3 max-w-sm  rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-sm text-slate-400">No technologies selected yet.</p>

      <div className="mt-5 flex h-28 items-center justify-center rounded-xl border border-dashed border-slate-200">
        <p className="text-sm text-slate-400">Your stack is empty.</p>
      </div>
    </div>
  )
}

export default YourStack
