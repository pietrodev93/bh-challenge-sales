"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { Formik, Field, Form } from "formik";

export default function Signup() {
  const router = useRouter();

  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "First name is required";
    } else if (values.firstName.length <= 3) {
      errors.firstName = "Must be 3 characters or more";
    }

    if (!values.lastName) {
      errors.lastName = "Last name is required";
    } else if (values.lastName.length <= 3) {
      errors.lastName = "Must be 3 characters or more";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password number is required";
    } else if (values.password.length <= 8) {
      errors.password = "Password length must be more than 7";
    }

    if (values.password !== values.confirmPassword) {
      errors.password = "Password does not match!";
    }

    return errors;
  };

  const onSubmitSignupForm = async (values) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        setLoading(false);
        const user = userCredential.user;
        console.log(user);
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrors(errorMessage);
        setLoading(false);
        console.log(errorCode, errorMessage);
      });

    await updateProfile(auth.currentUser, {
      displayName: `${values.firstName} ${values.lastName}`,
    })
      .then(() => {
        console.log("updated successfully");
      })
      .catch((error) => {
        console.log("error updating name");
        console.log(error);
      });
  };

  return (
    <main>
      <section>
        <div className="grid md:grid-cols-2 h-screen  ">
          <div className="md:w-full w-4/5 mx-auto ">
            <div className="flex md:w-4/5  mx-auto flex-col justify-center h-screen ">
              <div>
                <div>
                  <div className="text-2xl text-gray-700 text-center font-bold mb-2">
                    Body<span className="text-tertiary">Hack</span>
                  </div>

                  <h2 className="text-center text-sm md:text-xs tracking-tight text-gray-900">
                    Sei nuovo? Registrati subito!
                  </h2>
                </div>

                <div className="mt-4 text-xs" style={{ color: "red" }}>
                  {errors && errors}
                </div>

                <div>
                  <Formik
                    initialValues={initialValues}
                    validate={validateForm}
                    onSubmit={(values) => onSubmitSignupForm(values)}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                    }) => (
                      <Form className="mt-8 space-y-6">
                        <div className=" space-y-6 rounded-md shadow-sm">
                          <div>
                            <label htmlFor="email-address" className="sr-only">
                              Nome
                            </label>
                            <Field
                              type="firstName"
                              id="firstName"
                              name="firstName"
                              value={values.firstName}
                              onChange={handleChange}
                              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Mario"
                            />
                            <p className="text-xs" style={{ color: "red" }}>
                              {errors.firstName &&
                                touched.firstName &&
                                errors.firstName}
                            </p>
                          </div>

                          <div>
                            <label htmlFor="email-address" className="sr-only">
                              Cognome
                            </label>
                            <Field
                              type="lastName"
                              id="lastName"
                              name="lastName"
                              value={values.lastName}
                              onChange={handleChange}
                              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Rossi"
                            />
                            <p className="text-xs" style={{ color: "red" }}>
                              {errors.lastName &&
                                touched.lastName &&
                                errors.lastName}
                            </p>
                          </div>

                          <div>
                            <label htmlFor="email-address" className="sr-only">
                              Indirizzo email
                            </label>
                            <Field
                              type="email"
                              id="email"
                              name="email"
                              value={values.email}
                              onChange={handleChange}
                              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="mario.rossi@gmail.com"
                            />

                            <p className="text-xs" style={{ color: "red" }}>
                              {errors.email && touched.email && errors.email}
                            </p>
                          </div>

                          <div>
                            <label htmlFor="password" className="sr-only">
                              Password
                            </label>
                            <Field
                              type="password"
                              id="password"
                              name="password"
                              value={values.password}
                              onChange={handleChange}
                              className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Password complessa"
                            />

                            <p className="text-xs" style={{ color: "red" }}>
                              {errors.password &&
                                touched.password &&
                                errors.password}
                            </p>
                          </div>

                          <div>
                            <label htmlFor="password" className="sr-only">
                              Conferma Password
                            </label>
                            <Field
                              type="password"
                              id="confirmPassword"
                              name="confirmPassword"
                              value={values.confirmPassword}
                              onChange={handleChange}
                              className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="Conferma Password"
                            />
                          </div>
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="text-white group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            <span>
                              {loading ? "Attendi ..." : "Registrati"}
                            </span>
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>

              <p className="mt-10 text-sm text-gray-700 text-center">
                Possiedi già un account?{" "}
                <Link href="/login" className="underline text-tertiary">
                  Effettua il Login
                </Link>
              </p>
            </div>
          </div>

          <div className="bg-sidebar md:block hidden text-secondary h-screen">
            <div className="bg-hero-section  flex items-center justify-center bg-no-repeat bg-center bg-cover h-screen"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
