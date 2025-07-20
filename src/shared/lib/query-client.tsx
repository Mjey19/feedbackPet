import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const ReactQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        retry: 2,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
