import { Modal } from "antd";

interface IProps {
  title?: string;
  open?: boolean;
  onOk?: any;
  onCancel?: any;
  content?: any;
  width?: number | string;
  footer?: any
}
const CustomModal = (props: IProps) => {
  const { title, open, onOk, onCancel, content, width, footer } = props;
  return (
    <Modal
      title={title}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      width={width}
      footer={footer}
      destroyOnClose={true}
      maskClosable={false}
    >
      {content}
    </Modal>
  );
};

export default CustomModal;
