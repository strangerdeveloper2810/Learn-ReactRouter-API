import { Button, Drawer, Space } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  OPEN_MODAL,
  HIDE_MODAL,
} from "../../redux/constants/Jira/JiraModalConstants/JiraModalConstants";
const JiraModal = (props) => {
  const { visible, ComponentModal, callBackSubmit } = useSelector(
    (state) => state.ModalJiraReducer
  );

  const dispatch = useDispatch();

  const showDrawer = () => {
    dispatch({
      type: OPEN_MODAL,
    });
  };

  const onClose = () => {
    dispatch({
      type: HIDE_MODAL,
    });
  };

  return (
    <>
      <Drawer
        title="Edit Project"
        width={720}
        onClose={onClose}
        open={visible}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={callBackSubmit} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        {ComponentModal}
      </Drawer>
    </>
  );
};

export default React.memo(JiraModal);
