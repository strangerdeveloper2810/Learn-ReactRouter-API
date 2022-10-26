import React from "react";
import FormEditProject from "../../components/Jira/Form/FormEditProject/FormEditProject";
import {OPEN_FORM_EDIT_PROJECT} from "../constants/JiraModalConstants/JiraModalConstants";

export const openFormEditProjectAction = () =>({
    type: OPEN_FORM_EDIT_PROJECT,
    Component: <FormEditProject/>
});