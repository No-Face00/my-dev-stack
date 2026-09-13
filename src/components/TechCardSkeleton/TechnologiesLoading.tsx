import TechCardSkeleton from "./TechCardSkeleton";

const TechnologiesLoading = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <TechCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default TechnologiesLoading;