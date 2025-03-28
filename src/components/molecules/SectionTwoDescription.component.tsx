import { Button } from "../atoms/button.component";
import Image from "next/image";
import Link from "next/link";

const SectionTwoDescription = () => {
  return (
    <>
      <div className="flex-col-center">
        <Button
          variant={"transpirentColored"}
          className="w-40 h-9 small-button-text-gradient-custom text-lg border-white"
        >
          تابعنــا
        </Button>
        <h2 className="w-8/12 max-w-full text-white text-center text-2xl md:text-4xl font-bold mt-16">
          تفاعل معنا لرؤية المزيد من المفاجآت القادمة عن مستقبل مسيرتك التعليمية
        </h2>
      </div>
      <div className="flex flex-col mb-32 gap-x-20 mt-8 xl:h-60 xl:flex-row">
        <div className="flex gap-15 md:gap-x-28">
          <Link href="https://www.facebook.com/thekaa_ai" target="_blank" rel="noopener noreferrer">
            <Image
              src={"/svgs/facebook.svg"}
              alt="facebook"
              width={140}
              height={140}
            />
          </Link>
          <Link href="https://www.instagram.com/thekaa_ai" target="_blank" rel="noopener noreferrer">
            <Image
              src={"/svgs/instagram.svg"}
              alt="instagram"
              width={140}
              height={140}
            />
          </Link>
        </div>
        <div className="flex gap-x-15 md:gap-x-22">
          <Link href="https://x.com/thekaa_ai" target="_blank" rel="noopener noreferrer">
            <Image
              className="self-end"
              src={"/svgs/x.svg"}
              alt="x"
              width={140}
              height={140}
            />
          </Link>
          <Link href="https://www.linkedin.com/company/thekaa-ai" target="_blank" rel="noopener noreferrer">
            <Image
              className="self-start"
              src={"/svgs/linkedin.svg"}
              alt="linkedin"
              width={140}
              height={140}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SectionTwoDescription;
