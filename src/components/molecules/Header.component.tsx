import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "../atoms/button.component";
import { Locales } from "@/types/locale.types";

const Header = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  return (
    <div className="flex justify-between items-center w-full px-6 py-3 rounded-[40px] border border-[#231F20]">
      {locale === Locales.ar ? (
        <Image src={"/svgs/logo-ar.svg"} alt="logo" width={94} height={26} />
      ) : (
        <Image src={"svgs/logo-en.svg"} alt="logo" width={94} height={26} />
      )}
      <Image
        className="md:hidden"
        src={"svgs/sm-logo.svg"}
        alt="logo"
        width={35}
        height={35}
      />
      <Button className="hidden md:block">{t("join-us")}</Button>
    </div>
  );
};
export default Header;
