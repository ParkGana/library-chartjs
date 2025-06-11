type ChartContainerProps = {
  label: string;
  children: React.ReactNode;
};

const ChartContainer = ({ label, children }: ChartContainerProps) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <p className="text-label">{label}</p>
      <div className="relative w-full aspect-[3/2]">
        <div className="absolute inset-0 p-3 border-4 border-gray-500">{children}</div>
      </div>
    </div>
  );
};

export default ChartContainer;
