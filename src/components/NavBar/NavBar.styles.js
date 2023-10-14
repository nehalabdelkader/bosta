import { AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  "& .MuiToolbar-root": {
    justifyContent: "space-between",
  },
  "& .logoContainer": {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(0.5),
  },

  "& .linksContainer": {
    display: "flex",
    gap: theme.spacing(3),
  },
  
  '& .link': {
    textDecoration: 'none',
    fontWeight: 500,
  }
}));
export default StyledAppBar;
