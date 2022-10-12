import React from "react";
import { useState } from "react";
import Mycontext from "./Context";

const AppSate = (props) => {
    const [isScrolled, setisScrolled] = useState("main_nav_container");
    const [categories, setcategories] = useState("Action");
    const [manga, setmanga] = useState([])
  return (
    <>
    <Mycontext.Provider value={{isScrolled, setisScrolled, categories, setcategories, setmanga, manga}}>
        {props.children}
    </Mycontext.Provider>
    </>
  )
}

export default AppSate