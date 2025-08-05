import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <ShimmerCard key={index} />
        ))}
    </div>
  );
};

export default Shimmer;
