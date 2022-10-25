import { Table, Tag } from "antd";
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
      width: 10,
      sorter: (item2, item1) => {
        return item2.id - item1.id;
      },
      sortDirection: ["descend"],
    },

    {
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
      width: 25,
      sorter: (item2, item1) => {
        let projectName1 = item1.projectName?.trim().toLowerCase();
        let projectName2 = item2.projectName?.trim().toLowerCase();

        if (projectName2 < projectName1) {
          return -1;
        }
        return 1;
      },
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
      width: 25,
      sorter: (item2, item1) => {
        let categoryName1 = item1.categoryName?.trim().toLowerCase();
        let categoryName2 = item2.categoryName?.trim().toLowerCase();

        if (categoryName2 < categoryName1) {
          return -1;
        }
        return 1;
      },
    },

    {
      title: "Creator",
      dataIndex: "creator",
      key: "creator",
      render: (text, record, index) => {
        return <Tag color="green">{record.creator?.name}</Tag>;
      },
      width: 10,
      sorter: (item2, item1) => {
        let creator1 = item1.creator?.name.trim().toLowerCase();
        let creator2 = item2.creator?.name.trim().toLowerCase();

        if (creator2 < creator1) {
          return -1;
        }
        return 1;
      },
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
      width: 20,
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
        rowKey="id"
        dataSource={projectList}
        pagination={tableParams.pagination}
        loading={false}
        onChange={handleTableChange}
        tableLayout={"auto"}
        scroll={{ y: 525 }}
      />
    </div>
  );
}
