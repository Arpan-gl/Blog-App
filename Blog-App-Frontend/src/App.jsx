import { useState,useEffect } from "react";
import {useDispatch} from "react-redux";
import authService from "./appwrite/auth";
import {login, logout} from "./store/authSlice";
import {Header,Footer} from "./components/index";
import {Outlet} from "react-router";

function App() {
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      } else{
        dispatch(logout());
      }
    })
    .catch((error)=>console.log("Please Login User:",error))
    .finally(()=>setLoading(false));
  },[]);

  return !loading ? (
    <div className="min-w-screen flex flex-wrap bg-gray-500 content-between text-white font-medium">
      <div className="w-full block">
        <Header />
        <main>
         {/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;