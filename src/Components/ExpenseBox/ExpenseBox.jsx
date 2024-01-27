import { yupResolver } from "@hookform/resolvers/yup";
import React from 'react';
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { GlobalInput, SelectServicesBox, UploadImgBox } from "../index.js";

const schema = Yup.object().shape({
  img: Yup.string().required("SVG, PNG, JPG or GIF (max. 800x400px)"),
  desc: Yup.string().required("ادخل وصف المصروف"),
  price: Yup.string().required("ادخل المبلغ"),
  order: Yup.string().required("ادخل بند المصروف"),
});
const ExpenseBox = () => {
  // from hooks
  const {
    control,
    handleSubmit,
    register,
    setValue,
    watch,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: {
      img: "",
      order: "",
      desc: "",
      price: "",
    },
  });
  const onSubmit = async (data) => {
  console.log(data)


  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="box p-[24px] chart-shadow min-h-[508px] flex gap-[24px] flex-col justify-start items-end"
      >
        <h3 className="text-[16px] font-[600] text-color_04 leading-[26.6px]">
          المصروفات
        </h3>
        <UploadImgBox {...{ errors, watch, register, setError, setValue }} />
        <div className=" w-full h-full max-lg:flex-col-reverse  max-lg:items-end flex justify-start items-start gap-[32px]">
          <div className="     flex-1 w-full flex  justify-end items-start">
            <div className="flex flex-col min-h-[170px] gap-[16px] justify-center items-start w-full lg:max-w-[512px] ">
              <SelectServicesBox
                {...{
                  errors,
                  register,
                  name: "order",
                }}
                placeholder={`بند المصروف`}
              />
              <GlobalInput
                placeholder={`وصف المصروف`}
                {...{
                  errors,
                  register,
                  name: "desc",
                }}
              />
              <GlobalInput
                placeholder={`المبلغ`}
                {...{
                  errors,
                  register,
                  name: "price",
                }}
              />
            </div>
          </div>
          <h3 className="text-[14px] font-[600] text-end text-[#344054] leading-[26.6px] flex-1 max-w-[380px]">
            إضافة مصروفات
          </h3>
        </div>
        <div className=" w-full flex  max-lg:justify-center justify-start items-center gap-[12px] ">
          <button
            type="submit"
            className=" view_report text-[16px] font-[600] bg-color_14 w-[147px] text-color_05 leading-[25.6px]   py-[10px] px-[18px] text-center border-[1px] rounded-[8px] border-color_14"
          >
            إضافة
          </button>
          <button
            type="button"
            onClick={() => {
              reset({
                img: "",
                order: "",
                desc: "",
                price: "",
              });
            }}
            className=" view_report text-[16px] font-[600] bg-color_05  w-[147px] text-color_14 leading-[25.6px]   py-[10px] px-[18px] text-center border-[1px] rounded-[8px] border-color_14"
          >
            إلغاء
          </button>
        </div>
      </form>
    </>
  );
}

export default ExpenseBox;
