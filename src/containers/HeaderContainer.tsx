import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { bindActionCreators, compose } from "redux";
import { Header } from "../components/Header";
import { withTaskService } from "../hocs";
import { logout } from "../redux-store/actions/userActions";

interface IHeaderContainerProps extends RouteComponentProps {
  logout: () => void;
  user: any;
}

export const HC: React.FC<IHeaderContainerProps> = ({ logout, user }) => {
  return <Header logout={logout} user={user} />;
};

const mapStateToProps = ({ user }: any) => ({
  user: user.token
});

const mapDispatchToProps = (dispatch: any, { taskService }: any) =>
  bindActionCreators(
    {
      logout
    },
    dispatch
  );

export const HeaderContainer = compose(
  withTaskService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HC);
