import { useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { useEffect } from "react";

const App = () => {

  const location = useLocation();

  useEffect(()=>{
     if(location.hash){
      let ele = document.getElementById(location.hash.slice(1));
      console.log(ele)
      if(ele){
        ele.scrollIntoView({behavior:'smooth'});
      }else{
        window.scrollTo({top:0 , left: 0 ,behavior:'smooth'});
      }
    }
  }, [location]);


  return (
    <div>
          <Home />    
    </div>
  );
};

export default App;
