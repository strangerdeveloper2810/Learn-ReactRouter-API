import { Route, Switch, useHistory } from "react-router-dom";
import LoginJira from "./pages/Jira-ReportBugs/LoginJira-ReportBugs/LoginJira";
import { UserLoginTemplate } from "./templates/UserTemplate/UserLoginTemplate";
import LoadingComponent from "./components/GlobalSetting/LoadingGlobalComponents/LoadingComponent";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import React, { useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import { ADD_HISTORY } from "./redux/constants/HistoryConstants/HistoryConstants";
import JiraTemplate from "./templates/JiraTemplate/JiraTemplate";
import Home from "./components/Jira/Home/Home";
import CreateProject from "./pages/Jira-ReportBugs/CreateProject/CreateProject";
import RegisterJira from "./pages/Jira-ReportBugs/RegisterJira-ReportBugs/RegisterJira";
function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: ADD_HISTORY,
      history: history,
    });
  }, []);
  return (
    <Fragment>
      <LoadingComponent />
      <Switch>
        {/* For Project Jira */}
        <UserLoginTemplate exact path="/" Component={LoginJira} />
        <UserLoginTemplate exact path="/login" Component={LoginJira} />
        <UserLoginTemplate exact path="/register" Component={RegisterJira} />
        <JiraTemplate exact path="/home" Component={Home} />
        <JiraTemplate exact path="/createproject" Component={CreateProject} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Fragment>
  );
}

export default App;
