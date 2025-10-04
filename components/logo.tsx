import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const Logo = ({ className, width = 140, height = 50, ...props }: LogoProps) => {
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      width={width}
      height={height}
      priority
      className={`object-contain -mt-2 ${className || ''}`}
      {...props}
    />
  );
};
