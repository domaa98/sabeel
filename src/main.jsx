import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageOne from "./pages/pageOne/PageOne.jsx";
import PageTwo from "./pages/pageTwo/PageTwo.jsx";
import PageThree from "./pages/pageThree/PageThree.jsx";
import global_ar from "./translations/ar/global.json";
import global_en from "./translations/en/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

import './i18n';


i18next.init({
  interpolation: { escapeValue: false },
  lng: "ar",
  resources: {
    ar: {
      global: global_ar,
    },
    en: {
      global: global_en,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pageone",
    element: <PageOne />,
  },
  {
    path: "/pagetwo",
    element: <PageTwo />,
  },
  {
    path: "/pagethree",
    element: <PageThree />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </StrictMode>
);
