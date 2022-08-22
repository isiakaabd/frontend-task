import { CardComponent, Buttons } from "components";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
const ThirdPage = ({ handleNext }) => {
  return (
    <Grid container gap={4}>
      <CardComponent />
      <Buttons handleNext={handleNext} />
    </Grid>
  );
};

export default ThirdPage;
ThirdPage.propTypes = {
  handleNext: PropTypes.func.isRequired,
};
