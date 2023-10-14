import React from "react";
import { TableHead, TableCell, TableRow, TableBody } from "@mui/material";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";

import StyledTable from "./ShipmentDetailsTable.styles";

const ShipmentDetailsTable = (props) => {
  const { transitEvents } = props;
  const { t } = useTranslation("translation");
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <StyledTable>
      <TableHead className="tableHead">
        <TableRow>
          <TableCell>{t("translation:hub")}</TableCell>
          <TableCell>{t("translation:date")}</TableCell>
          <TableCell>{t("translation:time")}</TableCell>
          <TableCell>{t("translation:details")}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {transitEvents.map((event) => (
          <TableRow key={event.timestamp}>
            <TableCell>{event.hub}</TableCell>
            <TableCell>{dayjs(event.timestamp).format('DD/MM/YYYY')}</TableCell>
            <TableCell>{dayjs(event.timestamp).format('hh:mm a')}</TableCell>
            <TableCell>{t(`translation:${event.state.toLowerCase()}`)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export { ShipmentDetailsTable };
