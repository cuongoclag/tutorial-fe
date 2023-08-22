import { useState } from "react";
import CustomTable from "../../shared/customTable";
import { columns } from "./Teacher.config";
import requestApi from "../../helpers/api";
import { RequestMethods } from "../../enums/RequestMethod.enum";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CustomModal from "../../shared/customModal/customModal";
import CreateTeacher from "./Create-teacher";
import { checkField, checkOrder, roleId } from "../../helpers/contants";

const Teacher = () => {
  const [isOpenCreate, setIsOpenCreate] = useState(false)
  const [isReload, setIsReload] = useState(false)
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10
    },
    order: '',
    field: ''
  });

  const getData = async () => {
    const res = await requestApi("/auth/users", RequestMethods.POST, {
      current: tableParams.pagination.current,
      pageSize: tableParams.pagination.pageSize,
      order: checkOrder(tableParams.order),
      field: checkField(tableParams.field),
      role: roleId.TEACHER
    });
  
    return {
      data: res.data.data,
      pagination: res.data.pagination,
      sort: res.data.sort
    };
  };

  return (
    <div>
      <Button type="primary" size="large" className="mb-2" onClick={() => setIsOpenCreate(true)}>
        <PlusOutlined />
        Thêm giáo viên
      </Button>
      <CustomTable
        tableParams={tableParams}
        setTableParams={setTableParams}
        columns={columns}
        getData={getData}
        reload={isReload}
      />
      <CustomModal
        title="Thêm giáo viên"
        open={isOpenCreate}
        content={<CreateTeacher setIsOpenCreate={setIsOpenCreate} setIsReload={setIsReload}/>}
        onCancel={() => setIsOpenCreate(false)}
        width={1000}
        footer={null}
      />
    </div>
  );
};

export default Teacher;
