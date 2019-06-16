import * as React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { bindActionCreators, compose } from "redux";
import { LoginForm } from "../components/LoginForm";
import { withTaskService } from "../hocs";
import { login } from "../redux-store/actions/userActions";

interface ILoginContainerProps extends RouteComponentProps {
  loading: boolean;
  login: any;
  errors: any;
}

export const LC: React.FC<ILoginContainerProps> = ({
  loading,
  login,
  errors,
  history
}) => {
  const onSubmit = async (values: any, { setErrors, resetForm }: any) => {
    await login(values);

    if (!errors && !loading) {
      history.push("/");
    }
  };

  console.log(errors, loading);
  return (
    <Row className="justify-content-md-center mt-3">
      <Col md="5">
        <h4 className="mb-3">Login</h4>
        <LoginForm onSubmit={onSubmit} valErrors={errors} login={login} history={history} />
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ user }: any) => ({
  loading: user.loading,
  errors: user.validationErrors
});

const mapDispatchToProps = (dispatch: any, { taskService, history }: any) =>
  bindActionCreators(
    {
      login: login(taskService ,history)
    },
    dispatch
  );

export const LoginContainer = compose(
  withTaskService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(LC);
