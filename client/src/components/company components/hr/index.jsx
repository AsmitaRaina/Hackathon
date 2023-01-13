import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { useTheme } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react"
import Details from "../details";

const HR = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    // const [data, setData] = useState(mockDataContacts);
    const [detail, setDetail] = useState(null)
    const handleClick = (e, a) => {
        setDetail(e.row)
        console.log(e.row)
    }
    const goBack = () => {
        setDetail(null)
    }

    const rows = [ {
        id: 1,
        name: "Jon Snow",
        email: "jonsnow@gmail.com",
        age: 35,
        phone: "(665)121-5454",
        access: "admin",
      },
      {
        id: 1,
        name: "Jon Snow",
        email: "jonsnow@gmail.com",
        age: 35,
        phone: "(665)121-5454",
        access: "admin",
      },
      {
        id: 1,
        name: "Jon Snow",
        email: "jonsnow@gmail.com",
        age: 35,
        phone: "(665)121-5454",
        access: "admin",
      },]
      


    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registrarId", headerName: "Registrar ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "address",
            headerName: "Address",
            flex: 1,
        },
        {
            field: "city",
            headerName: "City",
            flex: 1,
        },
        {
            field: "zipCode",
            headerName: "Zip Code",
            flex: 1,
        },
        {
            field: "status",
            headerName: "Status",
            flex: 1,
            renderCell: (cellValues) => {
                return (
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            margin: "2px",
                            padding: "10px 20px",
                        }}
                        onClick={(event) => {
                            handleClick(event, cellValues);
                        }}
                    >
                        status
                    </Button>
                );
            }
        },
    ];

    return <>
            {detail? <Details detail={detail} goBack={goBack}/> :
                <Box m="20px">
                    {/* <Header
                        title="Our placement history"
                        subtitle="List of Contacts for Future Reference"
                    /> */}
                    <Box
                        m="40px 0 0 0"
                        height="75vh"
                        sx={{
                            "& .MuiDataGrid-root": {
                                border: "none",
                            },
                            "& .MuiDataGrid-cell": {
                                borderBottom: "none",
                            },
                            "& .name-column--cell": {
                                color: colors.greenAccent[300],
                            },
                            "& .MuiDataGrid-columnHeaders": {
                                backgroundColor: colors.blueAccent[700],
                                borderBottom: "none",
                            },
                            "& .MuiDataGrid-virtualScroller": {
                                backgroundColor: colors.primary[400],
                            },
                            "& .MuiDataGrid-footerContainer": {
                                borderTop: "none",
                                backgroundColor: colors.blueAccent[700],
                            },
                            "& .MuiCheckbox-root": {
                                color: `${colors.greenAccent[200]} !important`,
                            },
                            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                                color: `${colors.grey[100]} !important`,
                            },
                        }}
                    >
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            components={{ Toolbar: GridToolbar }}
                            onRowClick={handleClick}
                        />
                    </Box>
                </Box>}
        </>
}

export default HR;
