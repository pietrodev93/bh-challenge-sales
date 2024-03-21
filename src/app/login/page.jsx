"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Formik, Field, Form } from "formik";

export default function Login() {
  const router = useRouter();

  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email obbligatoria";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Email non valida";
    }

    if (!values.password) {
      errors.password = "Password obbligatoria";
    } else if (values.password.length <= 8) {
      errors.password = "Deve contenere piu di 7 caratteri";
    }

    return errors;
  };

  const onLogin = (values) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        setLoading(false);
        const user = userCredential.user;
        router.push("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrors(errorMessage);
        setLoading(false);
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <main>
        <section>
          <div className="md:grid grid-cols-2 h-screen ">
            <div className="flex flex-col justify-center h-screen">
              <div className=" px-10 ">
                <div>
                  <div className="text-2xl text-gray-700 text-center font-bold mb-2">
                    Body<span className="text-tertiary">Hack</span>
                  </div>

                  <h2 className="text-center md:text-sm text-xs tracking-tight text-gray-900">
                    Bentornato/a!
                  </h2>
                </div>

                <div className="mt-4 text-xs" style={{ color: "red" }}>
                  {errors && errors}
                </div>

                <div>
                  <Formik
                    initialValues={initialValues}
                    validate={validateForm}
                    onSubmit={(values) => onLogin(values)}
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
                              Indirizzo email
                            </label>
                            <Field
                              type="email"
                              id="email"
                              name="email"
                              value={values.email}
                              onChange={handleChange}
                              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              placeholder="La tua email"
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
                              placeholder="La tua password"
                            />

                            <p className="text-xs" style={{ color: "red" }}>
                              {errors.password &&
                                touched.password &&
                                errors.password}
                            </p>
                          </div>
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="text-white group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            <span>{loading ? "Attendi ..." : "Login "}</span>
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>

              <p className="text-sm mt-10 text-gray-700 text-center">
                Non hai ancora un account?{" "}
                <Link href="/signup" className="underline text-tertiary">
                  Registrati!
                </Link>
              </p>
            </div>

            <div className="bg-sidebar md:block hidden text-secondary h-screen">
              <div
                className="bg-hero-section  flex items-center justify-center bg-no-repeat bg-center bg-cover h-screen"
              ></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
