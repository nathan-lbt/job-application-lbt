//********** Imports **********//
import { Box, styled, Typography } from "@mui/material";
import { APP_MAIN_COLOR } from "../../utils/consts";

//********** Slots **********//
const ContainerSlot = styled(Box)({
  backgroundColor: APP_MAIN_COLOR,
  padding: 10,
  borderRadius: 4,
  marginTop: 16,
});

//********** Component **********//
const AppFooter = () => (
  <ContainerSlot paddingTop={2}>
    <Typography variant="h6" align="center" color="white" gutterBottom>
      Nathan LEBERT
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="whitesmoke"
      component="p"
    >
      App for job application.
    </Typography>
  </ContainerSlot>
);
AppFooter.displayName = "AppFooter";
export default AppFooter;
