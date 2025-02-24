import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Index"
import ThemeToggle from "./components/ThemeToggle/Index"
import Loader from "./components/Loader/Index"
import React from "react"


function Layout() {

  console.log("Layout component is rendering...");

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    console.log("Loader started...");
    const timer = setTimeout(() => {
      console.log("Loader finished...");
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timeout to prevent memory leaks
  }, []);

  return (
    <>
        {
          loading ? (
            <Loader></Loader>
          ) : (
            <>
              <Outlet></Outlet>
              <Footer></Footer>
              <ThemeToggle></ThemeToggle>
            </>
          ) 
        }
    </>
  )
}

export default Layout