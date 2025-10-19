import "./core-ui/app.css";
import "./core-ui/leaflet.css";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import installMocks from "./mocks/mockApi";
installMocks();

createRoot(document.getElementById("root")).render(<App />);

