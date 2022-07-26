/* eslint-disable */
import Toaster from "./components/Helpers/Toaster";
import Routers from "./Routers";
// import { StoreProvider } from "./store/StoreProvider";

function App() {
  return (
    <>
      {/* <AppProvider> */}
      <Routers />
      <Toaster />
      {/* </AppProvider> */}
    </>
  );
}

export default App;
