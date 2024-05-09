import clsx from "clsx";
import React from "react";
import { useCallback, useState } from "react";
import createImageSet from "../libs/createImageSet";

const PokemonCard = ({ pokemon }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const formattedPrice = useCallback((price) => {
    if (typeof price === "number") {
      return `NT$ ${price.toLocaleString()}`;
    } else if (typeof price === "string") {
      return price;
    }
  }, []);

  return (
    <div
      className="group h-[calc((81.875vw-40px)/2.52)] max-h-[400px] perspective-600 drop-shadow-custom hover:cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* card container */}
      {/* card flip when clicked */}
      <div
        className={clsx(
          "relative h-full w-full transform-style-3d transition duration-1000 transform",
          {
            "rotate-y-180": isFlipped,
            "rotate-y-0": !isFlipped,
          }
        )}
      >
        {/* card  front*/}
        {/* card wiggle when hovered */}
        <div
          className="absolute flex flex-col gap-[18px] justify-end items-center h-full w-full rounded-md pb-6 text-center backface-hidden hover:animate-wiggle"
          style={{
            backgroundImage: `image-set(${createImageSet(pokemon.frontImage)})`,
          }}
        >
          <div className="w-fit h-fit">
            <h5 className="text-center">{pokemon.name}</h5>
            <h5 className="text-center">{formattedPrice(pokemon.price)}</h5>
          </div>

          <div className="flex flex-col items-start w-fit h-fit">
            <p className="text-sm text-grey-200">原產地：{pokemon.origin}</p>
            <p className="text-sm text-grey-200">保育等級：{pokemon.level}</p>
          </div>
        </div>

        {/* card back */}
        <div className="flex flex-col gap-[15px] justify-end absolute h-full w-full rounded-md pl-[18px] pb-[18px] pr-4 transform rotate-y-180 bg-slate-600 backface-hidden"
        style={{
            backgroundImage: `image-set(${createImageSet(pokemon.backImage)})`,
          }}
          >
          <p className="text-base font-light text-grey-200">
            <span>習性與飼養難處：</span>
            {pokemon.difficulty}
          </p>
          <p className="text-base font-light text-grey-200">
            <span>亂象：</span>
            {pokemon.chaos}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
