// import React from 'react';

// const ExpenseTable = () => {
//   return <div>ExpenseTable</div>;
// }

// export default ExpenseTable;
import { Table } from 'antd';
import React from 'react';
import { DownloadIcon } from '../../asset/Icons';
const columns = [
  {
    title: (
      <div className=" px-[24px] py-[12px]  text-color_16 text-[12px] font-[500]">
        التاريخ
      </div>
    ),
    dataIndex: "date",
    render: (_, record) => {
      return (
        <div className=" p-[24px]  text-color_16 text-[14px] font-[400]">
          {record?.date}
        </div>
      );
    },
  },
  {
    title: (
      <div className=" px-[24px] py-[12px]  text-color_16 text-[12px] font-[500]">
        رقم القيد
      </div>
    ),
    dataIndex: "number_order",
    render: (_, record) => {
      return (
        <div className=" p-[24px]  text-color_16 text-[14px] font-[400]">
          {record?.number_order}
        </div>
      );
    },
  },
  {
    title: (
      <div className=" px-[24px] py-[12px]  text-color_16 text-[12px] font-[500]">
        رقم الحساب
      </div>
    ),
    dataIndex: "number",
    render: (_, record) => {
      return (
        <div className=" p-[24px]  text-color_16 text-[14px] font-[400]">
          {record?.number}
        </div>
      );
    },
  },
  {
    title: (
      <div className=" px-[24px] py-[12px]  text-color_16 text-[12px] font-[500]">
        إسم الحساب
      </div>
    ),
    dataIndex: "accountName",
    render: (_, record) => {
      return (
        <div className=" p-[24px]  text-color_16 text-[14px] font-[400]">
          {record?.accountName}
        </div>
      );
    },
  },
  {
    title: "المصروفات",
    title: (
      <div className=" px-[24px] py-[12px]  text-color_16 text-[12px] font-[500]">
        المصروفات
      </div>
    ),
    dataIndex: "expense",
    render: (_, record) => {
      return (
        <div className=" p-[24px]  text-color_04 text-[14px] font-[400]">
          {record?.expense}
        </div>
      );
    },
  },
  {
    title: "الإيرادات",
    title: (
      <div className=" px-[24px] py-[12px]  text-color_16 text-[12px] font-[500]">
        الإيرادات
      </div>
    ),
    dataIndex: "price",
    render: (_, record) => {
      return (
        <div className=" p-[24px]  text-color_04 text-[14px] font-[400]">
          {record?.price}
        </div>
      );
    },
  },
  {
    title: "ملاحظات",
    title: (
      <div className=" px-[24px] py-[12px]  text-color_16 text-[12px] font-[500]">
        ملاحظات
      </div>
    ),
    dataIndex: "note",
    render: (_, record) => {
      return (
        <div className=" p-[24px]  text-color_16 text-[14px] font-[400]">
          {record?.note}
        </div>
      );
    },
  },
  {
    title: "",

    dataIndex: "download",
    fixed: "right",
    render: (_, record) => (
      <div className=" p-[24px]">
        <a
          className=" flex justify-center items-center"
          download=""
          href="./ExpenseTable.jsx"
        >
          <DownloadIcon />
        </a>
      </div>
    ),
  },
];
const data = [
  {
    date: `09-02-2024`,
    number_order: `10,864.00`,
    number: `09100010004`,
    accountName: `مصاريف الانتاج المرئي `,
    expense: `10,000`,
    price: `0.00`,
    note: `انتاج قصص شهر رمضان`,
    download: `الفاتورة الأولى`,
  },
  {
    date: `09-02-2024`,
    number_order: `10,864.00`,
    number: `09100010004`,
    accountName: `مصاريف الانتاج المرئي `,
    expense: `10,000`,
    price: `0.00`,
    note: `انتاج قصص شهر رمضان`,
    download: `الفاتورة الأولى`,
  },

];
const ExpenseTable = () => (
  <div
    className="  w-full  "
    // className="  w-full overflow-x-auto "
  >
    <Table
      columns={columns}
      dataSource={data}
      direction="rtl"
      className=" "
      style={{ width: "100%", direction: "rtl", borderRadius: 0 }}
      bordered
      pagination={false}
      scroll={{
        x: true,
      }}
    />
    <div className=" w-full flex justify-between items-center py-[12px] px-[24px]">
      <button className=" view_report text-[14px] font-[600] text-color_01 leading-[19.6px]   py-[10px] px-[14px] text-center border-[1px] rounded-[8px] border-color_06">
        التالي
      </button>
      <button className=" view_report text-[14px] font-[600] text-color_01 leading-[19.6px]   py-[10px] px-[14px] text-center border-[1px] rounded-[8px] border-color_06">
        السابق
      </button>
    </div>
  </div>
);
export default ExpenseTable;