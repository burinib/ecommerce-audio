import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModalDashboard from "../../common/modalDashboard/ModalDashboard";
import CreateProductModal from "../../common/createProductModal/CreateProductModal";
import "./Dashboar.css";
const Dashboard = ({
  products,
  viewById,
  data,
  editById,
  deleteById,
  open,
  handleClose,
  disabled,
  setChangesProducts,
  openCreate,
  handleCloseCreate,
  setOpenCreate,
}) => {
  return (
    <Box sx={{ backgroundColor: "rgb(25, 25, 25)" }}>
      <h1 className="dashboardList" style={{ paddingTop: "20px" }}>
        Adminitistrador
      </h1>
      <button className="botonDashboard" onClick={() => setOpenCreate(true)}>
        Agregar
      </button>

      <TableContainer
        component={Paper}
        sx={{ backgroundColor: "rgb(25, 25, 25)" }}
      >
        <Table
          className="dashboardList"
          sx={{ minWidth: 650 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell className="dashboardList">id</TableCell>
              <TableCell align="right" className="dashboardList">
                name
              </TableCell>
              <TableCell align="right" className="dashboardList">
                price
              </TableCell>
              <TableCell align="right" className="dashboardList">
                stock
              </TableCell>
              <TableCell align="right" className="dashboardList">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" className="dashboardList">
                  {product.id}
                </TableCell>
                <TableCell align="right" className="dashboardList">
                  {product.name}
                </TableCell>
                <TableCell align="right" className="dashboardList">
                  {product.price}
                </TableCell>
                <TableCell align="right" className="dashboardList">
                  {product.stock}
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => viewById(product)}
                    className="dashboardList"
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => editById(product)}
                    className="dashboardList"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => deleteById(product)}
                    className="dashboardList"
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {open && (
        <ModalDashboard
          open={open}
          data={data}
          handleClose={handleClose}
          disabled={disabled}
          setChangesProducts={setChangesProducts}
        />
      )}
      {openCreate && (
        <CreateProductModal open={openCreate} handleClose={handleCloseCreate} />
      )}
    </Box>
  );
};

export default Dashboard;
