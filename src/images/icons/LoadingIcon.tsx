import { SVGProps } from "react";

export const LoadingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width={512} height={512} {...props}>
      <circle cx={256} cy={96} r={64} />
      <circle cx={96} cy={256} r={48} />
      <circle cx={368} cy={144} r={8} />
      <path d="M180.1 107.6c-19.9-20.1-52.2-20.1-72.1 0-19.9 20.1-19.9 52.7 0 72.8 19.9 20.1 52.2 20.1 72.1 0 19.9-20.1 19.9-52.7 0-72.8z" />
      <circle cx={416} cy={256} r={16} />
      <circle cx={369} cy={369} r={24} />
      <circle cx={256} cy={416} r={32} />
      <circle cx={144} cy={368} r={40} />
    </svg>
  );
};
