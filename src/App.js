import { Route, Switch, useHistory } from "react-router-dom";
import LoginJira from "./pages/Jira-ReportBugs/LoginJira-ReportBugs/LoginJira";
import { UserLoginTemplate } from "./templates/UserTemplate/UserLoginTemplate";

// React-router-dom, Redux-thunk, Redux-saga, HOC
import LoadingComponent from "./components/GlobalSetting/LoadingGlobalComponents/LoadingComponent";
// // import Header from "./components/Home/Header/Header";
// import Modal from "./HOC/Modal/Modal";
// import About from "./pages/About/About";
// import Contact from "./pages/Contact/Contact";
// import DemoHOCModal from "./pages/DemoHOC/DemoHOCModal";
// import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
// import Profile from "./pages/Profile/Profile";
// import Todolist from "./pages/Todolist/Todolist";
// import TodolistRedux from "./pages/Todolist/TodolistRedux";
// import TodolistRFC from "./pages/Todolist/TodolistRFC";
// import HomeSaga from "./pages/TodolistSaga/HomeSaga";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import React, { useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import { ADD_HISTORY } from "./redux/constants/HistoryConstants/HistoryConstants";
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
      {/* <Modal /> */}
      <LoadingComponent />

      <Switch>
        {/* // React-router-dom, Redux-thunk, Redux-saga, HOC  */}
        {/* <Route exact path="/" component={Home} />
        <HomeTemplate exact path="/home" Component={Home}/>
        <HomeTemplate exact path="/about" Component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/todolistrcc" component={Todolist} />
        <Route exact path="/todolistrfc" component={TodolistRFC} />
        <Route exact path="/todolistredux" component={TodolistRedux} />
        <Route exact path="/todolistsaga" component={HomeSaga} />
        <Route exact path="/demoHOC" component={DemoHOCModal} />
        <Route path="*" component={PageNotFound} /> */}

        {/* For Project Jira */}
        <HomeTemplate exact path="/" Component={Home} />
        <UserLoginTemplate exact path="/login" Component={LoginJira} />
        <HomeTemplate exact path="/home" Component={Home} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Fragment>
  );
}

export default App;
