import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx"
import Home from "./pages/Home.jsx";
import SongPlayer from "./components/SongsPlayer.jsx"
import SongsListPage from "./pages/SongsListPage.jsx"

function App() {
  return (
    <div>
      <Header />    
   <div className = "d-flex overflow-hidden">
    <div>
<Sidebar/>
    </div>
    <div className="flex-grow-1" style={{marginTop:"80px",marginBottom:"60px", marginLeft: "20%"  }}>
          <Outlet />
        </div>
   </div>

  <SongPlayer/>    
            
 
   
  
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
        },{
          path  : "/songsInfo",
          element : <SongsListPage/>
        }
    ]
  },
]);