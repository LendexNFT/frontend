import { useMemo, useReducer } from "react";
import { ChainContext, InitChainContext } from "./context/chainContext/ChainContext";
import { ChainReducer } from "./context/chainContext/ChainReducer";

const Providers = ({ children }) => {
  const [chainState, chainDispatch] = useReducer(ChainReducer, InitChainContext);
  const  ChainState = useMemo(
    () => ({
      chainState,
      chainDispatch
    }),
    [chainState, chainDispatch]
  );

  const ChainContextProvider = ChainContext.Provider;

  return (
    <>
    <ChainContextProvider value={ChainState}>
      {children}
    </ChainContextProvider>
    </>
  )
}

export default Providers;