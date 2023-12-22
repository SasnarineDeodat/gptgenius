"use client";
import { getAllTours } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";
import ToursList from "./ToursList";

export default function ToursPage() {
  const { data, isPending } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => getAllTours(),
  });
  return (
    <>
      {isPending ? (
        <span className="loading"></span>
      ) : (
        <ToursList data={data} />
      )}
    </>
  );
}
