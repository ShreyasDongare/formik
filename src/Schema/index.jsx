import * as Yup from "yup"


export const signUpSchema = Yup.object({
  name: Yup.string().min(2).required("Please enter your name"),
  email: Yup.string().email().required("please enter email address"),
  password: Yup.string().min(6).required("please enter password"),
  confirm_password: Yup.string().oneOf([Yup.ref("password"), null], "password must match").required("please confirm password")
});