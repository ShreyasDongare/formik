import { useFormik } from "formik";
import React from "react";
import { signUpSchema } from "../Schema";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};
const Form = () => {
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  console.log(errors);
  return (
    <>
      <form action="" className="w-96 px-5" onSubmit={handleSubmit}>
        <div>
          <h3 className="text-gray-800 text-3xl">Register</h3>
        </div>
        <div className="flex flex-col   py-2  ">
          <label htmlFor="name" className="px-1 my-1 cursor-pointer">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="px-1 my-1 py-1 outline-none rounded  shadow-inner"
          />
          {errors.name && touched.name ? (
            <p className="text-sm "> {errors.name}</p>
          ) : null}
        </div>
        <div className="flex flex-col   py-2  ">
          <label htmlFor="email" className="px-1 my-1 cursor-pointer">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="px-1 my-1 py-1 outline-none rounded  shadow-inner"
          />
          {errors.email && touched.email ? (
            <p className="text-sm "> {errors.email}</p>
          ) : null}
        </div>
        <div className="flex flex-col   py-2  ">
          <label htmlFor="password" className="px-1 my-1 cursor-pointer">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="px-1 my-1 py-1 outline-none rounded  shadow-inner"
          />
          {errors.password && touched.password ? (
            <p className="text-sm "> {errors.password}</p>
          ) : null}
        </div>
        <div className="flex flex-col   py-2  ">
          <label
            htmlFor="confirm_password"
            className="px-1 my-1 cursor-pointer"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            placeholder="Confirm Password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="px-1 my-1 py-1 outline-none rounded  shadow-inner"
          />
          {errors.confirm_password && touched.confirm_password ? (
            <p className="text-sm "> {errors.confirm_password}</p>
          ) : null}
        </div>
        <div className="flex justify-end my-2">
          <button
            type="submit"
            className="bg-black text-white px-5 py-1 rounded cursor-pointer"
            onClick={()=> confirm(`${values.name.charAt(0).toUpperCase()}${values.name.slice(1)}! You are registered successfully.`)}
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
