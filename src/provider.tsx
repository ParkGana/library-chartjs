import QueryProvider from './providers/queryProvider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <QueryProvider>{children}</QueryProvider>;
};

export default Providers;
