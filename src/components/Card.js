import React from "react";
import { Grid, Box, Card, Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const CardComponent = () => {
  const theme = useTheme();
  return (
    <Grid item container>
      <Card sx={{ width: "100%" }}>
        <Box>
          <Grid
            item
            container
            sx={{
              background: theme.palette.common.blue,
              padding: "2rem 4rem",
              mb: 6,
            }}
            //   justifyContent="space-around"
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 700 }}
              color="#fff"
              flex={1}
            >
              Item Name
            </Typography>
            <Typography
              variant="h5"
              color="#fff"
              sx={{ fontWeight: 700 }}
              textAlign="center"
              flex={1}
            >
              Price
            </Typography>
          </Grid>

          <Grid item container sx={{ paddingX: "4rem", mb: 4 }}>
            <Typography
              variant="h5"
              flex={1}
              sx={{ fontWeight: 400, color: theme.palette.common.purple }}
            >
              Data Science and usability
            </Typography>
            <Typography
              variant="h5"
              textAlign="center"
              flex={1}
              sx={{ fontWeight: 700, color: theme.palette.common.purple }}
            >
              50,000.00
            </Typography>
          </Grid>

          <Grid item container sx={{ paddingX: "4rem", mb: 4 }}>
            <Typography
              variant="h5"
              flex={1}
              sx={{ fontWeight: 400, color: theme.palette.common.purple }}
            >
              Shipping
            </Typography>
            <Typography
              variant="h5"
              flex={1}
              textAlign="center"
              sx={{ fontWeight: 700, color: theme.palette.common.purple }}
            >
              0.00
            </Typography>
          </Grid>
        </Box>
        <Divider
          variant="middle"
          sx={{ mb: 2, color: theme.palette.common.lightBlue }}
        />
        <Grid item container sx={{ paddingX: "4rem", mb: 4 }}>
          <Grid
            item
            container
            sx={{
              border: `1px solid ${theme.palette.common.lightBlue}`,
              padding: "1rem",
            }}
          >
            <Typography
              variant="h5"
              flex={1}
              sx={{ fontWeight: 400, color: theme.palette.common.lightBlue }}
            >
              Total
            </Typography>
            <Typography
              variant="h5"
              textAlign="center"
              flex={1}
              sx={{ fontWeight: 700, color: theme.palette.common.purple }}
            >
              50,000.00
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default CardComponent;
