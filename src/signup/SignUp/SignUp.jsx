import { Form, Formik } from "formik";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ImageDesktop from "../../components/ImageDesktop/ImageDesktop";
import List from "../../components/List/List";
import ListItem from "../../components/ListItem/ListItem";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const initialValues = {
  email: "",
};

const SignUp = () => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    navigate(`/success/${values.email}`);
  };

  return (
    <section className="container bg-white rounded-md p-4 flex gap-2">
      <div className="flex flex-col gap-4 justify-center flex-grow">
        <section>
          <h1 className="font-bold text-5xl mb-2">Stay updated!</h1>
          <p className="mb-4">
            Join 60,000+ other subscribers and get notified of new content
            weekly!
          </p>
          <List>
            <ListItem>Product discovery and building what matters</ListItem>
            <ListItem>Product discovery and building what matters</ListItem>
            <ListItem>Product discovery and building what matters</ListItem>
            <ListItem>Product discovery and building what matters</ListItem>
            <ListItem>Product discovery and building what matters</ListItem>
          </List>
        </section>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={yup.object({
            email: yup
              .string()
              .email("Valid email required")
              .required("This field is required"),
          })}
          validateOnChange
        >
          <Form className="flex flex-col gap-2">
            <Input id="email" type="email" label="Email" />
            <Button type="submit">Sign Up</Button>
          </Form>
        </Formik>
      </div>
      <div>
        <ImageDesktop />
      </div>
    </section>
  );
};

export default SignUp;
