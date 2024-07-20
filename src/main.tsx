import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import App from "./App.tsx";
import "./index.css";
import { QueryProvider } from "./lib/react-query/QueryProvider.tsx";
import store from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryProvider>
        <Toaster richColors />
        <App />
      </QueryProvider>
    </Provider>
  </BrowserRouter>
);
