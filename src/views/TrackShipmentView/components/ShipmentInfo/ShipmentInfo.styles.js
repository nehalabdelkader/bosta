import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SHIPMENT_STATUS } from "../../utils/constants";

const StyledBox = styled(Box)(({ theme, currentState }) => ({
  border: `1px solid ${theme.palette.grey[100]}`,
  borderRadius: theme.spacing(1),

  "& .infoHeader": {
    '& .MuiTypography-root': {
    //  fontWeight: 500,
      color: theme.palette.grey[200],
    },
  },

  "& .progressSlider": {
    color: `${ currentState === SHIPMENT_STATUS.DELIVERED ? theme.palette.success.main : theme.palette.primary.main} !important`,
    "& .MuiSlider-markLabel:nth-child(4)": {
      left: "3% !important",
    },
    "& .MuiSlider-markLabel:nth-child(10)": {
      left: "98% !important",
    },
  },
}));
export default StyledBox;
