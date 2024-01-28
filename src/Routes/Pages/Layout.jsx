

import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutBox } from "../../Components";


const Layout = (props) => {




	return (
    <>

        <LayoutBox>
          <Outlet />
        </LayoutBox>


    </>
  );
};

export default Layout;
