import PhoneForm from "#/components/PhoneForm";
import { AddContactWithPhonesDocument } from "#/services/graphql";
import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import * as Yup from "yup";

type Props = {};

export default function NewContact({}: Props) {
  const [addContactWithPhonesMutation, { data, loading, error }] = useMutation(
    AddContactWithPhonesDocument
  );
  //   const router = useRouter();
  const { values, handleSubmit, setFieldValue, handleChange, setValues } =
    useFormik({
      initialValues: {
        lastName: "",
        firstName: "",
        phones: [] as string[],
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        // phones: Yup.array().min(1, "Must be min 1 phonenumber"),
      }),
      onSubmit: () => {
        console.log(values.phones);
        const phonesKe = values.phones.map((phone) => ({
          number: phone,
        }));
        addContactWithPhonesMutation({
          variables: {
            first_name: values.firstName,
            last_name: values.lastName,
            phones: phonesKe,
          },
        });
      },
    });

  return (
    <div>
      <Link href={"/"}>Back</Link>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={handleChange}
          value={values.firstName}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={handleChange}
          value={values.lastName}
        />
        <button type="submit">Save</button>
      </form>
      <div>
        {values.phones.map((phone, index) => (
          <div key={index}>
            <span>{phone}</span>
            <button
              onClick={() => {
                const phonesData = [...values.phones];
                phonesData.splice(index, 1);
                setFieldValue("phones", phonesData);
              }}
            >
              delete
            </button>
          </div>
        ))}
        <PhoneForm
          id={0}
          onSubmit={(newPhone) => {
            console.log("testt");
            const phonesData = [...values.phones];
            phonesData.push(newPhone);
            setFieldValue("phones", phonesData);
          }}
        />
      </div>
    </div>
  );
}
