import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ToursPage from "@/components/ToursPage";
import { getAllTours } from "@/utils/actions";

export default async function AllToursPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["tasks"],
    queryFn: () => getAllTours(),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ToursPage />
    </HydrationBoundary>
  );
}
