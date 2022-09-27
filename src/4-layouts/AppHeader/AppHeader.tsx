//********** Component **********//
import { Box, styled, Typography } from "@mui/material";
import { APP_MAIN_COLOR } from "../../utils/consts";

//********** Slots **********//
const ContainerSlot = styled(Box)({
  backgroundColor: APP_MAIN_COLOR,
  padding: 10,
  borderRadius: 4,
  marginBottom: 16,
});

//********** Component **********//
const AppHeader = () => (
  <ContainerSlot>
    <Typography variant="h6" color="white" textAlign="center">
      TGV Registration App
    </Typography>
  </ContainerSlot>
);
AppHeader.displayName = "AppHeader";
export default AppHeader;
