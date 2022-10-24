import { Table } from "antd";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { DeleteFilled, EditFilled } from "@ant-design/icons/lib/icons";
import { useSelector, useDispatch } from "react-redux";
import { GET_ALL_PROJECT_API } from "../../../redux/constants/JiraReportBugConstants/ProjectListJiraConstants";
export default function ProjectManagement(props) {
  const projectList = useSelector(
    (state) => state.ProjectListReducer.projectList
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_ALL_PROJECT_API,
    });
  }, []);

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      width: "10%",
    },

    {
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
      width: "25%",
    },

    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text, record, index) => {
        let contentJSX = parse(text);
        return <div>{contentJSX}</div>;
      },
      width: 10,
    },

    {
      title: "Category Name",
      dataIndex: "categoryName",
      key: "categoryName",
      width: "20%",
    },

    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (text, record, index) => {
        return (
          <div>
            <button className="btn btn-info me-2 ">
              <EditFilled style={{ fontSize: 17 }} />
            </button>
            <button className="btn btn-danger">
              <DeleteFilled style={{ fontSize: 17 }} />
            </button>
          </div>
        );
      },
      width: "20%",
    },
  ];

  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };

  return (
    <div className="container-fluid">
      <h3 className="fs-2 fw-bolder mt-2">Project Management</h3>
      <Table
        columns={columns}
        dataSource={projectList}
        pagination={tableParams.pagination}
        loading={false}
        onChange={handleTableChange}
        tableLayout={"auto"}
        scroll={{ y: 540 }}
      />
    </div>
  );
}
