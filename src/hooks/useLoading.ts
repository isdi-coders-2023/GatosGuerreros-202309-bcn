import { useContext, useCallback } from "react";
import UiContext from "../features/ui/store/UiContext";

export const useLoading = () => {
  const { setIsLoading } = useContext(UiContext);

  const activateLoading = useCallback(() => {
    setIsLoading(true);
  }, [setIsLoading]);

  const disableLoading = useCallback(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  return { activateLoading, disableLoading };
};
