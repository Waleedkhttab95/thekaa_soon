"use client";

import { useLocale, useTranslations } from "next-intl";

import { Locales } from "../../types/locale.types";
import { useTransition } from "react";
import { setUserLocale } from "@/i18n/locale";
import { cn } from "@/lib/utils";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const otherLocale = locale === Locales.en ? Locales.ar : Locales.en;
  const textmb = locale === Locales.en ? "mb-1" : "mb-0";

  const ButtonClasses = `flex  md:w-[140px] w-[70px] h-[45px]  justify-center items-center  py-1 bg-white bg-opacity-50 rounded-full gap-2 text-black-500 border-white border-[1px] shadow-inner hover:bg-opacity-70 transition`;
  const textClasses = "font-ibm font-medium text-lg ";

  const changeLocale = (value: string) => {
    const locale = value as Locales;
    startTransition(() => {
      setUserLocale(locale);
    });
  };
  return (
    <button
      className={ButtonClasses}
      onClick={() => changeLocale(otherLocale)}
      disabled={isPending}
    >
      <span className={cn(textClasses, "hidden md:inline", textmb)}>
        {t("switchLocale")}
      </span>
      <span className={cn(textClasses, "md:hidden", textmb)}>
        {t("switchLocale-sm")}
      </span>
      <LanguageICon />
    </button>
  );
}

const LanguageICon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    className="w-[22px] h-[22px]"
  >
    <path
      d="M11.25 6C11.25 5.58579 10.9142 5.25 10.5 5.25C10.0858 5.25 9.75 5.58579 9.75 6V6.62931H6C5.58579 6.62931 5.25 6.9651 5.25 7.37931C5.25 7.79352 5.58579 8.12931 6 8.12931H12.4571C12.0108 9.26546 11.3554 10.3675 10.5931 11.4048C10.4498 11.2188 10.3064 11.0269 10.1708 10.8389C9.83277 10.3701 9.58228 9.97865 9.48693 9.77408C9.31195 9.39864 8.86575 9.23614 8.49031 9.41112C8.11487 9.5861 7.95237 10.0323 8.12735 10.4077C8.28915 10.7549 8.61723 11.249 8.95417 11.7163C9.17079 12.0167 9.40691 12.3276 9.6354 12.6145C8.72949 13.6835 7.76185 14.6418 6.8852 15.4479C6.5803 15.7283 6.56041 16.2028 6.84078 16.5077C7.12115 16.8126 7.59561 16.8324 7.90051 16.5521C8.76369 15.7583 9.72743 14.8081 10.6473 13.7394L11.9952 15.1406C12.2823 15.4391 12.7571 15.4484 13.0557 15.1612C13.3542 14.8741 13.3634 14.3993 13.0762 14.1008L11.5989 12.5649C12.6127 11.229 13.5141 9.73013 14.0533 8.12931H16C16.4142 8.12931 16.75 7.79352 16.75 7.37931C16.75 6.9651 16.4142 6.62931 16 6.62931L11.25 6.62931V6Z"
      fill="#231F20"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25ZM1.75 11C1.75 5.89137 5.89137 1.75 11 1.75C16.1086 1.75 20.25 5.89137 20.25 11C20.25 16.1086 16.1086 20.25 11 20.25C5.89137 20.25 1.75 16.1086 1.75 11Z"
      fill="#231F20"
    />
  </svg>
);
