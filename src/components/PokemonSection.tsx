import Wrapper from "../layouts/Wrapper";
import PokemonCard from "./PokemonCard";
import pokemonList from "../constants/pokemonList";
import React from "react";

const PokemonSection = () => {
  
  return (
    <Wrapper style="flex flex-col gap-10 min-h-fit pt-0 bg-grey-300">
      {/* paragraph */}
      <div className="flex flex-col gap-5 max-w-[620px] mx-auto">
        <h3>變調的現實寶可夢：寵物圖鑑與亂象</h3>
        <p>
          「這好酷、好可愛」是許多人對特殊寵物的第一印象，甚至因一時衝動或獵奇心態而購買，但我們是否真的善待牠們？《聯合報》製作9種非犬貓寵物的圖鑑，帶領讀者瞭解牠們的故事以及買賣與棄養亂象。
        </p>
      </div>

      {/* pokemon div */}
      <div className="bg-yellow-500 w-fit mx-auto text-grey-300 leading-6 pt-[1px] px-[8.5px] pb-[3px]">
        點擊下方圖片 看動物亂象
      </div>

      {/* cards */}
      <div className="flex flex-col gap-[30px]">
        <div className="grid grid-cols-3 gap-5 w-[81.875vw] max-w-[1048px] mx-auto">
          {pokemonList.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </div>

        <div className="flex flex-col max-w-[620px] mx-auto">
          <p className="text-[15px] font-light leading-[22px]">
            資料來源：記者訪談、國際自然保護聯盟（IUCN）紅皮書、台北市立動物園保育網
          </p>
          <p className="text-[15px] font-light leading-[22px]">
            附註：僅為參考價格，實際價格依品系與年齡而不同
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default PokemonSection;
