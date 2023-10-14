import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  "& .itemContainer": {
    border: `1px solid ${theme.palette.grey.A200}`,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),
  },
  "& .addressContainer": {
    backgroundColor: theme.palette.grey[50],
  },

  "& .problemContainer": {
    display: "flex",
    alignItems: 'center',
    gap: theme.spacing(1),

    "& .problemIcon": {
      fontSize: theme.spacing(12.5),
    },

    "& .reportBtn": {
      marginTop: theme.spacing(1),
      borderRadius: theme.spacing(1),
    },
  },
}));
export default StyledBox;
