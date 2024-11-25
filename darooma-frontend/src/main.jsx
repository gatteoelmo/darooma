import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./components/styles/GlobalStyle";
import { Home } from "./pages/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/createGoal" element={<CreateGoal />} />
          <Route path="/editGoal/:id" element={<EditGoal />} />
          <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
