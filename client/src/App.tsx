import React from "react";
import { useRoutes } from "hookrouter";
import Routes from "./Routes";
import NotFoundPage from "./NotFoundPage";

function App() {
  const routeResult = useRoutes(Routes);

  return (
    <div className="app-container">
      {routeResult ? routeResult : <NotFoundPage />}
    </div>
  );
}


export default App;
