import Breadcrumb from './Breadcrumb';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-10 p-5">
      <Breadcrumb />
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-10">{children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
