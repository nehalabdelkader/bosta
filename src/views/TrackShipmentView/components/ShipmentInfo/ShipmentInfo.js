import React from "react";
import { Box, Grid, Typography, Divider, Slider } from "@mui/material";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";

import StyledBox from "./ShipmentInfo.styles";
import { SHIPMENT_STATUS } from "../../utils/constants";

const ShipmentInfo = (props) => {
  const { shipmentData } = props;
  const { t } = useTranslation("translation");

  const getShipmentProgress = () => {
    // target progress list
    // represents the 4 main points on the progress bar
    const progressList = [
      SHIPMENT_STATUS.TICKET_CREATED,
      SHIPMENT_STATUS.PACKAGE_RECEIVED,
      SHIPMENT_STATUS.OUT_FOR_DELIVERY,
      SHIPMENT_STATUS.DELIVERED,
    ];
    const progressListValues = [0, 33, 66, 100];

    // current progress
    const currentProgress = [];
    for (
      let i = 0, j = 0;
      i < shipmentData.TransitEvents.length && j < progressList.length;
      i++
    ) {
      if (shipmentData.TransitEvents[i].state === progressList[j]) {
        currentProgress.push(progressListValues[j]);
        j += 1;
      }
    }

    return currentProgress;
  };

  return (
    <StyledBox currentState={shipmentData.CurrentStatus.state}>
      <Grid container p={2} spacing={1}>
        <Grid item lg={12} md={5}>
          <Grid container className="infoHeader">
            <Grid item lg={3} sm={12}>
              <Typography>
                {t("translation:shipment_no", {
                  trackingNumber: shipmentData.TrackingNumber,
                })}
              </Typography>
            </Grid>
            <Grid item lg={3} sm={12}>
              <Typography>{t("translation:last_update")}</Typography>
            </Grid>
            <Grid item lg={3} sm={12}>
              <Typography>{t("translation:provider_name")}</Typography>
            </Grid>
            <Grid item lg={3} sm={12}>
              <Typography>{t("translation:delivered_on")}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12} md={7}>
          <Grid container>
            <Grid item lg={3} sm={12}>
              <Typography>
                {t(
                  `translation:${shipmentData.CurrentStatus.state.toLowerCase()}`
                )}
              </Typography>
            </Grid>
            <Grid item lg={3} sm={12}>
              <Typography>
                {dayjs(shipmentData.CurrentStatus.timestamp).format(
                  "dddd MM/DD/YYYY"
                )}{" "}
                at{" "}
                {dayjs(shipmentData.CurrentStatus.timestamp).format("h:mm a")}
              </Typography>
            </Grid>
            <Grid item lg={3} sm={12}>
              <Typography>{shipmentData.provider}</Typography>
            </Grid>
            <Grid item lg={3} sm={12}>
              <Typography>
                {shipmentData.PromisedDate &&
                  dayjs(shipmentData.PromisedDate).format("D MMMM YYYY")}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider />

      <Box p={2}>
        <Slider
          className="progressSlider"
          track={false}
          disabled
          defaultValue={getShipmentProgress()}
          marks={[
            {
              value: 0,
              label: t("translation:ticket_created"),
            },
            {
              value: 33,
              label: t("translation:package_received"),
            },
            {
              value: 66,
              label: t("translation:out_for_delivery"),
            },
            {
              value: 100,
              label: t("translation:delivered"),
            },
          ]}
        />
      </Box>
    </StyledBox>
  );
};

export { ShipmentInfo };
