import { AddNumberToContactDocument } from "#/services/graphql";
import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import * as Yup from "yup";

type Props = {
  onSubmit: (phone: string) => void;
  id: number;
};

export default function PhoneForm({ onSubmit, id }: Props) {
  const [AddNumberToContact, { data, loading, error }] = useMutation(
    AddNumberToContactDocument
  );

  const { values, handleSubmit, resetForm, handleChange } = useFormik({
    initialValues: {
      phone: "",
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .matches(
          new RegExp("[0-9]{7}"),
          "That doesn't look like a phone number"
        )
        .required("Required"),
    }),
    onSubmit: (data) => {
      AddNumberToContact({
        variables: {
          contact_id: id,
          phone_number: values.phone,
        },
      });
      onSubmit(data.phone);
      resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="phone"
        name="phone"
        type="text"
        onChange={handleChange}
        value={values.phone}
      />
      <button type="submit">add</button>
    </form>
  );
}
