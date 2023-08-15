import React, { useEffect, useState } from 'react';
// import qs from 'qs';
import { Table } from 'antd';
import type { TablePaginationConfig } from 'antd/es/table';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';

interface IProps {
  tableParams: any,
  columns?: any,
  setTableParams: Function,
  getData: Function
};

interface DataType {
  name: string,
  gender: string;
  email: string;
}

const CustomTable = (props:IProps) => {
  const { tableParams, columns, setTableParams, getData } = props
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const fetchData = () => {
    setLoading(true)
    getData().then((res: any) => {
      setData(res.data);
      setLoading(false)
    })
  };

  useEffect(() => {
    fetchData()
  }, [tableParams])

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<DataType> | SorterResult<DataType>[]
  ) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <Table
      columns={columns}
      rowKey="id"
      dataSource={data}
      // pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};

export default CustomTable;