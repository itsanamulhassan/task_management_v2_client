import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import SectionWrapper from "@/components/common/wrapper/section-wrapper";
import { InputWrapper } from "@/components/common/wrapper/input-wrapper";
import { LucideEye, LucideEyeOff } from "lucide-react";
import { useState } from "react";
import { loginSchema, type LoginData } from "@/schemas/public/authentication";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Link } from "react-router";
import PageTransition from "@/components/common/effect/page-transition";
const SignIn = ({ className, ...props }: React.ComponentProps<"div">) => {
  const [visible, setVisible] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginData) => {
    toast("Event has been created.");
  };
  return (
    <PageTransition>
      <SectionWrapper>
        <div className={cn("flex flex-col gap-6 w-2/6", className)} {...props}>
          <Card>
            <CardHeader>
              <CardTitle>Sign in your account</CardTitle>
              <CardDescription>
                Enter your email below to sign in your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-y-2">
                  <div className="grid gap-3">
                    <InputWrapper
                      label="Email"
                      labelFor="email"
                      error={errors.email?.message}
                    >
                      <Input
                        {...register("email")}
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                      />
                    </InputWrapper>
                  </div>
                  <div className="grid gap-3">
                    <InputWrapper
                      error={errors.password?.message}
                      labelFor="password"
                      label="Password"
                    >
                      <div className="relative">
                        <Input
                          id="password"
                          {...register("password")}
                          type={visible ? "text" : "password"}
                          placeholder="Enter the password"
                        />

                        <button
                          type="button"
                          className="text-lg absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer whitespace-nowrap rounded-md p-1 hover:bg-muted"
                          onClick={() => setVisible(!visible)}
                        >
                          {visible ? (
                            <LucideEye className="h-5 w-5" />
                          ) : (
                            <LucideEyeOff className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </InputWrapper>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button type="submit" className="w-full">
                      Login
                    </Button>
                  </div>
                </div>
                <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link className="underline underline-offset-4" to="/signup">
                    Sign up
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>
    </PageTransition>
  );
};

export default SignIn;
