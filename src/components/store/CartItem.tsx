import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { LineItem } from "../../types/cart";

interface Props {
  id: string;
  value: string;
  name: string;
  item: LineItem;
  className?: string;
}

export const CartItem = ({ id, item, value, name, className }: Props) => {
  return (
    <li>
      <div className="flex flex-row space-x-4 py-4">
        <div className="w-16 h-16 bg-violet relative overflow-hidden cursor-pointer z-0">
          <Link href={`/product/${item.path}`}>
            <a>
              <Image
                src={item.image}
                width={150}
                height={150}
                className={className}
                unoptimized
              ></Image>
            </a>
          </Link>
        </div>
      </div>
    </li>
  );
};
