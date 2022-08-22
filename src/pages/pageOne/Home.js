import { Grid } from "@mui/material";
import { Buttons } from "components";
import { InputSection } from "../pageOne/utilities";
import PropTypes from "prop-types";
const Home = ({ handleNext }) => {
  return (
    <Grid item container gap={2}>
      {/* inputs */}
      <InputSection />
      <Buttons handleNext={handleNext} />
    </Grid>
  );
};

export default Home;
Home.propTypes = {
  handleNext: PropTypes.func.isRequired,
};
