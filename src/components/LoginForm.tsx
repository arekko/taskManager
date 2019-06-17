import { Formik } from "formik";
import * as React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required()
});

interface ILoginFormProps {
  onSubmit: any;
  valErrors: any;
  login: any;
  history: any;
}

export const LoginForm: React.FC<ILoginFormProps> = ({
  onSubmit,
  valErrors,
  login,
  history
}) => {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={async (values, { setErrors }) => {
        await login(values);
      }}
      initialValues={{
        username: "",
        password: ""
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors
      }: any) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row className="justify-content-md-center">
            <Form.Group as={Col} controlId="validationFormik01">
              <InputGroup>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-md-center">
            <Form.Group as={Col} controlId="validationFormik02">
              <InputGroup>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!valErrors || !!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {valErrors && valErrors.password}
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  {errors.password && errors.password}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>

          <Form.Row className="justify-content-md-center">
            <Form.Group as={Col} controlId="validationFormikButton">
              <Button type="submit" block variant="outline-primary">
                Login
              </Button>
            </Form.Group>
          </Form.Row>
        </Form>
      )}
    </Formik>
  );
};
