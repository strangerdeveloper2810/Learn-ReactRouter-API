import React, { useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";
import LoadingComponent from "./components/GlobalSetting/LoadingGlobalComponents/index";
import JiraModal from "./HOC/JiraModal/index";
import UserLoginTemplate from "./templates/UserTemplate/index";
import JiraTemplate from "./templates/JiraTemplate/index";
import LoginJira from "./pages/Jira-ReportBugs/LoginJira-ReportBugs/index";
import RegisterJira from "./pages/Jira-ReportBugs/RegisterJira-ReportBugs/index";
import Home from "./components/Jira/Home/index";
import CreateProject from "./pages/Jira-ReportBugs/CreateProject/index";
import ProjectManagement from "./pages/Jira-ReportBugs/ProjectManagent/index";
import PageNotFound from "./pages/PageNotFound/index";
import { ADD_HISTORY } from "./redux/constants/Jira/HistoryConstants/HistoryConstants";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: ADD_HISTORY,
      history: history,
    });
  }, [dispatch, history]);
  return (
    <Fragment>
      <LoadingComponent />
      <JiraModal />
      <Switch>
        {/* For Project Jira */}
        <UserLoginTemplate exact path="/" Component={LoginJira} />
        <UserLoginTemplate exact path="/login" Component={LoginJira} />
        <UserLoginTemplate exact path="/register" Component={RegisterJira} />
        <JiraTemplate exact path="/home" Component={Home} />
        <JiraTemplate exact path="/createproject" Component={CreateProject} />
        <JiraTemplate
          exact
          path="/projectmanagement"
          Component={ProjectManagement}
        />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Fragment>
  );
}

export default App;
