import * as Yup from "yup";

const Schema = {
  register: () => {
    return Yup.object({
      firstName: Yup.string().label("First name").required(),
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });
  },
  login: () => {
    return Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
      });
  },
};

export default Schema;
