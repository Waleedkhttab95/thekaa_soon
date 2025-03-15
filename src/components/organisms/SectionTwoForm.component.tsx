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
import { useState, useRef, useEffect } from "react";

// Extend Window interface to include our custom property
declare global {
  interface Window {
    sectionTwoFormRef: HTMLDivElement | null;
  }
}

const formSchema = z.object({
  name: z.string().min(1, "الاسم مطلوب"),
  email: z.string().email("البريد الإلكتروني غير صالح"),
});

export default function SectionTwoForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionTwoFormRef = useRef<HTMLDivElement>(null);

  // Make the form ref accessible globally for the Header component
  useEffect(() => {
    if (sectionTwoFormRef.current) {
      window.sectionTwoFormRef = sectionTwoFormRef.current;
    }
  }, []);

  // Add animation when the component is visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionTwoFormRef.current) {
      observer.observe(sectionTwoFormRef.current);
    }

    return () => {
      // Store the ref value in a variable to avoid the exhaustive-deps warning
      const currentRef = sectionTwoFormRef.current;
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    fetch('http://dev.thekaa.io/notifications/subscribe', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        name: values.name,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div
      className={`flex-col-center justify-evenly bg-design-pink w-full md:w-10/12 max-w-[1200px] h-[585px] rounded-[40px] py-16 relative overflow-hidden z-10 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      ref={sectionTwoFormRef}
    >
      <Image
        className={`absolute top-[-100px] start-[-100px] transition-all duration-700 ${
          isVisible ? "opacity-100 rotate-0" : "opacity-0 -rotate-12"
        }`}
        src={"/svgs/transparent-sm-logo.svg"}
        alt="logo"
        width={350}
        height={350}
      />
      <Image
        className={`absolute bottom-[-50px] end-[-160px] transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 rotate-0" : "opacity-0 rotate-12"
        }`}
        src={"/svgs/transparent-sm-logo.svg"}
        alt="logo"
        width={350}
        height={350}
      />
      <div className={`flex-col-center gap-y-5 transition-all duration-700 delay-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <h2 className="font-bold text-center text-2xl md:text-4xl">
          هنا شيئ جديد يلوح في الأفق…{" "}
        </h2>
        <p className="text-center text-xl md:text-3xl">
          احجز مقعدك وانتظرنـــــــــا
        </p>
      </div>
      
      {isSubmitted ? (
        <div className="animate-fade-in-up flex-col-center p-8 bg-white/60 rounded-lg">
          <h3 className="text-2xl font-bold mb-2">شكراً لك!</h3>
          <p className="text-center">تم تسجيلك بنجاح، سنتواصل معك قريباً.</p>
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={`w-11/12 md:w-6/12 flex flex-col gap-y-7 mt-10 z-50 transition-all duration-700 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="transition-all duration-300 hover:scale-[1.02]">
                  <FormLabel>الاسم</FormLabel>
                  <FormControl>
                    <Input placeholder="ادخل الاسم" {...field} className="shadow-sm focus:ring-2 focus:ring-pink-200 transition-all duration-300" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="transition-all duration-300 hover:scale-[1.02]">
                  <FormLabel>البريد الالكتروني</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="ادخل عنوان بريدك الالكتروني"
                      {...field}
                      className="shadow-sm focus:ring-2 focus:ring-pink-200 transition-all duration-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="submit" 
              className="w-full transition-all duration-300 hover:bg-pink-500 hover:scale-[1.02] active:scale-95 shadow-md"
            >
              ارسال
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
}
