import { Button, Input } from "antd";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { useRegisterMutation } from "../../redux/features/auth/authApi";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import backVideo from "../../../public/video.mp4";

const Register = () => {
  const { control, handleSubmit } = useForm();
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Registration Processing...!");
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      await register(userInfo).unwrap();
      toast.success("Registration Successful", { id: toastId, duration: 2000 });
      navigate("/login");
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="h-screen relative overflow-hidden m-0 p-0 w-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0 brightness-50"
        src={backVideo}
      />

      <div className="relative z-10 flex flex-col text-white justify-center items-center h-full w-full brightness-100">
        <h1 className=" text-center text-md text-white">
          Please Create Account Here !
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" space-y-6 md:w-1/3 w-1/2 "
        >
          {/* Use Controller to register and control the inputs */}
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input {...field} placeholder="Enter User Name..." size="large" />
            )}
          />
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
          {/* Use Button type="submit" to submit the form */}
          <Button
            size="large"
            className=" w-full bg-blue-600 text-white border-none py-1 font-bold"
            htmlType="submit"
          >
            Sign Up
          </Button>
          <h1 className="text-lg">
            Already have an account?{" "}
            <Link to={"/login"} className=" text-blue-500">
              <span>Sing In</span>
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Register;
