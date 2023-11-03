import { PropsWithChildren, useState } from "react";
import UiContext from "./UiContext";

const UiContextWrapper = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <UiContext.Provider
      value={{ isError, isLoading, setIsLoading, setIsError }}
    >
      {children}
    </UiContext.Provider>
  );
};

export default UiContextWrapper;
