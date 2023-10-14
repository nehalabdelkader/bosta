import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { NavBar } from "./components";
import TrackShipmentView from "./views/TrackShipmentView";
import theme from "./lib/theme";

const router = createBrowserRouter([
  { path: "/shipments/track/:trackingNumber", element: <TrackShipmentView /> },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />

   <RouterProvider router={router}></RouterProvider>
   </ThemeProvider>
  );
}

export default App;
