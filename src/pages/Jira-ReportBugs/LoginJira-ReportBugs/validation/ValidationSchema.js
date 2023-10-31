import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required!").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required!")
    .min(6, "Password must have min 6 characters")
    .max(32, "Password have max 32 characters"),
});
