import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";
import {
  signUpFailure,
  signUpStart,
  signUpSuccess,
} from "@/Redux/User/userSlics";
import { toast } from "sonner";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { FormSchema } from "@/validation/validation";
import { useNavigate } from "react-router-dom";

export function Otp() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { currentUser, loading } = useSelector(
    (state: RootState) => state.user
  );

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      otp: "",
    },
  });


  async function onSubmit(data: z.infer<typeof FormSchema>) {
  
    try {
      dispatch(signUpStart());
      const response = await axios.post(`/auth/otp`, {
        otp: data.otp,
        id: currentUser?.id,
        role: currentUser?.role,
      });
      dispatch(signUpSuccess(response.data));
     
      console.log(response.data.user.role);
       if(response.data.user.role === "User"){

      navigate("/");}
      else{
        navigate("/dashboard")
      }
    } catch (err: any) {
      if (err) {
        toast(err.response.data.message);
        dispatch(signUpFailure());
      }
    }
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-2 rounded-2xl p-12">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="text-center space-y-6"
          >
            <div className="flex justify-center ">
              <img src="icons8-open-email-100.png" alt="email icon" />
            </div>
            <h1 className="text-4xl flex justify-center font-mono font-semibold mb-3">
              Verification
            </h1>
            <p className="mb-5 font-medium font-serif">
              Please enter the One Time Password sent to your email.
            </p>
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem className=" w-fit mx-auto">
                  <FormControl>
                    <InputOTP
                      maxLength={4}
                      render={({ slots }) => (
                        <InputOTPGroup className="flex justify-center gap-5">
                          {slots.map((slot, index) => (
                            <InputOTPSlot
                              key={index}
                              className="rounded-lg border w-16 h-16 font-semibold text-xl bg-slate-200  "
                              {...slot}
                            />
                          ))}
                        </InputOTPGroup>
                      )}
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="p-6 w-80 text-lg">
  {loading ? <span className="loader "></span> : "Submit"}
</Button>

          </form>
        </Form>
      </div>
    </div>
  );
}
