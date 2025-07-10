import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { Desktop } from "./screens/Desktop";

const App = () => {
  const [currentView, setCurrentView] = useState('main');

  const handleNavigate = (view: string) => {
    setCurrentView(view);
  };

  return (
    <Desktop currentView={currentView} onNavigate={handleNavigate} />
  );
};

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
