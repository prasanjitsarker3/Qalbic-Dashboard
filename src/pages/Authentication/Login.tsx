import { Button, Input } from "antd";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hook";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../../Utlis/verifyToken";
import { setUser, TUser } from "../../redux/features/auth/authSlice";

const Login = () => {
  const { control, handleSubmit } = useForm();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Login processing...");
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data?.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data?.accessToken }));

      console.log(user);
      if (res?.statusCode === 201) {
        toast.success(res?.message, { id: toastId, duration: 1000 });
        navigate(`/${user.role}/dashboard`);
      } else {
        toast.error(res?.message, { id: toastId, duration: 1000 });
      }
    } catch (err: any) {
      console.log(err.data.message);
      toast.error(err.data.message, { id: toastId, duration: 1000 });
    }
  };

  return (
    <div className="h-[100vh] w-full bg-[#CECFD1]">
      <div className="flex flex-col  justify-center items-center h-full w-full ">
        <div className="  md:w-1/3 w-1/2  bg-white rounded-sm p-10">
          <h1 className=" text-center text-md text-[#141311]">QALBIC</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" space-y-6 flex flex-col  "
          >
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input {...field} placeholder="Enter Email..." size="large" />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input.Password
                  {...field}
                  placeholder="Enter Password..."
                  size="large"
                />
              )}
            />
            <Button
              size="large"
              className=" w-full bg-[#141311] text-white border-none py-1 font-bold"
              htmlType="submit"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
