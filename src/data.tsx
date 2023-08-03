import {
  AppstoreOutlined,
  UserOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

export const menu:MenuProps['items'] = [
    {
      key: '1',
      label: 'Trang chủ',
      icon: <AppstoreOutlined />
    },
    {
      key: '2',
      label: 'Giáo viên',
      icon: <UserOutlined />

    },
    {
      key: '3',
      label: 'Học sinh',
      icon: <TeamOutlined />
    }
];
