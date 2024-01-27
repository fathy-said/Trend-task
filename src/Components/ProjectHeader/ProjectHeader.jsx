import React from 'react';
import UserImg from "../../asset/Img/user-01.png";
let comLink = [
  {
    name: `عن المشروع`,
    link: `عن المشروع`,
  },
  {
    name: `الحالة المالية`,
    link: `الحالة المالية`,
  },
  {
    name: `الفواتير`,
    link: `الفواتير`,
  },
  {
    name: `المصروفات`,
    link: `المصروفات`,
  },
  {
    name: `أعمال خارج العقد`,
    link: `أعمال خارج العقد`,
  },
  {
    name: `البنود`,
    link: `البنود`,
  },
  {
    name: `محضر إجتماع`,
    link: `محضر إجتماع`,
  },
  {
    name: `المستندات`,
    link: `المستندات`,
  },
];
const ProjectHeader = ({ targetComponent, setTargetComponent }) => {
   const handleTargetComponent = React.useCallback(
     (type) => {
       if (targetComponent !== type) {
         setTargetComponent({ type: type });
       }
     },
     [targetComponent, setTargetComponent]
   );
  return (
    <div className="home-menu w-full bg-color_05 relative">
      <div className="container overflow-auto">
        <div className="    min-w-[932px]    min-h-[176px]   flex justify-start  items-center flex-col gap-[48px]">
          <div className=" w-full mt-[32px] flex  justify-center  items-end gap-[24px]">
            <div className="w-full flex-1 flex flex-col  justify-center items-end gap-[8px]">
              <h2 className="text-[20px] font-[600] text-color_04 leading-[28px]">
                {" "}
                إسم مشروع جديد
              </h2>
              <ul className="  flex  flex-row-reverse justify-start items-center lg:gap-[20px] 2xl:gap-[40px] min-[1554px]:gap-[80px]">
                <li className="text-[16px] font-[400] text-color_04 leading-[26px]">
                  جهة المشروع
                </li>
                <li className="text-[16px] font-[400] text-color_04 leading-[26px]">
                  بداية العقد : 30/12/2023
                </li>
                <li className="text-[16px] font-[400] text-color_04 leading-[26px]">
                  نهاية العقد : 01/03/2024
                </li>
                <li className="text-[16px] font-[400] text-color_04 leading-[26px]"></li>
                <li className="t">أخر تحديث : 01/03/2024</li>
                <li className=" py-[2px] px-[10px]  text-color_10 bg-color_11 border-[1px] border-[#ABEFC6] rounded-[16px]">
                  جاري
                </li>
              </ul>
            </div>
            <div className="box-img w-[64px] h-[64px] flex justify-center items-center  overflow-hidden rounded-full bg-color_08">
              <img
                src={UserImg}
                alt="user-img-default"
                className=" object-contain "
              />
            </div>
          </div>
          <div className="flex justify-end w-full items-center gap">
            {comLink?.map((el, index) => {
              return (
                <div
                  className={
                    (targetComponent?.type == el?.link && "!text-color_12 ") +
                    ` group hover:!text-color_12 transition-[0.3s] relative text-center cursor-pointer w-[115.25px] px-[4px] pb-[11px] text-color_07 font-[600] leading-[19px] text-[14px]`
                  }
                  onClick={() => {
                    handleTargetComponent(el?.link);
                  }}
                >
                  <>{el?.name}</>
                  <div
                    className={
                      (targetComponent?.type == el?.link && "!w-full ") +
                      "group-hover:!w-full  w-0  transition-[0.3s] bg-color_12   absolute bottom-0 left-[50%] translate-x-[-50%]  h-[2px]"
                    }
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProjectHeader);
