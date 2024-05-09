import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex justify-end w-full h-screen hero-bg">
      <div className="absolute bottom-0 flex flex-col items-center w-full h-fit">
        <p className="text-[15px] text-white font-normal">下滑看更多</p>
        <div className="w-[0.5px] h-[100px] bg-grey-200"/>
      </div>

      <div className="flex w-fit h-fit  font-bold">
        <p className="vertical text-[24px] pt-[76px] pr-[15px] leading-[26px] tracking-[2px] text-grey-200 font-notoSerif">
          從走私、繁殖到棄養 誰讓牠們無聲死去？
        </p> 
        <p className="vertical text-[50px] pt-[70px] pr-[100px] leading-[56px] tracking-[8px] text-grey-200 font-notoSerif">
          失控寵物島
        </p>
        <img src="../../public/mob.svg" alt="" />
      </div>

    </div>
  );
};

export default HeroSection;
