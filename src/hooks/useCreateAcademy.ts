import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAcademy } from "../services/academyService";
import { AcademyPayload } from "../interface/academyPayload";

export function useCreateAcademy() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: AcademyPayload) => createAcademy(payload),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["academies"] });
    },
  });
}
