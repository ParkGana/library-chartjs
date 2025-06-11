const ChartContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full aspect-[3/2]">
      <div className="absolute inset-0 p-3 border-4 border-gray-500">{children}</div>
    </div>
  );
};

export default ChartContainer;
