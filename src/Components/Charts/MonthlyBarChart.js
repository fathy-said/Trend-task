import { useCallback, useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options
const barChartOptions = {
  chart: {
    type: "bar",
    stacked: true,
    height: 365,
    toolbar: {
      show: false,
    },
  },
  colors: ["#7F56D9", "#eaecf0"],
  plotOptions: {
    bar: {
      columnWidth: "45%",
      borderRadius: 6,
      borderRadiusWhenStacked: "all",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  grid: {
    // show: false
    strokeDashArray: 0,
  },
};

// ==============================|| MONTHLY BAR CHART ||============================== //
let comLink = [
  {
    name: `12 months`,
    link: `month`,
  },
  {
    name: `30 days`,
    link: `30days`,
  },
  {
    name: `7 days`,
    link: `week`,
  },
  {
    name: `24 hours`,
    link: `hours`,
  },
];
const MonthlyBarChart = () => {
  const theme = useTheme();
  const [slot, setSlot] = useState("month");
    const line = theme.palette.divider;

  const handleTargetComponent = useCallback(
    (type) => {
      if (slot !== type) {
        setSlot(type);
      }
    },
    [slot, setSlot]
  );
  const { primary, secondary } = theme.palette.text;
  const info = theme.palette.info.light;

  const [series, setSeries] = useState([
    {
      name: "Page Views",
      data: [0, 86, 28, 115, 48, 210, 136],
    },
  ]);

  const [options, setOptions] = useState(barChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,

      xaxis: {
        categories:
          slot == "month"
            ? [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ]
            : slot == "week"
            ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            : slot == "hours"
            ? [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20, 21, 22, 23, 24,
              ]
            : slot == "30days"
            ? [
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun",
              ]
            : [],
        labels: {
          style: {
            colors: [
              "#475467",
              "#475467",
              "#475467",
              "#475467",
              "#475467",
              "#475467",
              "#475467",
              "#475467",
              "#475467",
              "#475467",
              "#475467",
              "#475467",
            ],
          },
        },
        axisBorder: {
          show: true,
          color: line,
        },
        tickAmount: slot === "month" ? 11 : 7,
      },
      yaxis: {

        labels: {
          show: false,

          style: {
            colors: ["red"],
          },
        },
      },

      tooltip: {
        theme: "light",
      },
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [primary, info, secondary, slot]);
  useEffect(() => {
    setSeries([
      {
        name: "Page Views",
        data:
          slot === "month"
            ? [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35]
            : slot === "week"
            ? [31, 40, 28, 51, 42, 109, 100]
            : slot === "hours"
            ? [
                76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35, 76, 85, 101,
                98, 87, 105, 91, 114, 94, 86, 115, 35,
              ]
            : [
                76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35, 76, 85, 101,
                98, 87, 105, 91, 114, 94, 86, 115, 35, 76, 85, 101, 98, 87, 105,
              ],
      },
      {
        name: "Page Views",
        data:
          slot === "month"
            ? [86, 89, 151, 118, 97, 109, 91, 134, 54, 96, 115, 55]
            : slot === "week"
            ? [86, 89, 151, 118, 97, 109, 91]
            : slot === "hours"
            ? [
                86, 89, 151, 118, 97, 109, 91, 134, 54, 96, 115, 55, 86, 89,
                151, 118, 97, 109, 91, 134, 54, 96, 115, 55,
              ]
            : [
                86, 89, 151, 118, 97, 109, 91, 134, 54, 96, 115, 55, 86, 89,
                151, 118, 97, 109, 91, 134, 54, 96, 115, 55, 91, 134, 54, 96,
                115, 55,
              ],
      },
    ]);
  }, [slot]);
  return (
    <>
      <div className="p-[24px] flex justify-center items-center flex-col ">
        <div className=" flex w-full justify-between flex-row-reverse items-center ">
          <h2 className="text-[18px] font-[600] text-color_04 leading-[28px]">
            Store traffic
          </h2>
          <button className=" view_report text-[14px] font-[600] text-color_01 leading-[20px]   py-[10px] px-[16px] text-center border-[1px] rounded-[8px] border-color_06">
            View report
          </button>
        </div>
        <div className="flex justify-end w-full items-center gap-[20px] mt-[26px]">
          {comLink?.map((el, index) => {
            return (
              <div
                className={
                  (slot == el?.link && "!text-color_12 ") +
                  ` group hover:!text-color_12 transition-[0.3s] relative text-center cursor-pointer  w-fit px-[4px] pb-[11px] text-color_07 font-[600] leading-[19px] text-[14px]`
                }
                onClick={() => {
                  handleTargetComponent(el?.link);
                }}
              >
                <>{el?.name}</>
                <div
                  className={
                    (slot == el?.link && "!w-full ") +
                    "group-hover:!w-full  w-0  transition-[0.3s] bg-color_12   absolute bottom-0 left-[50%] translate-x-[-50%]  h-[2px]"
                  }
                ></div>
              </div>
            );
          })}
        </div>
        <div className=" w-full flex justify-stretch items-stretch">
          <ReactApexChart
            className="apexchartszwbxh20k !w-full"
            options={options}
            series={series}
            type="bar"
            height={365}
          />
        </div>
      </div>
      <div id="chart" className=" w-full"></div>
    </>
  );
};

export default MonthlyBarChart;
