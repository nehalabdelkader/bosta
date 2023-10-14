import { Table } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTable = styled(Table)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  border: `1px solid ${theme.palette.grey.A200}`,
  borderRadius: theme.spacing(1),
  '& .tableHead': {
    backgroundColor: theme.palette.grey[50]
  },
 
}));
export default StyledTable;
