import TechCardSkeleton from "./TechCardSkeleton";

const TechnologiesLoading = () => {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <TechCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default TechnologiesLoading;