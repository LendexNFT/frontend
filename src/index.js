import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Context from "./context/Context";
import "./index.css";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
    <Context>

      <App />
    {/* </Provider> */}
    </Context>
  </BrowserRouter>
);
