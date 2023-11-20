import Image from "next/image";

interface Props {
   icon: string;
   text: string;
   link: string;
}

export default function FollowSource({ icon, text, link }: Props) {
   return (
      <a
         href={link}
         className="flex justify-center items-center gap-x-2 rounded-lg p-2 ring-1 ring-background hover:scale-105 transition-all cursor-pointer"
      >
         <Image src={icon} alt="follow icon" width="25" height="25" className="text-white"></Image>
         <div className="text-white text-sm">{text}</div>
      </a>
   );
}
