import PropTypes from "prop-types";
import { FormLabel, Grid, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const Input = ({ label, name, commentValue, comment, others, ...rest }) => {
  const theme = useTheme();
  return (
    <Grid container direction="column" gap="1rem">
      <Grid item container alignItems="center" padding={0}>
        <FormLabel component="legend" sx={{ mr: 1 }}>
          {label}
        </FormLabel>
        {others && (
          <Typography variant="span" sx={{ color: "#f00" }}>
            *
          </Typography>
        )}
      </Grid>

      {comment && (
        <Typography variant="body2" color={theme.palette.common.lightBlue}>
          {commentValue}
        </Typography>
      )}
      <TextField id={name} name={name} size="medium" {...rest} />
    </Grid>
  );
};
Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  others: PropTypes.bool,
  comment: PropTypes.bool,
  commentValue: PropTypes.string,
};

export default Input;
