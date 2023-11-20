import FollowSource from "@/components/FollowSource";

export default function Home() {
   return (
      <div className="h-full main-gradient flex justify-center items-center">
         <div className="flex flex-col justify-center items-center bg-secondary p-10 md:p-16 rounded-3xl shadow-lg mx-5">
            <div className="text-text text-5xl  md:text-7xl font-bold mb-10 md:mb-16 text-center">Huginn App</div>
            <div className="text-primary text-3xl md:text-5xl font-bold mb-10 md:mb-16 text-center">Coming Soon...</div>
            <div className="text-text text-lg mb-5">Follow me here:</div>
            <div className="flex gap-5 flex-wrap justify-center">
               <FollowSource
                  icon="/instagram.svg"
                  text="Instagram"
                  link="https://www.instagram.com/werdox.dev"
               ></FollowSource>
               <FollowSource icon="/x.svg" text="Twitter (X)" link="https://twitter.com/Matin90365857"></FollowSource>
               <FollowSource icon="/discord.svg" text="Discord" link="https://discord.gg/cad9P5dm3y"></FollowSource>
               <FollowSource
                  icon="/github.svg"
                  text="Github"
                  link="https://github.com/WerdoxDev/huginn-website"
               ></FollowSource>
            </div>
         </div>
      </div>
   );
}
