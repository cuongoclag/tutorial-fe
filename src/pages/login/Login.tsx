import { Form, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import ErrorMessage from "../../shared/errorMessage";

const schema = yup.object({
  email: yup.string().required('Vui lòng nhập email').email('Email chưa đúng định dạng'),
  password: yup.string().min(6, 'Mật khẩu có ít nhất 6 ký tự').required('Vui lòng nhập mật khẩu'),
}).required();
type FormData = yup.InferType<typeof schema>;
const Login = () => {

  const { handleSubmit, control, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: any) => console.log(data);
  return (
    <div className="w-3/12 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
      <h1>Đăng Nhập</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Item className="label">Email</Form.Item>
        <div className="input">
          <Controller
            name="email"
            control={control}
            rules={{ required: true, }}
            render={({ field: { onChange, value } }) => <Input placeholder="Email" value={value} onChange={(e) => onChange(e)}/>}
          />
          {errors.email?.message && <ErrorMessage error={errors.email?.message} />}
        </div>

        <Form.Item className="label">Mật khẩu</Form.Item>
        <div className="input">
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => <Input placeholder="Mật khẩu" value={value} onChange={(e) => onChange(e)}/>}
          />
          {errors.password?.message && <ErrorMessage error={errors.password?.message} />}
        </div>

        <input type="submit" className="w-full rounded-sm h-[40px] px-[15px] mt-5 leading-[40px] bg-second-color shadow-lg shadow-blue-500/50 border-none text-white cursor-pointer"/>
      </form>
    </div>
  );
};

export default Login;
