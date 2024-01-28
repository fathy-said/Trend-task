import * as React from "react";

import { ExpandMore } from "@mui/icons-material";
import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "&": {
    // borderRadius: 9,
    // position: "relative",
    // backgroundColor: "#F2F6FF",
    // border: "1px solid #797979",
    // fontSize: 20,
    // color: "red",

    // padding: "8px 26px 8px 40px",
    // transition: ".3s",
    // textAlign: "right",
    borderRadius: 8,
    position: "relative",
    backgroundColor: "#fff",
    border: "1px solid #D0D5DD",
    fontSize: 16,
    width: "100%",
    padding: "10px 14px",
    color: "#6E6E70",
    opacity: 1,
    transition: ".3s",
        userSelect:"none",

    // "&:focus": {
    //   borderRadius: 9,

    //   borderColor: "#80bdff",
    // },
    // "&:hover": {
    //   borderRadius: 9,

    //   borderColor: "#80bdff",
    // },
    "& .MuiInputBase-input::placeholder ": {
      color: "#6E6E70",
      opacity: 1,
    },
  },
  "& .MuiSelect-select": {
    padding: "0 !important",
    userSelect:"none"
  },
}));
let dataGetMenu = [
  {
    id: "1",
    title: "بند المصروف",
  },
  {
    id: "2",
    title: "بند المصروف",
  },
  {
    id: "3",
    title: "بند المصروف",
  },
  {
    id: "4",
    title: "بند المصروف",
  },
  {
    id: "5",
    title: "بند المصروف",
  },
];
const SelectServicesBox = ({ name, errors, register }) => {
  return (
    <>
      <FormControl
        style={{ direction: "rtl" }}
        className=" w-full "
        variant="standard"
      >
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          name={name}
          className="ssssssssssssss"
          IconComponent={() => {
            return (
              <div className="  top-[50%] translate-y-[-50%] left-[20px] block absolute ">
                <ExpandMore className=" !text-[#292D32] text-[24px]" />
              </div>
            );
          }}
          defaultValue={"default"}
          // onChange={(e) => {
          //   handleChangeSelect(e);
          //   formik?.handleChange(e);
          // }}
          // value={age}
          {...register(name)}
          placeholder="ssss"
          input={<BootstrapInput />}
          MenuProps={MenuProps}
        >
          <MenuItem
            value={"default"}
            className=" !text-end !w-full flex !justify-end !items-center"
          >
            بند المصروف
          </MenuItem>
          {dataGetMenu.map((el) => {
            return (
              <MenuItem
                value={el.id}
                key={el.id}
                className=" !text-end !w-full flex !justify-end !items-center"
              >
                {el.title}
              </MenuItem>
            );
          })}
        </Select>
        {errors[name]?.message ? (
          <div
            style={{ color: "red" }}
            className="text-[#c63333] font-[500]  text-[14px] mt-[11px] "
          >
            {/* {textMessage} */}

            {errors[name]?.message}

            {/* {t(textMessage)} */}
          </div>
        ) : null}
      </FormControl>
    </>
  );
};

export default SelectServicesBox;
