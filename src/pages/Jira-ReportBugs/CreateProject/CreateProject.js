import React, { useRef,useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { APIKEYTINY } from "../../../util/constants/systemSetting";
import { withFormik } from "formik";
import * as Yup from "yup";
import { connect, useSelector, useDispatch } from "react-redux";
import {CATEGORY_PROJECT_API} from "../../../redux/constants/JiraReportBugConstants/JiraCategoryProjectConstants"
function CreateProject(props) {
  const { errors, handleChange, handleSubmit } = props;
  const editorRef = useRef(null);
  const arrProjectCategory = useSelector(
    (state) => state.JiraProjectCategoryReducer.arrProjectCategory
  );
  const renderCategory = () => {
    return arrProjectCategory.map((category, index)=>(
      <option value={category.id} key={index}>
        {category.projectCategoryName}
      </option>
    ));
  }

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({
      type: CATEGORY_PROJECT_API
    });
  },[]);
  return (
    <div className="container m-5">
      <h3 className="fs-1 text-start">Create Project</h3>
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <p>Name</p>
          <input type="text" className="form-control" name="projectName" />
        </div>

        <div className="form-group mt-3">
          <p>Description</p>
          <Editor
            apiKey={APIKEYTINY}
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue=""
            init={{
              height: 350,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </div>

        <div className="form-group mt-3">
          <select name="categoryId" className="form-control">
            {renderCategory()}
          </select>
        </div>

        <button
          className="mt-3 btn btn-outline-info text-primary"
          type="submit"
        >
          Create Project
        </button>
      </form>
    </div>
  );
}

const CreateProjectJiraReportBugWithFormik = withFormik({
  mapPropsToValues: () => ({}),

  validationSchema: Yup.object().shape({}),

  handleSubmit: (values, { props, setSubmitting }) => {},
})(CreateProject);

export default connect()(CreateProjectJiraReportBugWithFormik);
