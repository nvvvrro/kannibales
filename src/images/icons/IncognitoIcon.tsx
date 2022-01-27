import React, { SVGProps } from "react";

export const IncognitoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={21} cy={44} r={8} fill="#FDAFA4" />
    <circle cx={45} cy={44} r={8} fill="#FDAFA4" />
    <path
      d="M17.702 37.252a7.952 7.952 0 0 1 3.136-1.168L19.053 51.44a8.01 8.01 0 0 1-2.784-1.859l1.433-12.33ZM41.702 37.252a7.952 7.952 0 0 1 3.136-1.168L43.053 51.44a8.01 8.01 0 0 1-2.784-1.859l1.433-12.33Z"
      fill="#fff"
    />
    <circle cx={21} cy={44} r={8} stroke="#0F277F" strokeWidth={3} />
    <circle cx={45} cy={44} r={8} stroke="#0F277F" strokeWidth={3} />
    <path
      d="M29 44c.667-.667 1.5-2 4-2s3.333 1.333 4 2"
      stroke="#0F277F"
      strokeWidth={3}
      strokeLinecap="round"
    />
    <path
      d="M32 26c8.405 0 13.402 1.828 20.202 5.121.95.46.617 1.879-.438 1.879H12.236c-1.055 0-1.388-1.419-.438-1.879C18.598 27.828 23.595 26 32 26ZM23.777 13.335a1 1 0 0 1 1.434-.73l3.725 1.863a3 3 0 0 0 2.204.19l7.773-2.332a1 1 0 0 1 1.274.794l1.619 9.716A1 1 0 0 1 40.82 24H23.18a1 1 0 0 1-.986-1.164l1.583-9.5Z"
      fill="#0F277F"
    />
  </svg>
);
