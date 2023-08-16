import {
  AppstoreOutlined,
  UserOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

export const AdminMenu:MenuProps['items'] = [
    {
      key: '/',
      label: 'Trang chủ',
      icon: <AppstoreOutlined />
    },
    {
      key: '/teacher',
      label: 'Giáo viên',
      icon: <UserOutlined />
    },
    {
      key: '/student',
      label: 'Học sinh',
      icon: <TeamOutlined />
    }
];
