import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ReactQueryClientProvider } from "./shared/lib/query-client.tsx";
import { NotifyProvider } from "./shared/lib/context/notify/notify-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryClientProvider>
      <NotifyProvider>
        <App />
      </NotifyProvider>
    </ReactQueryClientProvider>
  </StrictMode>
);
