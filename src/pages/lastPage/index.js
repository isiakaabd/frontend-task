import { Card, Stack, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { useTheme } from "@mui/material/styles";
const FinalPage = () => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: "80rem",
        padding: "5rem 15rem",
        boxShadow: " 0px 6px 10px 0px #211E4314",
      }}
    >
      <Stack container alignItems="left" gap={4}>
        <DoneIcon
          sx={{
            color: "#6FCF97",
            boxShadow: "0px 6px 10px 0px #211E4314",
            borderRadius: "50%",
            alignSelf: "center",
            fontSize: "5rem",
            p: 1,
          }}
        />
        <Typography variant="h2">Purchase Completed</Typography>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 400,
            pr: 5,
            color: theme.palette.common.lightGrey,
          }}
        >
          Please check your email for details concerning this transaction.
        </Typography>
        <Typography
          sx={{
            cursor: "pointer",
            textDecoration: "underline",
            fontWeight: 400,
            textUnderlineOffset: ".5rem",
          }}
          variant="h5"
          color={theme.palette.secondary.main}
        >
          Return Home
        </Typography>
      </Stack>
    </Card>
  );
};

export default FinalPage;
