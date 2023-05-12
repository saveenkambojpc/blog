import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, updateData } from "../../api";
import { formatCustomDateTime, toggleAlert } from "../../misc/helper";
import CustomDialog from "../helper/CustomDialog";
import { Button } from "@mui/material";
import { setDialogObj } from "../../redux/features/helper";
import { Close, Delete, Edit, Update } from "@mui/icons-material";
import { useState } from "react";
import CustomTextField from "../helper/CustomTextField";

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 87, 6.5),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "title",
    numeric: false,
    disablePadding: false,
    label: "Title",
  },
  {
    id: "description",
    numeric: false,
    disablePadding: false,
    label: "Description",
  },
  {
    id: "creator_name",
    numeric: false,
    disablePadding: false,
    label: "Created By",
  },
  {
    id: "created_at",
    numeric: false,
    disablePadding: false,
    label: "Created Timestamp",
  },
  {
    id: "action",
    numeric: false,
    disablePadding: false,
    label: "Action",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function BlogMaster() {
  const [order, setOrder] = React.useState("desc");
  const [orderBy, setOrderBy] = React.useState("created_at");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);
  const blogState = useSelector((store) => store.blogs);
  const dispatch = useDispatch();
  const helperState = useSelector((store) => store.helper);

  const [dialogData, setDialogData] = useState({});

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(
        Object.values(blogState.blogs_obj),
        getComparator(order, orderBy)
      ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, blogState.blogs_obj]
  );

  function handleBlogDeleteRow(row) {
    console.log(row);
    deleteData("blogs", row.id, () => {
      toggleAlert("success", "Successfully Deleted");
      handleManageBlogModalClose();
    });
  }

  function handleRowClick(row) {
    setDialogData(row);
    dispatch(
      setDialogObj({
        ...helperState.dialogObj,
        manageBlog: true,
      })
    );
  }
  function handleManageBlogModalClose() {
    setDialogData({});
    dispatch(
      setDialogObj({
        ...helperState.dialogObj,
        manageBlog: false,
      })
    );
  }
  function handleBlogUpdate(data) {
    updateData("blogs", data.id, dialogData, () => {
      toggleAlert("success", "Successfully Updated");
    });
  }
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            // sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    // selected={isItemSelected}
                  >
                    <TableCell
                      sx={{ cursor: "pointer" }}
                      id={labelId}
                      scope="row"
                      onClick={() => handleRowClick(row)}
                    >
                      {row.heading}
                    </TableCell>
                    <TableCell
                      onClick={() => handleRowClick(row)}
                      sx={{ cursor: "pointer" }}
                    >
                      {row.description}
                    </TableCell>
                    <TableCell
                      onClick={() => handleRowClick(row)}
                      sx={{ cursor: "pointer" }}
                    >
                      {row.creator_name}
                    </TableCell>
                    <TableCell
                      onClick={() => handleRowClick(row)}
                      sx={{ cursor: "pointer" }}
                    >
                      {formatCustomDateTime(row.created_at)}
                    </TableCell>
                    <TableCell className="space-x-3">
                      <IconButton
                        disabled={
                          row.creator_id !==
                          JSON.parse(sessionStorage.getItem("auth")).uid
                        }
                        onClick={() => handleRowClick(row)}
                        style={{ padding: 0 }}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        disabled={
                          row.creator_id !==
                          JSON.parse(sessionStorage.getItem("auth")).uid
                        }
                        onClick={() => handleBlogDeleteRow(row)}
                        style={{ padding: 0 }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {helperState.dialogObj.manageBlog && (
        <CustomDialog
          title={"Blog Description"}
          open={helperState.dialogObj.manageBlog}
          maxWidth="md"
          dialogContent={
            <div className="flex md:flex-row flex-col gap-3 py-1">
              <div className=" md:w-1/2  space-y-3 flex flex-col">
                <CustomTextField
                  label="heading"
                  name="heading"
                  value={dialogData.heading}
                  disabled={
                    dialogData.creator_id !==
                    JSON.parse(sessionStorage.getItem("auth")).uid
                  }
                  onChange={(e) => {
                    setDialogData((prev) => ({
                      ...prev,
                      heading: e.target.value,
                    }));
                  }}
                />
                <CustomTextField
                  disabled={
                    dialogData.creator_id !==
                    JSON.parse(sessionStorage.getItem("auth")).uid
                  }
                  label={"Description"}
                  name="description"
                  value={dialogData.description}
                  onChange={(e) => {
                    setDialogData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }));
                  }}
                />
                <CustomTextField
                  disabled={
                    dialogData.creator_id !==
                    JSON.parse(sessionStorage.getItem("auth")).uid
                  }
                  label="Body"
                  multiline
                  name="body"
                  value={dialogData.body}
                  onChange={(e) => {
                    setDialogData((prev) => ({
                      ...prev,
                      body: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={dialogData.image_link}
                  height={300}
                  width={300}
                  alt=""
                />
              </div>
            </div>
          }
          dialogAction={
            <div className="flex  w-full justify-between">
              <div className="space-x-3">
                <Button
                  disabled={
                    dialogData.creator_id !==
                    JSON.parse(sessionStorage.getItem("auth")).uid
                  }
                  onClick={() => handleBlogUpdate(dialogData)}
                  variant="contained"
                  endIcon={<Update />}
                >
                  Update
                </Button>
                <Button
                  disabled={
                    dialogData.creator_id !==
                    JSON.parse(sessionStorage.getItem("auth")).uid
                  }
                  onClick={() => handleBlogDeleteRow(dialogData)}
                  variant="contained"
                  color="error"
                  endIcon={<Delete />}
                >
                  Delete
                </Button>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleManageBlogModalClose}
                  endIcon={<Close />}
                >
                  Close
                </Button>
              </div>
            </div>
          }
          handleClose={handleManageBlogModalClose}
        />
      )}
    </Box>
  );
}
