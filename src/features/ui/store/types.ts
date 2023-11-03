interface UiContextStructure {
  isLoading: boolean;
  isError: boolean;
  setIsLoading: (isLoading: boolean) => void;
  setIsError: (isError: boolean) => void;
}

export default UiContextStructure;
