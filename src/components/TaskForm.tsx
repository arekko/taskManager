import { Formik } from "formik";
import * as React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required(),
  email: yup
    .string()
    .required()
    .email(),
  text: yup.string().required()
});

interface Props {}

export const TaskForm: React.FC<Props> = () => {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        username: "",
        email: "",
        text: ""
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
            <Form.Group as={Col} md="12" controlId="validationFormik01">
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
            <Form.Group as={Col} md="12" controlId="validationFormik02">
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>

          <Form.Row className="justify-content-md-center">
            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
              <InputGroup>
                <Form.Control
                  as={"textarea"}
                  placeholder="Input your task ..."
                  name="text"
                  value={values.text}
                  onChange={handleChange}
                  isInvalid={!!errors.text}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.text}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-md-center">
            <Form.Group as={Col} md="12" controlId="validationFormikButton">
              <Button type="submit" block>
                Create task
              </Button>
            </Form.Group>
          </Form.Row>
        </Form>
      )}
    </Formik>
  );
};