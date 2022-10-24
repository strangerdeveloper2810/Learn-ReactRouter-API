import { Button, Table } from "antd";
import React, { useState } from "react";
import parse from "html-react-parser";
import { FormOutlined } from "@ant-design/icons";
import { DeleteOutlined } from "@ant-design/icons/lib/icons";

export default function ProjectManagement(props) {
  const data = [
    {
      members: [
        {
          userId: 1024,
          name: "zoro",
          avatar: "https://ui-avatars.com/api/?name=zoro",
        },
      ],
      creator: {
        id: 2899,
        name: "dat",
      },

      id: 8482,
      projectName: "Quyen test project",
      description: "<p><em>Alo <strong>123</strong></em></p>",
      categoryId: 1,
      categoryName: "Dự án web",
      alias: "quyen-test-project",
      deleted: false,
    },

    {
      members: [
        {
          userId: 850,
          name: "AnhHoang",
          avatar: "https://ui-avatars.com/api/?name=AnhHoang",
        },
        {
          userId: 984,
          name: "Test",
          avatar: "https://ui-avatars.com/api/?name=Test",
        },
      ],
      creator: {
        id: 2899,
        name: "dat",
      },
      id: 8483,
      projectName: "datTestProject",
      description: "<p>s&aacute;dasdasd</p>",
      categoryId: 1,
      categoryName: "Dự án web",
      alias: "dattestproject",
      deleted: false,
    },

    {
      members: [
        {
          userId: 2304,
          name: "Elvis",
          avatar: "https://ui-avatars.com/api/?name=Elvis",
        },
        {
          userId: 1024,
          name: "zoro",
          avatar: "https://ui-avatars.com/api/?name=zoro",
        },
        {
          userId: 1191,
          name: "hello men",
          avatar: "https://ui-avatars.com/api/?name=hello men",
        },
      ],
      creator: {
        id: 2882,
        name: "Sang ",
      },
      id: 8485,
      projectName: "project last FE-72 CyberSoft Hehe",
      description:
        '<p style="text-align: center;">Congregation, <span style="color: rgb(241, 196, 15);"><strong>be successful in future</strong></span> !</p>',
      categoryId: 1,
      categoryName: "Dự án web",
      alias: "project-last-fe-72-cybersoft-hehe",
      deleted: false,
    },

    {
      members: [
        {
          userId: 862,
          name: "Trần Vinh",
          avatar: "https://ui-avatars.com/api/?name=Trần Vinh",
        },
        {
          userId: 1027,
          name: "fuk you",
          avatar: "https://ui-avatars.com/api/?name=fuk you",
        },
        {
          userId: 984,
          name: "Test",
          avatar: "https://ui-avatars.com/api/?name=Test",
        },
        {
          userId: 827,
          name: "Bosch",
          avatar: "https://ui-avatars.com/api/?name=Bosch",
        },
      ],
      creator: {
        id: 2780,
        name: "batman",
      },
      id: 8486,
      projectName: "Batman Project",
      description:
        '<p><span style="color: rgb(0, 0, 0);"><strong>Hihhahaha</strong></span></p>',
      categoryId: 2,
      categoryName: "Dự án phần mềm",
      alias: "batman-project",
      deleted: false,
    },

    {
      members: [
        {
          userId: 827,
          name: "Bosch",
          avatar: "https://ui-avatars.com/api/?name=Bosch",
        },
        {
          userId: 850,
          name: "AnhHoang",
          avatar: "https://ui-avatars.com/api/?name=AnhHoang",
        },
      ],
      creator: {
        id: 2693,
        name: "Nguyen Huy",
      },
      id: 8487,
      projectName: "dungxoanha",
      description: "danhn",
      categoryId: 1,
      categoryName: "Dự án web",
      alias: "dungxoanha",
      deleted: false,
    },

    {
      members: [
        {
          userId: 1861,
          name: "Khoasharp1",
          avatar: "https://ui-avatars.com/api/?name=Khoasharp1",
        },
        {
          userId: 2302,
          name: "didan",
          avatar: "https://ui-avatars.com/api/?name=didan",
        },
      ],
      creator: {
        id: 2884,
        name: "string",
      },
      id: 8488,
      projectName: "vinhkhang",
      description: "",
      categoryId: 3,
      categoryName: "Dự án di động",
      alias: "vinhkhang",
      deleted: false,
    },

    {
      members: [
        {
          userId: 827,
          name: "Bosch",
          avatar: "https://ui-avatars.com/api/?name=Bosch",
        },
        {
          userId: 1024,
          name: "zoro",
          avatar: "https://ui-avatars.com/api/?name=zoro",
        },
        {
          userId: 850,
          name: "AnhHoang",
          avatar: "https://ui-avatars.com/api/?name=AnhHoang",
        },
        {
          userId: 862,
          name: "Trần Vinh",
          avatar: "https://ui-avatars.com/api/?name=Trần Vinh",
        },
      ],
      creator: {
        id: 2697,
        name: "vu van tai",
      },
      id: 8489,
      projectName: "dung xoa cua minh",
      description: "dung xoa cua minh",
      categoryId: 3,
      categoryName: "Dự án di động",
      alias: "dung-xoa-cua-minh",
      deleted: false,
    },

    {
      members: [],
      creator: {
        id: 2878,
        name: "string",
      },
      id: 8490,
      projectName: "NotePRoject",
      description: "<p>Note</p>",
      categoryId: 1,
      categoryName: "Dự án web",
      alias: "noteproject",
      deleted: false,
    },

    {
      members: [
        {
          userId: 850,
          name: "AnhHoang",
          avatar: "https://ui-avatars.com/api/?name=AnhHoang",
        },
      ],
      creator: {
        id: 2907,
        name: "Hoang Anh Vu",
      },
      id: 8492,
      projectName: "aaaaaaaaaaaaaaaa",
      description: "<p>aaaaaaaaaaaaaaaaa</p>",
      categoryId: 1,
      categoryName: "Dự án web",
      alias: "aaaaaaaaaaaaaaaa",
      deleted: false,
    },

    {
      members: [
        {
          userId: 2780,
          name: "batman",
          avatar: "https://ui-avatars.com/api/?name=batman",
        },
        {
          userId: 2707,
          name: "Ultra Man",
          avatar: "https://ui-avatars.com/api/?name=Ultra Man",
        },
        {
          userId: 2885,
          name: "Mega Man",
          avatar: "https://ui-avatars.com/api/?name=Mega Man",
        },
        {
          userId: 2787,
          name: "ironman",
          avatar: "https://ui-avatars.com/api/?name=ironman",
        },
      ],
      creator: {
        id: 2885,
        name: "Mega Man",
      },
      id: 8493,
      projectName: "Jira Clone",
      description:
        '<p>Welcome to the Next.js documentation!</p>\n<p>If you\'re new to Next.js, we recommend starting with the&nbsp;<a class="relative" href="https://nextjs.org/learn/basics/create-nextjs-app">learn course</a>.</p>\n<p>The interactive course with quizzes will guide you through everything you need to know to use Next.js.</p>\n<p>If you have questions about anything related to Next.js, you\'re always welcome to ask our community on&nbsp;<a class="absolute" href="https://github.com/vercel/next.js/discussions" target="_blank" rel="noopener noreferrer">GitHub Discussions</a>.</p>\n<h4 class="heading"><span id="system-requirements"></span><a href="https://nextjs.org/docs/getting-started#system-requirements">System Requirements</a></h4>\n<ul>\n<li><a class="absolute" href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js 12.22.0</a>&nbsp;or later</li>\n<li>MacOS, Windows (including WSL), and Linux are supported</li>\n</ul>\n<h2 class="heading">&nbsp;</h2>',
      categoryId: 1,
      categoryName: "Dự án web",
      alias: "jira-clone",
      deleted: false,
    },

    {
      members: [],
      creator: {
        id: 2701,
        name: "DatVu",
      },
      id: 8494,
      projectName: "DDD",
      description: "",
      categoryId: 2,
      categoryName: "Dự án phần mềm",
      alias: "ddd",
      deleted: false,
    },

    {
      members: [],
      creator: {
        id: 2701,
        name: "DatVu",
      },
      id: 8495,
      projectName: "Jira  Testaaa",
      description: "",
      categoryId: 2,
      categoryName: "Dự án phần mềm",
      alias: "jira-testaaa",
      deleted: false,
    },

    {
      members: [
        {
          userId: 2507,
          name: "Hoài Thanh",
          avatar: "https://ui-avatars.com/api/?name=Hoài Thanh",
        },
        {
          userId: 2862,
          name: "Thanh Nam Vo",
          avatar: "https://ui-avatars.com/api/?name=Thanh Nam Vo",
        },
        {
          userId: 2345,
          name: "tranthaihoa",
          avatar: "https://ui-avatars.com/api/?name=tranthaihoa",
        },
        {
          userId: 2420,
          name: "Trần Quốc Bảo",
          avatar: "https://ui-avatars.com/api/?name=Trần Quốc Bảo",
        },
      ],
      creator: {
        id: 2627,
        name: "Hạnh",
      },
      id: 8496,
      projectName: "Hanh cho dien",
      description: "",
      categoryId: 1,
      categoryName: "Dự án web",
      alias: "hanh-cho-dien",
      deleted: false,
    },

    {
      members: [],
      creator: {
        id: 2885,
        name: "Mega Man",
      },
      id: 8497,
      projectName: "8494",
      description: "<p>Project 8494</p>",
      categoryId: 1,
      categoryName: "Dự án web",
      alias: "8494",
      deleted: false,
    },

    {
      members: [
        {
          userId: 850,
          name: "AnhHoang",
          avatar: "https://ui-avatars.com/api/?name=AnhHoang",
        },
        {
          userId: 2309,
          name: "Wayne Lee",
          avatar: "https://ui-avatars.com/api/?name=Wayne Lee",
        },
        {
          userId: 2304,
          name: "Elvis",
          avatar: "https://ui-avatars.com/api/?name=Elvis",
        },
        {
          userId: 2316,
          name: "aa",
          avatar: "https://ui-avatars.com/api/?name=aa",
        },
      ],
      creator: {
        id: 2901,
        name: "kaitokid",
      },
      id: 8498,
      projectName: "adadadaa2",
      description: "dqdqd",
      categoryId: 1,
      categoryName: "Dự án web",
      alias: "adadadaa2",
      deleted: false,
    },

    {
      members: [],
      creator: {
        id: 2885,
        name: "Mega Man",
      },
      id: 8499,
      projectName: "Jira Project",
      description: "",
      categoryId: 3,
      categoryName: "Dự án di động",
      alias: "jira-project",
      deleted: false,
    },

    {
      members: [
        {
          userId: 2417,
          name: "HQD",
          avatar: "https://ui-avatars.com/api/?name=HQD",
        },
        {
          userId: 2419,
          name: "QD",
          avatar: "https://ui-avatars.com/api/?name=QD",
        },
        {
          userId: 2389,
          name: "khaitruong",
          avatar: "https://ui-avatars.com/api/?name=khaitruong",
        },
      ],
      creator: {
        id: 2417,
        name: "HQD",
      },
      id: 8500,
      projectName: "New Project",
      description:
        '<h3><span style="background-color: #b96ad9;"><strong><em>Demo new project</em></strong></span></h3>',
      categoryId: 1,
      categoryName: "Dự án web",
      alias: "new-project",
      deleted: false,
    },

    {
      members: [
        {
          userId: 850,
          name: "AnhHoang",
          avatar: "https://ui-avatars.com/api/?name=AnhHoang",
        },
        {
          userId: 2309,
          name: "Wayne Lee",
          avatar: "https://ui-avatars.com/api/?name=Wayne Lee",
        },
        {
          userId: 2303,
          name: "dandan123",
          avatar: "https://ui-avatars.com/api/?name=dandan123",
        },
      ],
      creator: {
        id: 2901,
        name: "kaitokid",
      },
      id: 8501,
      projectName: "đừng xóa của mình abc",
      description: "adadad",
      categoryId: 1,
      categoryName: "Dự án web",
      alias: "dung-xoa-cua-minh-abc",
      deleted: false,
    },
  ];

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
            <Button className="btn mr-2 btn-primary">
              <FormOutlined style={{ fontSize: 17 }} />
            </Button>
            <Button className="btn btn-danger">
              <DeleteOutlined style={{ fontSize: 17 }} />
            </Button>
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
        rowKey={"id"}
        dataSource={data}
        pagination={tableParams.pagination}
        loading={false}
        onChange={handleTableChange}
        tableLayout={"auto"}
        scroll={{y: 540}}
      />
    </div>
  );
}
