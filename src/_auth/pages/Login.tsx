import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useLoginDoctor } from "../../lib/react-query/quries-mutations";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { mutateAsync: loginDoctor, isPending: isLoading } = useLoginDoctor();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClick = async () => {
    console.log(formData);
    try {
      const response = await loginDoctor(formData);
      if (response?.status === 200) {
        console.log("Navigate to dashboard");
        window.location.href = "/";
      }
    } catch (error: any) {
      console.log(error);
      if (error?.response?.data?.errors) {
        error?.response?.data?.errors.forEach((err: any) => {
          toast.error(err.message);
        });
      } else {
        toast.error(error?.response.data.message);
      }
    }
  };

  return (
    <div className="w-full lg:grid  lg:grid-cols-2 min-h-screen">
      <h1 className="text-sm  text-center py-4 opacity-55 absolute left-4">
        The backend of this application is deployed on render for free so it
        will take initially 60sec to start
      </h1>
      <div className="flex items-center justify-center py-20">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Input
                id="password"
                type="password"
                required
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <Button
              className="w-full"
              onClick={handleClick}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Login"}
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src="https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=1380&t=st=1721053221~exp=1721053821~hmac=464313cbfc0368c1ee6fb6359009e864ca4fb0229a303e61d536971781abd7a0"
          alt="Image"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
