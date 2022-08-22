import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import CustomButton from "components/Button";
import PropTypes from "prop-types";
const Buttons = ({ handleNext }) => {
  const theme = useTheme();

  const buttonType = {
    background: theme.palette.secondary.main,
    hover: theme.palette.info.main,
    active: theme.palette.secondary.main,
    textColor: theme.palette.common.lightWhite,
  };
  const buttonPayment = {
    background: theme.palette.common.white,
    hover: theme.palette.info.main,
    active: theme.palette.common.white,
    textColor: theme.palette.common.purple,
  };
  return (
    <Grid item container gap={6} marginTop={4}>
      <CustomButton type={buttonType} label="Next" onClick={handleNext} />
      <CustomButton disabled type={buttonPayment} label="Cancel Payment" />
    </Grid>
  );
};

export default Buttons;
Buttons.propTypes = {
  handleNext: PropTypes.func,
};
