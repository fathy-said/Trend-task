
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import * as React from "react";

import { drawerWidth } from "../../API/index";
import { BellIcon, MenuIcon, SearchIcon, SettingsIcon, UserDropIcon } from "../../asset/Icons";


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  boxShadow: "none",
  backgroundColor: "#ffffff",
 borderBottom: "1px solid #EAECF0",
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,

    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const AppBarBox = ({ open, setOpen }) => {

 const handleDrawer = React.useCallback(() => {
   setOpen((prev) => !prev);
 }, [setOpen]);

  return (
    <div className=" ">
      <AppBar position="fixed" open={open}>
        <div className=" container w-full flex flex-col max-lg:h-fit justify-center lg:h-[94px]  items-center px-[32px]   ">
          <div className="w-full flex justify-between  items-center  ">
            <div className=" h-full flex justify-center items-center gap-[5px] ">
              <div className=" !mr-[11px] cursor-pointer">
                <UserDropIcon />
              </div>
              <div className=" transition-[0.3s]  p-[10px] cursor-pointer hover:bg-color_03 rounded-[6px]">
                <BellIcon />
              </div>
              <div className=" transition-[0.3s]  p-[10px] cursor-pointer hover:bg-color_03 rounded-[6px]">
                <SettingsIcon />
              </div>
            </div>
            <div className="flex justify-center items-center gap-[24px]">
              <div className=" max-lg:hidden border-[1px] gap-[8px] border-color_06 rounded-[8px] flex py-[10px] px-[14px] justify-center items-center">
                <input
                  type="text"
                  dir="rtl"
                  placeholder="أبحث عن "
                  className=" !border-none  !outline-none text-color_07 text-[16px] font-[400]"
                />
                <div>
                  <SearchIcon />
                </div>
              </div>
              <IconButton
                color="inherit"
                disableRipple={true}
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawer}
                className={`${open && "max-lg:!hidden"}`}
                // sx={{ ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </div>
          <div className=" lg:hidden mb-[20px] border-[1px] gap-[8px] border-color_06 rounded-[8px] flex py-[10px] px-[14px] justify-center items-center">
            <input
              type="text"
              dir="rtl"
              placeholder="أبحث عن "
              className=" !border-none  !outline-none text-color_07 text-[16px] font-[400]"
            />
            <div>
              <SearchIcon />
            </div>
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default React.memo(AppBarBox);
