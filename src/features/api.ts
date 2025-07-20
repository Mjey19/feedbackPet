import { queryOptions } from "@tanstack/react-query";
import { jsonApiInstance } from "../shared/lib/api-instance";
import type { FormType } from "../shared/types/form.type";

export const feedbackApi = {
  baseKey: "feedback",
  getFeedbacks: () => {
    return queryOptions({
      queryKey: [feedbackApi.baseKey],
      queryFn: (meta) => {
        return jsonApiInstance<FormType[]>("", {
          method: "GET",
          signal: meta.signal,
        });
      },
    });
  },
  addFeedback: (data: FormType) => {
    return jsonApiInstance("", {
      method: "POST",
      json: data,
    });
  },
};
