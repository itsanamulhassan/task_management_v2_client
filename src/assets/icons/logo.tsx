import { cn } from "@/lib/utils";
import { type FC } from "react";

type LogoData = {
  className?: string;
};

const Logo: FC<LogoData> = ({ className }) => {
  return (
    <i className="relative size-8">
      <img
        className={cn(
          "inset-0 m-auto absolute",
          "opacity-100 dark:opacity-0 size-5 transition-all duration-300",
          className
        )}
        src="../../../public/logo_dark.png"
        alt="logo"
      />
      <img
        className={cn(
          "inset-0 m-auto absolute",
          "size-5 opacity-0 dark:opacity-100 transition-all duration-300",
          className
        )}
        src="../../../public/logo_light.png"
        alt="logo"
      />
    </i>
  );
};

export default Logo;
