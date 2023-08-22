import { TeamOutlined, UserOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"
import requestApi from "../../helpers/api"
import { RequestMethods } from "../../enums/RequestMethod.enum"
import { roleId } from "../../helpers/contants"

const Home = () => {

  const [countTeacher, setCountTeacher] = useState(0)
  const [countStudent, setCountStudent] = useState(0)

  useEffect(() => {
    requestApi(`/auth/count/${roleId.TEACHER}`, RequestMethods.GET).then((res) => setCountTeacher(res.data)).catch((err) => console.log(err))
    requestApi(`/auth/count/${roleId.STUDENT}`, RequestMethods.GET).then((res) => setCountStudent(res.data)).catch((err) => console.log(err))
  }, [])
  
  return (
    <div className="flex gap-6 justify-start">
      <div className="flex items-center justify-between bg-white rounded-xl lg:w-1/4 md:w-1/2 px-4 py-6">
        <div>
          <p className="text-[#8c8c8c] font-bold text-sm my-0">Giáo viên</p>
          <h3 className="text-[30px] font-bold my-0">{countTeacher}</h3>
        </div>
        <div className="bg-second-color p-4 rounded-xl">
        <UserOutlined style={{ fontSize: '150%', color: '#FFF'}} />

        </div>
      </div>

      <div className="flex items-center justify-between bg-white rounded-xl lg:w-1/4 md:w-1/2 px-4 py-6">
        <div>
          <p className="text-[#8c8c8c] font-bold text-sm my-0">Học sinh</p>
          <h3 className="text-[30px] font-bold my-0">{countStudent}</h3>
        </div>
        <div className="bg-second-color p-4 rounded-xl">
        <TeamOutlined style={{ fontSize: '150%', color: '#FFF'}} />

        </div>
      </div>
    </div>
  )
}

export default Home
