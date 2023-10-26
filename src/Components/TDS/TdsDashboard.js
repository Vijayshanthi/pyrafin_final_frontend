import React from "react";
import { Grid } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { useState, useMemo } from "react";
// import ApiCalls from "../API/ApiCalls";
import TdsRecord from "../TDS/TdsRecord";
// import ExpenseImg from "../../src/assets/Images/expense.png";
import { useNavigate } from "react-router-dom";
export default function TdsDashboard() {
  return (
    <Grid container xs={12}>
      <Grid item md={0.5}></Grid>
      <Grid item md={12}>
        <TdsRecord />
      </Grid>
    </Grid>
  );
}
