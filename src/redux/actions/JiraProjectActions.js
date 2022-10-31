import {EDIT_PROJECT,UPDATE_PROJECT} from "../constants/JiraReportBugConstants/JiraProjectConstants"

export const editJiraProjectAction = (record) =>({
    type: EDIT_PROJECT,
    projectEditModel: record

});

export const updateJiraProjectAction = (projectUpdate) => ({
    type:UPDATE_PROJECT,
    projectUpdate: projectUpdate
})


