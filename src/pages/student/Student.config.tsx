import { ColumnsType } from "antd/es/table";
import { convertDateTime } from "../../helpers/contants";

interface DataType {
    name: string,
    gender: string;
    email: string;
  }

export const columns: ColumnsType<DataType> = [
  {
    title: 'Họ',
    dataIndex: 'firstName',
    key: 'firstName',
    width: '20%',
  },
  {
    title: 'Tên',
    dataIndex: 'lastName',
    key: 'lastName',
    sorter: true,
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    sorter: true,
    width: '20%',
  },
  {
    title: 'Ngày sinh',
    dataIndex: 'dateOfBirth',
    key: 'dateOfBirth',
    width: '20%',
    render: (birthday) => convertDateTime(birthday).date
  },
  {
    title: 'SDT',
    dataIndex: 'phone1',
    key: 'phone1',
    width: '20%',
    render: (phone1) => `0${phone1}`
  },
  {
    title: 'SDT 2',
    dataIndex: 'phone2',
    key: 'phone2',
    width: '20%',
    render: (phone2) => `0${phone2}`
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    key: 'address',
    width: '20%',
  },
  ];