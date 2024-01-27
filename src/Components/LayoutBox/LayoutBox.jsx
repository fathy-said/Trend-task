
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { drawerWidth } from "../../API/index";
import { AppBarBox, DrawerBox } from "../index";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    /**
     * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
     * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
     * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
     * proper interaction with the underlying content.
     */
    position: "relative",
  })
);



const LayoutBox = ({children}) => {
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <Box sx={{ display: "flex" }} className="h-full">
        <CssBaseline />
        <AppBarBox {...{ open, setOpen }} />
        <Main
          open={open}
          style={{ width: open ? `calc(100% - ${drawerWidth}px)` : "100% " }}
          // className={`   !p-0  !max-w-full h-full !overflow-hidden`}
          className={`   !p-0  !max-w-full h-full  !overflow-x-hidden`}
        >
          <div className="  max-lg:mt-[129px]  lg:mt-[95px]"></div>
          {children}
        </Main>
        <DrawerBox {...{ open, setOpen }} />
      </Box>
    </>
  );
};

export default LayoutBox;

