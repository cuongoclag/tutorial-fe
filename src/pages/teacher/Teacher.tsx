import { useState } from "react";
import CustomTable from "../../shared/customTable";
import { columns } from "./Teacher.config";
import requestApi from "../../helpers/api";
import { RequestMethods } from "../../enums/RequestMethod.enum";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CustomModal from "../../shared/customModal/customModal";
import CreateTeacher from "./Create-teacher";

const Teacher = () => {
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const getData = async () => {
    const res = await requestApi("/roles", RequestMethods.GET);
    return {
      data: res.data,
      pagination: tableParams,
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
      />
      <CustomModal
        title="Thêm giáo viên"
        open={isOpenCreate}
        content={<CreateTeacher setIsOpenCreate={setIsOpenCreate}/>}
        width={1000}
        footer={null}
      />
    </div>
  );
};

export default Teacher;
