import PhoneForm from "#/components/PhoneForm";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  EditContactByIdDocument,
  useGetContactDetailQuery,
} from "#/services/graphql";
import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import Link from "next/link";

export default function Test() {
  const { query } = useRouter();
  const id = (query["id"] ?? 0) as number;
  const router = useRouter();
  const { data: contact } = useGetContactDetailQuery({
    variables: {
      id: id,
    },
  });
  const [editContactById, { data, loading, error }] = useMutation(
    EditContactByIdDocument
  );

  const { values, handleSubmit, setFieldValue, handleChange, setValues } =
    useFormik({
      initialValues: {
        lastName: contact?.contact_by_pk?.last_name ?? "",
        firstName: contact?.contact_by_pk?.last_name ?? "",
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
        editContactById({
          variables: {
            id: id,
            _set: {
              first_name: values.firstName,
              last_name: values.lastName,
            },
          },
        });
      },
    });

  useEffect(() => {
    if (contact)
      setValues({
        firstName: contact?.contact_by_pk?.first_name + "",
        lastName: contact?.contact_by_pk?.last_name + "",
        phones:
          contact.contact_by_pk?.phones.map((phone) => {
            return phone.number;
            //   return
          }) ?? [],
      });
    console.log(values.phones);
  }, [contact]);

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
          id={id}
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
