import { useCallback, useEffect, useState } from "react";
import CustomTable from "../../shared/customTable"
import { columns } from "./Teacher.config";
import requestApi from "../../helpers/api";
import { RequestMethods } from "../../enums/RequestMethod.enum";

const Teacher = () => {
    const [tableParams, setTableParams] = useState({
        pagination: {
          current: 1,
          pageSize: 10,
        }
    });

    const getData = async () => {
        const res = await requestApi('/roles', RequestMethods.GET)
        return {
          data: res.data,
          pagination: tableParams
        }
      }
    
    
  return (
    <div>
      <CustomTable tableParams={tableParams} setTableParams={setTableParams} columns={columns} getData={getData}/>
    </div>
  )
}

export default Teacher
