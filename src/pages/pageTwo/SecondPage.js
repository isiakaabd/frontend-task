import { Grid } from "@mui/material";
import { InputSection } from "../pageTwo/utilities";
import { Buttons } from "components";
import PropTypes from "prop-types";

const SecondPage = ({ handleNext }) => {
  return (
    <Grid item container gap={4}>
      {/* inputs */}
      <InputSection />
      <Buttons handleNext={handleNext} />
    </Grid>
  );
};

export default SecondPage;

SecondPage.propTypes = {
  handleNext: PropTypes.func.isRequired,
};
