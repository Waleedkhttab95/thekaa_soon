"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/form";
import { Input } from "@/components/atoms/input";
import { Button } from "../atoms/button.component";
import Image from "next/image";

const formSchema = z.object({
  name: z.string().min(1, "الاسم مطلوب"),
  email: z.string().email("البريد الإلكتروني غير صالح"),
});

export default function SectionTwoForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="flex-col-center justify-evenly bg-design-pink w-full md:w-10/12 max-w-[1200px] h-[585px] rounded-[40px] py-16 relative overflow-hidden z-10">
      <Image
        className="absolute top-[-100px] start-[-100px] "
        src={"/svgs/transparent-sm-logo.svg"}
        alt="logo"
        width={350}
        height={350}
      />
      <Image
        className="absolute bottom-[-50px] end-[-160px] "
        src={"/svgs/transparent-sm-logo.svg"}
        alt="logo"
        width={350}
        height={350}
      />
      <div className="flex-col-center gap-y-5">
        <h2 className="font-bold text-center text-2xl md:text-4xl">
          هنا شيئ جديد يلوح في الأفق…{" "}
        </h2>
        <p className="text-center text-xl md:text-3xl">
          احجز مقعدك وانتظرنـــــــــا
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-11/12 md:w-6/12 flex flex-col gap-y-7 mt-10 z-50"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الاسم</FormLabel>
                <FormControl>
                  <Input placeholder="ادخل الاسم" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>البريد الالكتروني</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="ادخل عنوان بريدك الالكتروني"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            ارسال
          </Button>
        </form>
      </Form>
    </div>
  );
}
