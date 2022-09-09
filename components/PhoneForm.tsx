import { useFormik } from "formik";
import * as Yup from "yup";

type Props = {
  onSubmit: (phone: string) => void;
};

export default function PhoneForm({ onSubmit }: Props) {
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
