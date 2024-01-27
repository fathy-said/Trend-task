
import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

const BootstrapInputText = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
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
    // "&:focus": {
    //   borderRadius: 9,
    //   borderColor: "#80bdff",
    // },
    // "&:hover": {
    //   borderRadius: 9,

    //   borderColor: "#80bdff",
    // },
  },
  "& .MuiInputBase-input::placeholder ": {
    color: "#6E6E70",
    opacity: 1,
  },
}));

const GlobalInput = ({

  placeholder,

  register,
  errors,
  name,
}) => {


  return (
    <>
      <FormControl
        variant="standard"
        style={{ direction: "rtl" }}
        className=" w-full flex justify-center items-start flex-col gap-[11px]"
      >
        {/* <div className="text-[#343434] font-[600] text-[20px] mb-[4px] ">
          {nameInput}
        </div> */}
        <BootstrapInputText
          className=" w-full placeholder:!text-slate-400"
          defaultValue=""
          id="bootstrap-input"
          name={name}
          placeholder={placeholder}
          {...register(name)}
          // onChange={formik?.handleChange}
          // value={formik?.values[name]}
        />
        {errors[name]?.message ? (
          <div
            style={{ color: "red" }}
            className="text-[#c63333] font-[500]  text-[14px] "
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

export default GlobalInput;
