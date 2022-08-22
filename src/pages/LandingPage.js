import { useState, useCallback } from "react";
import {
  Grid,
  Typography,
  // Stepper, Step, StepLabel
} from "@mui/material";
import Form from "./Form";
import { useTheme } from "@mui/material/styles";
const LandingPage = () => {
  const theme = useTheme();
  const header = [
    {
      id: 0,
      title: "Personal Info",
    },
    {
      id: 1,
      title: "Billing Info",
    },
    {
      id: 2,
      title: "Confirm Payment",
    },
  ];
  const [step, setStep] = useState(1);
  const increment = useCallback(() => setStep(step + 1), [step]);
  const handlePrevious = useCallback(() => setStep(step - 1), [step]);
  return (
    <Grid padding={4} item container gap={4}>
      {step < 4 && (
        <>
          <Typography variant="h3" sx={{ lineHeight: "5rem" }}>
            Complete Your Purchase
          </Typography>
          <Grid
            item
            container
            justifyContent="space-between"
            sx={{ borderBottom: "1px solid #000" }}
          >
            {header.map((item, index) => (
              <Typography
                variant="body1"
                key={item.id}
                sx={{
                  padding: "1.2rem",
                  paddingLeft: 0,
                  color:
                    index + 1 === step
                      ? theme.palette.secondary.main
                      : theme.palette.common.grey,
                  borderBottom: index + 1 === step ? "8px solid #F2994A" : null,
                  marginBottom: -0.5,
                }}
              >
                {item.title}
              </Typography>
            ))}
          </Grid>
        </>
      )}
      <Grid item container sx={{ mt: 4 }}>
        <Form
          step={step}
          handleNext={increment}
          handlePrevious={handlePrevious}
        />
      </Grid>
    </Grid>
    // </Grid>
  );
};

export default LandingPage;
