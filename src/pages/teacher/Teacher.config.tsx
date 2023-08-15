import { ColumnsType } from "antd/es/table";

interface DataType {
    name: string,
    gender: string;
    email: string;
  }

export const columns: ColumnsType<DataType> = [
    {
      title: 'Role Name',
      dataIndex: 'roleName',
      key: 'roleName',
      sorter: true,
      width: '20%',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: '20%',
    },
  ];