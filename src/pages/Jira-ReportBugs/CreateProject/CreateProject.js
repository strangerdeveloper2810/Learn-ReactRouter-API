import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
export default function CreateProject(props) {
  const editorRef = useRef(null);
  return (
    <div className="container m-5">
      <h3 className="fs-1 text-start">Create Project</h3>
      <form className="container">
        <div className="form-group">
          <p>Name</p>
          <input type="text" className="form-control" name="projectName" />
        </div>

        <div className="form-group mt-3">
          <p>Description</p>
          <Editor
            name="projectName"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue=""
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </div>

        <div className="form-group mt-3">
          <select name="categoryId" className="form-control">
            <option>Software</option>
            <option>Marketing</option>
            <option>Finance</option>
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
