import React from "react";
import PropTypes from "prop-types";
import { SecondPage } from "./pageTwo";
import { Grid } from "@mui/material";
import { Home } from "./pageOne";
import { ThirdPage } from "./pageThree";
import FinalPage from "./lastPage";
const Form = ({ handleNext, step, ...rest }) => {
  switch (step) {
    case 1:
      return <Home handleNext={handleNext} {...rest} />;
    case 2:
      return <SecondPage handleNext={handleNext} {...rest} />;
    case 3:
      return <ThirdPage handleNext={handleNext} {...rest} />;
    case 4:
      return (
        <Grid
          item
          container
          sx={{
            minHeight: "calc(100vh - 200px)",
            justifyContent: "center",
            alignItems: "center",

            overflow: "hidden",
          }}
        >
          <FinalPage handleNext={handleNext} {...rest} />
        </Grid>
      );
    default:
      <Home handleNext={handleNext} {...rest} />;
      break;
  }
};
Form.propTypes = {
  handleNext: PropTypes.func,
  step: PropTypes.number,
};

export default Form;
