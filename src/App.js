import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import HomeView from "./views/HomeView/HomeView";
import { NavBar } from "./components";
import TrackShipmentView from "./views/TrackShipmentView";
import theme from "./lib/theme";

const router = createBrowserRouter([
  { path: "/", element: <HomeView /> },
  { path: "/shipments/track/:trackingNumber", element: <TrackShipmentView /> },
]);

function App() {
  return (
    <>
   {/*    <NavBar /> */}
   <ThemeProvider theme={theme}>
   <RouterProvider router={router}></RouterProvider>
   </ThemeProvider>
   
    </>
  );
}

export default App;
