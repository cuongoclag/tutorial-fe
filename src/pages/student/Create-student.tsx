import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../../shared/errorMessage";
import { Button, DatePicker, Form, Input } from "antd";
import { convertDateTime, roleId } from "../../helpers/contants";
import requestApi from "../../helpers/api";
import { toast } from 'react-toastify';
import { showError } from "../../helpers/handleError";
import { RequestMethods } from "../../enums/RequestMethod.enum";

interface IProps {
  setIsOpenCreate: Function;
  setIsReload: Function
}
const schema = yup.object({
  email: yup
    .string()
    .required("Vui lòng nhập email")
    .email("Email chưa đúng định dạng"),
  password: yup
    .string()
    .min(6, "Mật khẩu có ít nhất 6 ký tự")
    .required("Vui lòng nhập mật khẩu"),
    firstName: yup.string().required("Vui lòng nhập họ"),
    lastName: yup.string().required("Vui lòng nhập tên"),
  phone1: yup.number().required("Vui lòng nhập số điện thoại"),
  phone2: yup.number().notRequired(),
  address: yup.string().required("Vui lòng nhập địa chỉ"),
  dateOfBirth: yup.string().required("Vui lòng nhập ngày sinh"),
});

type FormData = yup.InferType<typeof schema>;

const CreateTeacher = (props: IProps) => {
  const { setIsOpenCreate, setIsReload } = props;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver<FormData>(schema),
  });

  const onSubmit = async (value: any) => {
    try {
      await requestApi('/auth/register', RequestMethods.POST, {
        ...value,
        dateOfBirth: convertDateTime(value.dateOfBirth).UTCTime,
        phone2: value.phone2 ?? 0,
        roleId: roleId.STUDENT
      })
      setIsOpenCreate(false);
      toast.success('Thêm giáo viên thành công')
      setIsReload(true)
    } catch (error: any) {
      showError(error.response.data.description ? error.response : error)
    }
  };

  return (
    <form>
      <div className="flex gap-5">
        <div className="flex-1">
          <Form.Item className="label">Email *</Form.Item>
          <div className="input">
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Email"
                  value={value}
                  onChange={(e) => onChange(e)}
                  className="rounded-lg h-[40px]"
                />
              )}
            />
            {errors.email?.message && (
              <ErrorMessage error={errors.email?.message} />
            )}
          </div>
        </div>

        <div className="flex-1">
          <Form.Item className="label">Mật khẩu *</Form.Item>
          <div className="input">
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Mật khẩu"
                  value={value}
                  onChange={(e) => onChange(e)}
                  className="rounded-lg h-[40px]"
                />
              )}
            />
            {errors.password?.message && (
              <ErrorMessage error={errors.password?.message} />
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="flex-1">
          <Form.Item className="label">Họ *</Form.Item>
          <div className="input">
            <Controller
              name="firstName"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Họ"
                  value={value}
                  onChange={(e) => onChange(e)}
                  className="rounded-lg h-[40px]"
                />
              )}
            />
            {errors.firstName?.message && (
              <ErrorMessage error={errors.firstName?.message} />
            )}
          </div>
        </div>

        <div className="flex-1">
          <Form.Item className="label">Tên *</Form.Item>
          <div className="input">
            <Controller
              name="lastName"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Tên"
                  value={value}
                  onChange={(e) => onChange(e)}
                  className="rounded-lg h-[40px]"
                />
              )}
            />
            {errors.lastName?.message && (
              <ErrorMessage error={errors.lastName?.message} />
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="flex-1">
          <Form.Item className="label">Số điện thoại 1 *</Form.Item>
          <div className="input">
            <Controller
              name="phone1"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Số điện thoại 1"
                  value={value}
                  onChange={(e) => onChange(e)}
                  className="rounded-lg h-[40px]"
                  type="number"
                />
              )}
            />
            {errors.phone1?.message && (
              <ErrorMessage error={errors.phone1?.message} />
            )}
          </div>
        </div>

        <div className="flex-1">
          <Form.Item className="label">Số điện thoại 2</Form.Item>
          <div className="input">
            <Controller
              name="phone2"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Số điện thoại 2"
                  value={value || ""}
                  onChange={(e) => onChange(e)}
                  className="rounded-lg h-[40px]"
                  type="number"
                />
              )}
            />
            {errors.phone2?.message && (
              <ErrorMessage error={errors.phone2?.message} />
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="flex-1">
          <Form.Item className="label">Địa chỉ *</Form.Item>
          <div className="input">
            <Controller
              name="address"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Địa chỉ"
                  value={value}
                  onChange={(e) => onChange(e)}
                  className="rounded-lg h-[40px]"
                />
              )}
            />
            {errors.address?.message && (
              <ErrorMessage error={errors.address?.message} />
            )}
          </div>
        </div>

        <div className="flex-1">
          <Form.Item className="label">Ngày sinh *</Form.Item>
          <div className="input">
            <Controller
              name="dateOfBirth"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  onChange={(e) => onChange(e)}
                  className="rounded-lg h-[40px] w-full"
                />
              )}
            />
            {errors.dateOfBirth?.message && (
              <ErrorMessage error={errors.dateOfBirth?.message} />
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center gap-5">
        <Button
          className="h-[40px] w-[100px]"
          onClick={() => setIsOpenCreate(false)}
        >
          Hủy
        </Button>

        <Button
          type="primary"
          className="h-[40px] w-[100px]"
          onClick={handleSubmit(onSubmit)}
        >
          OK
        </Button>
      </div>
    </form>
  );
};

export default CreateTeacher;
