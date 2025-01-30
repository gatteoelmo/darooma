import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./components/styles/GlobalStyle.js";
import { Home } from "./pages/Home.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { ErrorPage } from "./pages/ErrorPage.jsx"; // Importa la pagina di errore
import { Background } from "./components/Background.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Background />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
