import { Grid } from "@mui/material";
import { Input, CustomSelect } from "components";
import { useState } from "react";
const InputSection = () => {
  const options = [
    {
      key: "Visa",
      value: "Visa",
    },
    {
      key: "MasterCard",
      value: "MasterCard",
    },
  ];
  const [state, setState] = useState({
    name: "",
    card: "Visa",
    detail: "",
    expiry: "",
    cvv: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const { name, card, detail, expiry, cvv } = state;
  //   const changeValue = (card) => {
  //     const value = card.toString().length;
  //     console.log(card);
  //     console.log(value);
  //     const b = value % 4 === 0;
  //     console.log(b);
  //     if (value % 4 === 0) {
  //       //   console.log(value?.findIndex(b).split(""));
  //       //   value.split(b).join();
  //     }
  //   };
  //   console.log(changeValue(1234));
  //   console.log(state);
  return (
    <Grid item container gap={3}>
      <Input
        label="Name on The Card"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Opara Linus Ahmed"
        required={true}
        others={false}
      />
      <CustomSelect
        label="Card Type"
        name="card"
        value={card}
        onChange={handleChange}
        placeholder="Enter your  Card Number"
        required={true}
        others={true}
        options={options}
      />

      <Grid
        item
        container
        flexWrap="nowrap"
        gap={2}
        justifyContent="space-between"
      >
        <Grid item xs={6}>
          <Input
            label="Card details"
            name="detail"
            type="number"
            value={detail}
            max={16}
            onChange={handleChange}
            placeholder="and here"
            required={false}
            others={false}
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            label="Expiry Date"
            name="expiry"
            value={expiry}
            onChange={handleChange}
            placeholder="04/20"
            required={true}
            others={true}
            options={options}
          />
        </Grid>
        <Grid item xs={2}>
          <Input
            label="CVV"
            name="cvv"
            placeholder="04/20"
            required={true}
            value={cvv}
            onChange={handleChange}
            others={false}
            options={options}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InputSection;
