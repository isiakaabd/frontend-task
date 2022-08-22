import { Grid } from "@mui/material";
import { Input, CustomSelect } from "components";

const InputSection = () => {
  const options = [
    {
      key: "Lagos",
      value: "Lagos",
    },
    {
      key: "Abuja",
      value: "Abuja",
    },
  ];
  return (
    <Grid item container gap={4}>
      <Input
        label="Name"
        name="name"
        placeholder="Enter your Name"
        required={true}
        others={false}
      />
      <Input
        label="Email Address"
        name="email"
        placeholder="Enter your Email Address"
        required={true}
        others={true}
        comment={true}
        commentValue="The purchase reciept would be sent to this address"
      />
      <Input
        label="Address 1"
        name="address1"
        placeholder="The Address of the user goes here"
        required={false}
        others={false}
      />
      <Input
        label="Address 2"
        name="address2"
        placeholder="and here"
        required={false}
        others={false}
      />
      <Grid item container flexWrap="nowrap" gap={2}>
        <Grid item xs={8}>
          <Input
            label="Local Government"
            name="lg"
            placeholder="Surulere"
            required={false}
            others={false}
          />
        </Grid>
        <Grid item xs={4}>
          <CustomSelect
            label="State"
            name="state"
            value="Lagos"
            placeholder=""
            required={false}
            others={false}
            options={options}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InputSection;
