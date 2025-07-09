import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx"
import Home from "./pages/Home.jsx";
import SongPlayer from "./components/SongsPlayer.jsx"
import SongsListPage from "./pages/SongsListPage.jsx"
import {useContext} from "react"
import { SongsContextProvider, SongsContext } from "./utils/SongsContext.jsx";
import AudioContextProvider from "./utils/AudioContext"
function AppLayout() {
  const {audioRef,currentPlayingSong} = useContext(SongsContext)
  
  return (
    <div>

      <Header />    
   <div className = "d-flex overflow-hidden">
    <div>
<Sidebar/>
    </div>
    <div className="flex-grow-1" style={{marginTop:"80px", marginLeft: "20%", marginBottom: currentPlayingSong? "75px" : "0px"  }}>
          <Outlet />
        </div>
   </div>

  {currentPlayingSong  && <SongPlayer/> }
            
   <audio ref = {audioRef} preload="auto"></audio>
    </div>
  );
}

function App(){
  return(
   
    <SongsContextProvider>
     <AudioContextProvider>
      <AppLayout/>
      </AudioContextProvider>
    </SongsContextProvider>
   
  )
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