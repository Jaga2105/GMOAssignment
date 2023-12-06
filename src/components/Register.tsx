import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  interface FormField {
    value: string;
    error: boolean;
    errorMsg: string;
  }

  interface FormValues {
    name: FormField;
    phone: FormField;
    email: FormField;
  }

  const [formValues, setFormValues] = useState<FormValues>({
    name: {
      value: "",
      error: false,
      errorMsg: "",
    },
    phone: {
      value: "",
      error: false,
      errorMsg: "",
    },
    email: {
      value: "",
      error: false,
      errorMsg: "",
    },
  });

  const validateName = (name: string, value: string): void => {
    let errorMsg: string = "";
    let error: boolean = false;
    if (value === "") {
      errorMsg = `${name} can't be empty`;
      error = true;
    } else if (value.length < 5) {
      errorMsg = `${name} should be of atleast 5 characters`;
      error = true;
    }
    setFormValues({
      ...formValues,
      [name]: {
        value,
        error,
        errorMsg,
      },
    });
  };

  const validatePhone = (name: string, value: string): void => {
    let errorMsg: string = "";
    let error: boolean = false;
    if (value === "") {
      errorMsg = `${name} can't be empty`;
      error = true;
    } else if (value.length !== 10) {
      errorMsg = `Invalid ${name} number`;
      error = true;
    }
    setFormValues({
      ...formValues,
      [name]: {
        value,
        error,
        errorMsg,
      },
    });
  };
  const validateEmail = (name: string, value: string): void => {
    const regEx: RegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    let errorMsg: string = "";
    let error: boolean = false;
    if (value === "") {
      errorMsg = `${name} should n't be empty`;
      error = true;
    } else if (!regEx.test(value)) {
      errorMsg = `Invalid ${name} `;
      error = true;
    }
    setFormValues({
      ...formValues,
      [name]: {
        value,
        error,
        errorMsg,
      },
    });
  };

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    console.log(value);
    if (name === "name") {
      validateName(name, value);
    } else if (name === "phone") {
      validatePhone(name, value);
    } else if (name === "email") {
      validateEmail(name, value);
    }
  };

  const handleOnBlur = (e: any) => {
    handleOnChange(e);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formFields = Object.keys(formValues);
    let errorArray: boolean[] = [];
    let userData: { [key: string]: string } = {};

    for (let i = 0; i < formFields.length; i++) {
      let key = formFields[i] as keyof FormValues;
      errorArray.push(formValues[key].error);
      userData[formFields[i]] = formValues[key].value;
    }

    if (errorArray.includes(true)) {
      console.log("Enter All credentials");
    } else {
      const data = JSON.stringify(userData);
      localStorage.setItem(userData["email"], data);
      navigate("/home");
    }
  };

  return (
    <Container maxWidth="xs" sx={{ marginTop: 14 }}>
      <form noValidate onSubmit={handleSubmit}>
        <Typography align="center" mb={4} variant="h4">
          Register!!
        </Typography>
        <TextField
          name="name"
          placeholder="Enter Name"
          label="Name"
          variant="outlined"
          autoComplete="off"
          fullWidth
          sx={{ marginBottom: 2 }}
          onChange={(e) => handleOnChange(e)}
          error={formValues.name.error}
          helperText={formValues.name.error && formValues.name.errorMsg}
          onBlur={(e) => handleOnBlur(e)}
        />
        <TextField
          type="number"
          name="phone"
          //   pattern=".{10,10}"
          placeholder="Enter phone no."
          label="Phone"
          variant="outlined"
          autoComplete="off"
          fullWidth
          sx={{ marginBottom: 2 }}
          onChange={(e) => handleOnChange(e)}
          error={formValues.phone.error}
          helperText={formValues.phone.error && formValues.phone.errorMsg}
          onBlur={(e) => handleOnBlur(e)}
        />
        <TextField
          type="email"
          name="email"
          placeholder="Enter email"
          label="E-mail"
          variant="outlined"
          autoComplete="off"
          fullWidth
          sx={{ marginBottom: 2 }}
          onChange={(e) => handleOnChange(e)}
          error={formValues.email.error}
          helperText={formValues.email.error && formValues.email.errorMsg}
          onBlur={(e) => handleOnBlur(e)}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ height: 44 }}>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Register;
