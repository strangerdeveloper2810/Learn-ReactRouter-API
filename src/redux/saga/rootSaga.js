// import * as TDLSagaAction from "./TodolistSagaAction";
import {all} from "redux-saga/effects"
import * as userJira from "./JiraReportBugs/UserJiraReportBug"
export function * rootSaga() {
    // TodolistSaga
    // yield all([
    //     TDLSagaAction.actionGetTaskApi(),
    //     TDLSagaAction.actionAddTaskApi(),
    //     TDLSagaAction.actionDeleteTask(),
    //     TDLSagaAction.actionDoneTask(),
    //     TDLSagaAction.actionRejectTask(),
    // ]);

    // Jira 
    yield all([
        userJira.actionSignin(),
    ]);
}