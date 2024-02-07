import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { headerLogo } from "@/assets/images";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Define a submit handler.
  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="flex w-full m-auto items-center justify-center     overflow-hidden h-screen p-4 rounded-xl  shadow-lg">
      <div
        className="hidden w-full h-full bg-cover bg-center sm:block rounded-xl"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1562183241-b937e95585b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2VzfGVufDB8fDB8fHww')",
        }}
      ></div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <Form {...form}>
          <div className="flex justify-center mx-auto w-full ">
            <img className="w-full h-14 sm:h-10" src={headerLogo} alt="" />
          </div>

          <p className="text-xl text-center text-red-400 font-bold mt-4">
            Welcome To Super Shoe Store
          </p>

          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 flex flex-col justify-center  w-full px-4  "
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Login</Button>
          </form>
        </Form>
        <div className="mt-3 flex flex-row">
          <Link to={"/register"} className="text-md text-gray-500  ">
            Create New Account?{" "}
            <span className="hover:underline uppercase text-red-400">
              Sign Up
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
