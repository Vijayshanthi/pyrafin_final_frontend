import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import Dialog from "@mui/material/Dialog";
import moment from "moment";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Grid } from "@mui/material";
import axios from "axios";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

export default function Gst2({
  totalExpenseDetails,
  totalIndirectExpenseDetails,
}) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [deleteopen, setdeleteOpen] = React.useState(false);
  const [deleteid, setDeleteId] = useState(0);
  const [rows, setRows] = useState([]);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [rowModesModel, setRowModesModel] = useState({});
  const [validationError, setValidationError] = useState("");
  const [actionTake, setActionTake] = useState(false);
  const today = new Date().toISOString().split("T")[0];
  useEffect(() => {
    getExpenseRecord();
  }, []);
  const getExpenseRecord = async () => {
    await axios
      .get(`http://localhost:8099/expense/getexpensedetails`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenauth")}`,
        },
      })
      .then((res) => {
        if (res && res.status == 401) {
          navigate("/login");
        }
        setRows(res.data);
      })
      .catch((err) => {
        if (err && err.response.status == 401) {
          navigate("/login");
        }
      });
  };
  const columns = [
    {
      field: "ActionDate",
      headerName: (
        <div>
          <b>Invoice Date </b>
        </div>
      ),
      type: "date",
      width: 150,
      align: "left",
      headerAlign: "center",
      editable: true,
      valueGetter: (params) => {
        const actionDate = params.row.ActionDate;
        if (actionDate === null || actionDate === undefined) {
          return new Date();
        }
        return new Date(actionDate);
      },
      headerClassName: "super-app-theme--header",
    },
    {
      field: "InvoiceNumber",
      headerName: (
        <div>
          <b>Invoice Number </b>
        </div>
      ),
      width: 150,
      editable: true,
      align: "left",
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Particulars",
      headerName: (
        <div>
          <b>Company </b>
        </div>
      ),
      width: 200,
      editable: true,
      align: "left",
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "CGST",
      headerName: (
        <div>
          <b> CGST </b>
        </div>
      ),
      type: "number",
      width: 130,
      editable: true,
      align: "left",
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },

    {
      field: "SGST",
      headerName: (
        <div>
          <b> SGST </b>
        </div>
      ),
      type: "number",
      width: 130,
      editable: true,
      align: "left",
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },

    {
      field: "IGST",
      headerName: (
        <div>
          <b> IGST </b>
        </div>
      ),
      type: "number",
      width: 130,
      editable: true,
      align: "left",
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },
    {
      field: "TotalAmount",
      headerName: (
        <div>
          <b>Total </b>
        </div>
      ),
      type: "number",
      width: 130,
      editable: true,
      align: "left",
      headerAlign: "center",
      renderCell: (params) => {
        const value = params.value || 0;
        return (
          <span>
            <b>{value}</b>
          </span>
        );
      },
      headerClassName: "super-app-theme--header",
    },
  ];
  return (
    <>
      <Grid container xs={12}>
        <Grid item md={6}>
          <Typography
            sx={{
              fontSize: "220%",
              color: "primary",
              padding: "20px",
              fontFamily: "Young Serif",
              color: "#2196F3",
            }}
          >
            GST 2 - EXPENSE          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          height: 500,
          width: "100%",
          "& .actions": {
            color: "text.secondary",
          },
          "& .textPrimary": {
            color: "text.primary",
          },
          "& .super-app-theme--header": {
            backgroundColor: "#676767",
            color: "white",
            fontSize: "17px",
            border: "1px solid #fff",
            borderRadius: "5px",
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          editMode="row"
          rowModesModel={rowModesModel}
          slotProps={{
            toolbar: { setRows, setRowModesModel },
          }}
        />
      </Box>
    </>
  );
}