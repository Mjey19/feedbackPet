import { useQuery } from "@tanstack/react-query";
import { feedbackApi } from "../../api";

export default function useGetFeedbacks() {
  const { data: feedbacks = [], isLoading } = useQuery({
    ...feedbackApi.getFeedbacks(),
  });

  return { feedbacks, isLoading };
}
