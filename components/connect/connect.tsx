import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { FiInstagram } from "react-icons/fi";
import { ImFacebook } from "react-icons/im";
import { AiFillYoutube } from "react-icons/ai";
import { RiMessengerFill } from "react-icons/ri";
import { BsEnvelopeFill } from "react-icons/bs";
import { MdError } from "react-icons/md";

interface Values {
  fullName: string;
  email: string;
  country: string;
  city: string;
  phoneNumber: string;
  acceptTerms: string;
}

const initialValues: Values = {
  fullName: "",
  email: "",
  country: "",
  city: "",
  phoneNumber: "",
  acceptTerms: "",
};

// const onSubmit = (values: Values) => {
//   console.log(values);
// };

const onSubmit = (values: any, { resetForm }: any) => {
  console.log(values);
  resetForm();
};

const validate = (values: Values) => {
  const errors: Partial<Values> = {};

  if (!values.fullName) {
    errors.fullName = "Please fill out this field.";
  }

  if (!values.email) {
    errors.email = "Please fill out this field.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.country) {
    errors.country = "Please select an item in the list.";
  }

  if (!values.city) {
    errors.city = "Please fill out this field.";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Please fill out this field.";
  } else if (!/^\d+$/.test(values.phoneNumber)) {
    errors.phoneNumber = "Phone number should only contain digits.";
  }

  if (!values.acceptTerms) {
    errors.acceptTerms = "you must accept the terms and conditions";
  }

  return errors;
};

const countries = [
  "Select a country",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Nepal",
  "Australia",
  "India",
  "China",
  "Spain",
  "Uzbekistan",
  "Kyrgyzstan",
  "USA",
  "",
  // ... and so on
];

const App: React.FC = () => {
  return (
    <div className="bg-black flex flex-col gap-[50px]  justify-center items-center ">
      <div className="flex flex-col justify-center items-center mt-[150px]">
        <h3 className="md:text-[40px]  mb-[35px]  font-bold text-[25px]  text-white leading-10">
          GET THE PVE NEWSLETTER
        </h3>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={validate}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form className="  flex flex-col justify-center  gap-[20px] ">
              <div className="md:flex  justify-center items-center  md:gap-[30px]">
                <div className="text-red-500 text-[12px] ">
                  <div className="flex flex-col  gap-2 relative">
                    <label
                      htmlFor="fullName"
                      className="text-[15px] text-white"
                    >
                      Full Name<span className="text-red-500 ml-[5px]">*</span>
                    </label>
                    <Field
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="h-[48px] w-[350px] text-black text-[16px] pl-[12px] rounded-md"
                    />
                    {errors.fullName ? (
                      <MdError className="absolute top-[55px] h-[20px] w-[20px] right-3 transform -translate-y-1/2" />
                    ) : null}
                  </div>
                  <ErrorMessage name="fullName" className=" " />
                </div>
                <div className="text-red-500 text-[12px]">
                  <div className="flex flex-col   gap-2 relative">
                    <label htmlFor="email" className="text-[15px]  text-white">
                      Email Address
                      <span className="text-red-500 ml-[5px]">*</span>
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="h-[48px] w-[350px] text-black text-[16px] pl-[12px] rounded-md "
                    />
                    {errors.email ? (
                      <MdError className="absolute top-[55px] h-[20px] w-[20px] right-3 transform -translate-y-1/2" />
                    ) : null}
                  </div>
                  <ErrorMessage name="email" />
                </div>
              </div>

              <div className="md:flex   justify-center items-center  md:gap-[30px]">
                <div className="text-red-500 text-[12px]">
                  <div className="flex flex-col gap-2 ">
                    <label htmlFor="country" className="text-[15px] text-white">
                      Country<span className="text-red-500 ml-[5px]">*</span>
                    </label>
                    <Field
                      className=" h-[48px] w-[350px] p-[5px] text-[16px] text-black rounded-md"
                      as="select"
                      id="country"
                      name="country"
                      onChange={(e: { target: { value: any } }) =>
                        setFieldValue("country", e.target.value)
                      }
                    >
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <ErrorMessage name="country" className="text-red-500" />
                </div>

                <div className="text-red-500 text-[12px] ">
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="city" className="text-[15px] text-white">
                      City<span className="text-red-500 ml-[5px]">*</span>
                    </label>
                    <Field
                      type="text"
                      id="city"
                      name="city"
                      className="h-[48px] w-[350px] text-black text-[16px] pl-[12px]  rounded-md"
                    />
                    {errors.city ? (
                      <MdError className="absolute top-[55px] h-[20px] w-[20px] right-3 transform -translate-y-1/2" />
                    ) : null}
                  </div>
                  <ErrorMessage name="city" className="text-red-500" />
                </div>
              </div>
              <div className="md:flex  flex-col  md:space-y-[15px] space-y-[20px]">
                <div className="text-red-500 text-[12px]">
                  <div className="flex flex-col gap-2 relative">
                    <label
                      htmlFor="phoneNumber"
                      className="text-[15px] text-white"
                    >
                      Mobile Number{" "}
                      <span className="text-red-500  ml-[5px]">*</span>
                    </label>

                    <Field
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="h-[48px] w-[350px] text-black text-[16px] pl-[12px] rounded-md "
                    />
                    {errors.phoneNumber ? (
                      <MdError className="absolute top-[55px] h-[20px] w-[20px] left-[320px] transform -translate-y-1/2" />
                    ) : null}
                  </div>

                  <ErrorMessage name="phoneNumber" />
                </div>

                <div className="text-red-500 text-[12px]   md:w-[700px] w-[300px]  ">
                  <label htmlFor="acceptTerms">
                    <div className="gap-3 flex justify-center items-center">
                      <Field
                        type="checkbox"
                        id="acceptTerms"
                        name="acceptTerms"
                        className="h-[25px] w-[25px] "
                      />
                      <span className="text-white text-[15px] md:h-[40px]  ">
                        By checking this box, you agree that you would like to
                        receive offers and information from PVE about similar
                        eventsby as described in our{" "}
                        <a
                          href="/privacy-policy"
                          target="_blank"
                          className="text-[15px] text-white font-bold"
                        >
                          PRIVACY POLICY
                        </a>
                      </span>
                    </div>
                  </label>
                  <ErrorMessage name="acceptTerms" />
                </div>

                <button
                  type="submit"
                  className="text-white h-[45px] w-[90px] hover:text-black  hover:bg-white bg-red-500 rounded-md "
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="flex flex-col justify-center items-center md:gap-[30px] gap-[20px] md:m-[100px] m-[50px]">
          <div className="flex md:gap-3 gap-1 justify-center items-center ">
            <div className="h-[3px] md:w-[120px] w-[0px] bg-white rounded-md"></div>
            <h1 className="text-white md:text-[40px] text-[16px] font-bold leading-9">
              CONNECT US THROUGH
            </h1>
            <div className="h-[3px] md:w-[120px] w-[0px] bg-white rounded-md"></div>
          </div>
          <div className="flex justify-center md:gap-3 gap-1 items-center">
            <div className="rounded-full md:h-[40px] md:w-[40px] h-[35px] w-[35px] hover:scale-110  border-2 flex justify-center items-center border-gray-100">
              <a href="./">
                <ImFacebook className="text-white md:h-[26px] h-[20px] w-[20px]  md:w-[26px]" />
              </a>
            </div>
            <div className="rounded-full md:h-[40px]  hover:scale-110 md:w-[40px] h-[35px] w-[35px] border-2 flex justify-center items-center border-gray-100">
              <a href="./">
                <FiInstagram className="text-white md:h-[28px] h-[19px] w-[19px]  md:w-[28px]" />
              </a>
            </div>
            <div className="rounded-full md:h-[40px] hover:scale-110 md:w-[40px] h-[35px] w-[35px]  border-2 flex justify-center items-center border-gray-100">
              <a href="./">
                <AiFillYoutube className="text-white md:h-[28px] h-[20px] w-[20px]  md:w-[28px]" />
              </a>
            </div>
            <div className="rounded-full md:h-[40px] hover:scale-110 md:w-[40px] h-[35px] w-[35px]  border-2 flex justify-center items-center border-gray-100">
              <a href="./">
                <BsEnvelopeFill className="text-white md:h-[28px]  h-[20px] w-[20px]  md:w-[28px]" />
              </a>
            </div>
            <div className="rounded-full md:h-[40px] hover:scale-110 md:w-[40px] h-[35px] w-[35px]  border-2 flex justify-center items-center border-gray-100">
              <a href="./">
                <RiMessengerFill className="text-white md:h-[28px] h-[20px] w-[20px]  md:w-[28px] " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
