import React, { useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { APIKEYTINY } from "../../../../util/constants/systemSetting";
import { connect, useSelector, useDispatch } from "react-redux";
import { withFormik } from "formik";
import * as Yup from "yup";
import { SET_EDIT_SUBMIT_PROJECT } from "../../../../redux/constants/JiraModalConstants/JiraModalConstants";
import { CATEGORY_PROJECT_API } from "../../../../redux/constants/JiraReportBugConstants/JiraCategoryProjectConstants";
function FormEditProject(props) {
  const { values, handleChange, handleSubmit, setFieldValue } = props;
  const dispatch = useDispatch();

  const arrProjectCategory = useSelector(
    (state) => state.JiraProjectCategoryReducer.arrProjectCategory
  );

  const renderCategory = () => {
    return arrProjectCategory?.map((category, index) => (
      <option value={category.id} key={index}>
        {category.projectCategoryName}
      </option>
    ));
  };

  const editorRef = useRef(null);
  const handleEditorChange = (content, editor) => {
    setFieldValue("description", content);
  };

  useEffect(() => {
    dispatch({
      type: CATEGORY_PROJECT_API,
    });

    dispatch({
      type: SET_EDIT_SUBMIT_PROJECT,
      submitForm:handleSubmit,
    });
  }, []);

  return (
    <div className="container-fluid">
      <form className="container" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-4">
            <div className="form-group">
              <p className="fw-bold">Project Id</p>
              <input
                type="text"
                className="form-control"
                value={values.id}
                name="id"
                disabled
              />
            </div>
          </div>

          <div className="col-4">
            <div className="form-group">
              <p className="fw-bold">Project Name</p>
              <input
                type="text"
                className="form-control"
                value={values.projectName}
                name="projectName"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-4">
            <div className="form-group">
              <p className="fw-bold">Project Category</p>
              <select
                name="categoryId"
                className="form-control"
                value={values.categoryId}
              >
                {renderCategory()}
              </select>
            </div>
          </div>

          <div className="col-12">
            <div className="form-group">
              <p className="fw-bold">Description</p>
              <Editor
                apiKey={APIKEYTINY}
                name="descriptionEditor"
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue={values.categoryId}
                init={{
                  height: 250,
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
                onEditorChange={handleEditorChange}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

const EditProjectWithFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const { projectEdit } = props;

    return {
      id: projectEdit?.id,
      projectName: projectEdit.projectName,
      description: projectEdit.description,
      categoryId: projectEdit.categoryId,
    };
  },

  validationSchema: Yup.object().shape({}),

  handleSubmit: (values, { props, setSubmitting, event }) => {
    console.log("values", values);
  },
})(FormEditProject);

const mapStateToProps = (state) => ({
  projectEdit: state.JiraProjectReducer.projectEdit,
});

export default connect(mapStateToProps)(EditProjectWithFormik);
