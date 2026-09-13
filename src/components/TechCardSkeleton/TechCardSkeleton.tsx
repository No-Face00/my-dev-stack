const TechCardSkeleton = () => {
  return (
 <div className="flex h-full w-full max-w-90 flex-col justify-between gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
  
      <div className="flex items-start justify-between">
        <div className="h-11 w-11 animate-pulse rounded-xl bg-slate-100" />
        <div className="h-6 w-16 animate-pulse rounded-full bg-slate-100" />
      </div>

  
      <div className="flex flex-col gap-2">
        <div className="h-5 w-2/5 animate-pulse rounded bg-slate-100" />
        <div className="h-4 w-full animate-pulse rounded bg-slate-100" />
        <div className="h-4 w-4/5 animate-pulse rounded bg-slate-100" />
      </div>

   
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <div className="h-6 w-16 animate-pulse rounded-md bg-slate-100" />
          <div className="h-4 w-20 animate-pulse rounded bg-slate-100" />
        </div>
        <div className="flex items-center gap-1">
          <div className="h-4 w-4 animate-pulse rounded-full bg-slate-100" />
          <div className="h-4 w-6 animate-pulse rounded bg-slate-100" />
        </div>
      </div>

     
      <div className="h-11 w-full animate-pulse rounded-xl bg-slate-200" />
    </div>
  );
};

export default TechCardSkeleton;