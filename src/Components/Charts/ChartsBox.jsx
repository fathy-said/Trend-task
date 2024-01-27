import { Grid } from "@mui/material";
import React from 'react';

import {
  IncomeAreaChart,
  MainCard,
  MonthlyBarChart
} from "../index";

const ChartsBox = ({ targetComponent }) => {

  return (
    <>
      <Grid >
        <Grid item xs={12} md={7} lg={8}>
          <MainCard content={false} sx={{ mt: 1.5 }} className={"chart-shadow"}>
            <IncomeAreaChart />
          </MainCard>
        </Grid>
        <Grid item xs={12} md={5} lg={4} className=" !mt-[32px]">
          <MainCard content={false} sx={{ mt: 1.5 }} className={"chart-shadow"}>
            <MonthlyBarChart />
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
};

export default ChartsBox;
