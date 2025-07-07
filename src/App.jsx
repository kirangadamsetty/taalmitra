import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx"
import Home from "./pages/Home.jsx";

function App() {
  return (
    <div>
      <Header />    
   <div className = "d-flex overflow-hidden">
    <div>
<Sidebar/>
    </div>
    <div className = "flex-grow-1">
<Outlet/>
    </div>
   </div>

  
     
       
            
 
   
  
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
        {
            path : "/",
            element :<Home/>
        }
    ]
  },
]);