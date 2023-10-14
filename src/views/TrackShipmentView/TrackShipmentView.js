import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import axios from "axios";

import StyledContainer from "./TrackShipmentView.styles";
import {
  AddressDetails,
  ShipmentDetailsTable,
  ShipmentInfo,
} from "./components";
import APIS from "../../lib/apis";

const TrackShipmentView = () => {
  const { t } = useTranslation("translation");
  const params = useParams();

  const [shipmentData, setShipmentData] = useState();

  const getShipmentData = () => {
    axios
      .get(
        APIS.SHIPMENT.TRACK.replace(":trackingNumber", params.trackingNumber)
      )
      .then((res) => {
        setShipmentData(res.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getShipmentData();
  }, []);

  return (
    <StyledContainer maxWidth="xl">
      {shipmentData && (
        <>
          <ShipmentInfo
            shipmentData={shipmentData}
          />

          <Grid container mt={3} mb={8} spacing={3}>
            <Grid item lg={7} md={12}>
              <Typography>{t("translation:shipment_details")}</Typography>
              <ShipmentDetailsTable transitEvents={shipmentData.TransitEvents}/>
            </Grid>
            <Grid item lg={5} md={12}>
              <Typography>{t("translation:delivery_address")}</Typography>
              <AddressDetails />
            </Grid>
          </Grid>
        </>
      )}
    </StyledContainer>
  );
};

export default TrackShipmentView;
