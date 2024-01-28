import { HelpOutline } from '@mui/icons-material';
import React from 'react';

const NotFound = () => {
  return (
    <>
      <div className="flex container h-full min-h-[500px] justify-center items-center flex-col gap-[20px] ">
        <>
          <HelpOutline className="!text-[80px] font-[600] text-color_01 leading-[28px]" />
        </>
        <h1 className="text-[20px] font-[600] text-color_01 leading-[28px]">
          ! لم يتم العثور على البيانات
        </h1>
      </div>
    </>
  );
}

export default NotFound;
