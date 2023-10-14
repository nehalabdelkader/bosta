import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[100]}`,
  borderRadius: theme.spacing(1),

  "& .progressSlider": {
    color: `${theme.palette.primary.main} !important`,
    "& .MuiSlider-markLabel:nth-child(4)": {
      left: "3% !important",
    },
    "& .MuiSlider-markLabel:nth-child(10)": {
      left: "98% !important",
    },
  },
}));
export default StyledBox;
