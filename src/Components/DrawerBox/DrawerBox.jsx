import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import * as React from "react";

import { useTheme } from "@emotion/react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import { drawerWidth } from "../../API/index";
import { BarChart01, LogOutIcon, LogoBar } from "../../asset/Icons";


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  ...theme.mixins.toolbar,
  justifyContent: "space-between",
  margin:"32px 20px 0 20px"
}));
let menuLink = [
  {
    name: `نظرة عامة`,
    link: `/didn't-create`,
    icon: <BarChart01 />,
  },
  {
    name: `المشروعات`,
    link: `/`,
    icon: <BarChart01 />,
  },
  {
    name: `الفواتير`,
    link: `/didn't-create`,
    icon: <BarChart01 />,
  },
  {
    name: `المصروفات`,
    link: `/didn't-create`,
    icon: <BarChart01 />,
  },
  {
    name: `الجدول الزمنى للمشروع`,
    link: `/didn't-create`,
    icon: <BarChart01 />,
  },
  {
    name: `إدارة الحملات`,
    link: `/didn't-create`,
    icon: <BarChart01 />,
  },
];
const DrawerBox = ({ open, setOpen }) => {
  const theme = useTheme();

  return (
    <div
      className={`${
        !open && "hidden max-lg:w-full"
      } max-lg:fixed h-full top-0 left-0 max-lg:w-full  lg:!max-w-[${drawerWidth}]  z-[9999]`}
    >
      <div className={`relative   h-full  `}>
        <div
          onClick={() => {
            setOpen(false);
          }}
          className={`absolute    w-full max-w-[${drawerWidth}] lg:hidden right-0 h-full  top-0 bg-[#0000009d] `}
        ></div>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
          className=""
          variant="persistent"
          anchor="right"
          open={open}
        >
          <DrawerHeader>
            <IconButton
              onClick={() => {
                setOpen(false);
              }}
              className={`lg:!hidden`}
            >
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon className=" !text-[30px]" />
              ) : (
                <ChevronRightIcon className=" !text-[30px]" />
              )}
            </IconButton>
            <div className="ml-auto w-fit">
              <LogoBar />
            </div>
          </DrawerHeader>
          {/* <Divider /> */}
          <div className=" mt-[94px]"></div>
          <div className="px-[24px] flex flex-col justify-between items-center w-full h-full">
            <div className="   gap-[10px]  h-full w-full flex justify-start items-end flex-col">
              {menuLink?.map((el, index) => {
                return (
                  <NavLink
                    to={el?.link}
                    key={index}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "p-[12px] active w-full bg-color_02 text-color_04 rounded-[6px] gap-[8px] cursor-pointer flex justify-end items-start"
                        : "p-[12px] transition-[.3s] hover:bg-color_02 hover:text-color_04 w-full text-color_01 rounded-[6px] gap-[8px] cursor-pointer flex justify-end items-start"
                    }

                  >
                    <div className=" text-[16px] font-[600] ">{el?.name}</div>
                    <span>{el?.icon}</span>
                  </NavLink>
                );
              })}
            </div>
            <div className="w-full border-t-[1px] border-t-color_03 flex justify-between items-start mb-[32px] px-[16px] pt-[24px]">
              <span>
                <LogOutIcon />
              </span>
              <div className=" text-[14px] font-[600] text-color_01 ">
                تسجيل الخروج
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default React.memo(DrawerBox);
