import Image from "next/image";
import { Locales } from "@/types/locale.types";
import { useLocale } from "next-intl";

const Footer = () => {
  const locale = useLocale();
  return (
    <div className="h-16 bg-design-blue flex justify-between items-center p-4 md:px-24">
      {locale === Locales.ar ? (
        <Image src={"/svgs/logo-ar.svg"} alt="logo" width={94} height={26} />
      ) : (
        <Image src={"svgs/logo-en.svg"} alt="logo" width={94} height={26} />
      )}
      <p>جميع الحقوق محفوظة 2025</p>
    </div>
  );
};

export default Footer;
