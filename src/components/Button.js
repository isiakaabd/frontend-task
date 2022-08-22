import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

const CustomButton = ({
  label,
  type: { background, hover, active, disabled, textColor },
  ...rest
}) => {
  const B = styled(Button)(({ theme }) => ({
    "&.MuiButton-root": {
      color: textColor,
      background: background,
      width: "24rem",
      lineHeight: "3rem",
      height: "5.8rem",
      fontSize: "2rem",
      // padding: ".8rem 3rem",
      fontWeight: 700,
      textTransform: "capitalize",

      "&:hover": {
        backgroundColor: hover,
      },
      "&:active": {
        backgroundColor: active,
        boxShadow: "none",
        color: textColor,
      },
    },
    "&:disabled": {
      backgroundColor: disabled,
      color: textColor,
      boxShadow: "none",
      cursor: "no-drop",
    },
  }));
  return (
    <B variant="contained" {...rest}>
      {label}
    </B>
  );
};
export default CustomButton;
CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
};
