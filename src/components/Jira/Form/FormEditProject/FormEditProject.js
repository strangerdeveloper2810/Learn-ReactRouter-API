import React, { useEffect, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { APIKEYTINY } from "../../../../util/constants/systemSetting";
import { useDispatch } from "react-redux";
import { SET_EDIT_SUBMIT_PROJECT } from "../../../../redux/constants/JiraModalConstants/JiraModalConstants";
export default function FormEditProject(props) {
  const dispatch = useDispatch();
  const submitForm = (event) => {
    event.preventDefault();
    alert("submit edit");
  }
  useEffect(()=>{
    dispatch({
        type: SET_EDIT_SUBMIT_PROJECT,
        submitForm
    });
  },[]);
  const { setFieldValue } = props;
  const editorRef = useRef(null);
  const handleEditorChange = (content, editor) => {
    setFieldValue("description", content);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4">
          <div className="form-group">
            <p className="fw-bold">Project Id</p>
            <input type="text" className="form-control" name="id" disabled />
          </div>
        </div>

        <div className="col-4">
          <div className="form-group">
            <p className="fw-bold">Project Name</p>
            <input type="text" className="form-control" name="projectName" />
          </div>
        </div>

        <div className="col-4">
          <div className="form-group">
            <p className="fw-bold">Project Category</p>
            <input type="text" className="form-control" name="projectName" />
          </div>
        </div>

        <div className="col-12">
          <div className="form-group">
            <p className="fw-bold">Description</p>
            <Editor
              apiKey={APIKEYTINY}
              name="descriptionEditor"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue=""
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
    </div>
  );
}
