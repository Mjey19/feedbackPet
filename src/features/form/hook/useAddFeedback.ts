import { useQueryClient, useMutation } from "@tanstack/react-query";
import type { FormType } from "../../../shared/types/form.type";
import { feedbackApi } from "../../api";
import { useNotify } from "../../../shared/lib/context/notify/notify-context";

export const useAddFeedback = (reset?: () => void) => {
  const { openNotify } = useNotify();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: feedbackApi.addFeedback,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [feedbackApi.baseKey] });
      reset?.();
      openNotify("Отзыв отправлен!")
    },
    onError: () => {
      alert("Ошибка при отправке отзыва");
    },
  });
  const onSubmit = (data: FormType) => {
    mutation.mutate(data);
  };

  return { onSubmit };
};
