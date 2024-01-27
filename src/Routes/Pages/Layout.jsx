

// Icons
import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutBox } from "../../Components";


const Layout = (props) => {




	return (
    <>
      <>
        <LayoutBox>
          <Outlet />
        </LayoutBox>
      </>

      <h1 className=" w-full h-[40px] bg-slate-500"> footer</h1>
    </>
  );
};

export default Layout;
