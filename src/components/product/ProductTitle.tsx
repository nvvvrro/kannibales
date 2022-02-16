import { FC } from "react";

export type ProductTitleProps = {
  children: React.ReactNode;
  className?: string;
  highlighted?: React.ComponentType;
};
export const ProductTitle: FC<ProductTitleProps> = ({
  children,
  className = "",
  highlighted: Highlighting,
}) => {
  return (
    <h1 className={`${className} text-3xl font-bold`}>
      {Highlighting ? <Highlighting /> : children}
    </h1>
  );
};