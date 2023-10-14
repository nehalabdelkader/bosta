import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import HelpIcon from "@mui/icons-material/Help";

import StyledBox from "./AddressDetails.styles";

const AddressDetails = () => {
  const { t } = useTranslation("translation");

  return (
    <StyledBox>
      <Box className="addressContainer itemContainer">
        {/** Added static address since there is no address returned from the API */}
        <Typography>
        Apt. 777 88318 Gene Orchard, Waylonland, MI 96468
        </Typography>
      </Box>
      <Box className="itemContainer problemContainer" mt={2}>
        <HelpIcon color="primary" className="problemIcon"/>
        <Box>
          <Typography>{t("translation:is_there_problem")}</Typography>
          <Button variant="contained" className="reportBtn">{t("translation:report_problem")}</Button>
        </Box>
      </Box>
    </StyledBox>
  );
};

export { AddressDetails };
