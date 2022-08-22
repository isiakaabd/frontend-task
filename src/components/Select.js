import PropTypes from "prop-types";
import { FormLabel, Grid, Select, MenuItem, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const CustomSelect = ({
  label,
  name,
  commentValue,
  comment,
  options,
  others,
  placeholder,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <Grid container direction="column" gap={1}>
      <Grid item container gap={1} alignItems="center">
        <FormLabel component="legend">{label}</FormLabel>
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
      <Select id={name} name={name} size="medium" {...rest}>
        {options.map((option) => (
          <MenuItem key={option.key} value={option.value}>
            {option.key}
          </MenuItem>
        ))}
      </Select>
    </Grid>
  );
};
CustomSelect.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  others: PropTypes.bool,
  comment: PropTypes.bool,
  commentValue: PropTypes.string,
};

export default CustomSelect;
