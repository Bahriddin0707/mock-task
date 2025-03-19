import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";

interface CardProps {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  backgroundColor?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  linkText,
  backgroundColor = "bg-gray-800",
}) => {
  return (
    <div className={`card ${backgroundColor} p-6 rounded-lg`}>
      <Image
        src={icon}
        alt={title}
        className="w-20 h-20 mx-auto"
        width={70}
        height={70}
      />
      <h3 className="text-xl font-bold mt-4 text-center">{title}</h3>
      <p className="text-white mt-2 text-center">{description}</p>
      <div className="flex justify-between items-center">
        <Link href="#" className={`mt-4 inline-block font-bold text-white`}>
          {linkText} →
        </Link>
        <p className="flex justify-center items-center rounded-full bg-[#d8ed4b] p-2">
          <AiOutlineThunderbolt className="text-black" />
        </p>
      </div>
    </div>
  );
};

export default Card;
