import { yupResolver } from "@hookform/resolvers/yup";
import React from 'react';
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { FilterIcon, SearchIcon } from "../../asset/Icons/index.js";
import { ExpenseTable, GlobalInput, SelectServicesBox, UploadImgBox } from "../index.js";

const schema = Yup.object().shape({
  img: Yup.mixed()
    .required("الرجاء تحميل صورة")
    .test(
      "fileSize",
      "يجب أن يكون حجم الصورة أصغر من 800 كيلو بايت",
      (value) => {
        if (!value) return true; // Handle case where no file is selected
        return value.size <= 800 * 1024; // 800KB
      }
    )
    .test(
      "dimensions",
      "يجب أن تكون الصورة بحجم 800 × 400 بكسل أو أصغر​",
      async (value) => {
        if (!value) return true; // Handle case where no file is selected
        try {
          const image = await getImageDimensions(value);
          return image.width <= 800 && image.height <= 400;
        } catch (error) {
          throw new Error("Failed to load the image");
        }
      }
    ),
  desc: Yup.string().required("ادخل وصف المصروف"),
  price: Yup.string().required("ادخل المبلغ"),
  order: Yup.string().required("ادخل بند المصروف"),
});

// Helper function to get image dimensions
const getImageDimensions = (file) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve({ width: image.width, height: image.height });
    image.onerror = () => reject(new Error("Failed to load the image"));
    image.src = URL.createObjectURL(file);
  });
};

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
      img: null,
      order: "default",
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
                img: null,
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
      <div className="box mt-[32px]  min-h-[400px] chart-shadow  flex gap-[24px] flex-col justify-start items-end">
        <div className=" px-[16px] mt-[24px] max-[1130px]:flex-col-reverse max-[1130px]:items-end flex justify-center items-center  w-full gap-[16px]">
          <div className=" flex justify-center items-start flex-1 gap-[12px] ">
            <button className=" flex min-w-[91px] justify-center items-center  gap-[8px] view_report text-[14px] font-[600] text-color_01 leading-[20px]   py-[12px] px-[16px] text-center border-[1px] rounded-[8px] border-color_06">
              <>فلتر بـ</>
              <FilterIcon />
            </button>
            <div className="  mb-[20px] border-[1px] gap-[8px] border-color_06 rounded-[8px] flex py-[10px] px-[14px] justify-center items-center">
              <input
                type="text"
                dir="rtl"
                placeholder="أبحث عن "
                className=" !border-none max-sm:w-[130px]  !outline-none text-color_07 text-[16px] font-[400]"
              />
              <div>
                <SearchIcon />
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-end justify-end w-full  max-w-[550px] ">
            <h3 className="text-[18px] font-[600] text-color_04 leading-[27px]">
              المصروفات
            </h3>
            <h4 className="text-[12px] font-[400] text-color_16 leading-[16.8px] mt-[4px]">
              نص تنبؤي يمكن أن يستبدل فى هذا المكان
            </h4>
          </div>
        </div>
        <ExpenseTable />
      </div>
    </>
  );
}

export default ExpenseBox;
