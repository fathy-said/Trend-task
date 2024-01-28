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
          IconComponent={() => {
            return (
              <div className="  top-[50%] translate-y-[-50%] left-[20px] block absolute ">
                <ExpandMore className=" !text-[#292D32] text-[24px]" />
              </div>
            );
          }}
          defaultValue={""}
          displayEmpty
          {...register(name)}
          placeholder="ssss"
          input={<BootstrapInput />}
          MenuProps={MenuProps}
        >
          <MenuItem
            disabled
            value=""
            className=" !text-end !w-full flex !justify-end !items-center"
          >

            <em> بند المصروف</em>
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
