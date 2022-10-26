import { Button, Drawer, Space } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  OPEN_MODAL,
  HIDE_MODAL,
} from "../../redux/constants/JiraModalConstants/JiraModalConstants";
export default function JiraModal(props) {
  const {visible, ComponentModal} = useSelector((state) => state.ModalJiraReducer);

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
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={visible}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
        
      >
        {ComponentModal}
      </Drawer>
    </>
  );
}
