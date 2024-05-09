import ChartSection from "./components/ChartSection";
import HeroSection from "./components/HeroSection";
import MapSection from "./components/MapSection";
import PokemonSection from "./components/PokemonSection";
import TextSection from "./components/TextSection";

function App() {
  return (
    <div className="">
      {/* hero-section */}
      <HeroSection />

      {/* text */}
      <TextSection style="flex flex-col gap-9 bg-grey-300">
        <p className="max-w-[620px] mx-auto">
          卡通《天竺鼠車車》去年爆紅，民眾瘋飼養天竺鼠但很快爆發棄養潮，動保團體忙著救援遺棄野外的鼠隻，感嘆「一年收容200隻快爆棚！」
        </p>
        <p className="max-w-[620px] mx-auto">
          天竺鼠有人救援，但更多特殊寵物在無聲中死去：狐獴非法走私，遭查緝後「人道銷毀」；角蛙違規宅配，收到包裹已成乾屍；海蟾蜍遭人野放，背上入侵種罪名，捕捉後恐遭安樂死。
        </p>
        <p className="max-w-[620px] mx-auto">
          「特殊寵物」泛指犬貓之外的寵物，台灣約有100萬家戶飼養，市場蓬勃卻亂象叢生。本報針對走私、繁殖、銷售與棄養展開調查，探究法規出現什麼漏洞，使牠們淪為無聲受害者。
        </p>
      </TextSection>

      {/* exotic-pets */}
      <PokemonSection />

      {/* text */}
      <TextSection style="flex flex-col gap-5 bg-grey-200">
        <h3 className="max-w-[620px] mx-auto text-black-500">
          台灣人有多獵奇？全球的動物都來了
        </h3>
        <p className="max-w-[620px] mx-auto text-black-500">
          台灣的特寵涵蓋哺乳類、兩棲爬蟲類、鳥類及魚類，雖然多數業者採合法進口，但走私行為在國際惡名昭彰。民國70年代，台灣掀起紅毛猩猩豢養潮，不肖商人將其走私引進，民眾飼養後又棄養，導致紅毛猩猩輾轉流落動物園，成為第一代棄養特寵。40年後的今天，台灣寵物熱潮未歇，只是「新寵」換人當。本報挑選12種來自全球的台灣寵物，讓你瞭解這塊市場有多瘋狂。
        </p>
      </TextSection>

      {/* global-map */}
      <MapSection />

      {/* text */}
      <TextSection style="flex flex-col gap-[10px] bg-grey-200 pt-[160px] pb-15">
        <h3 className="max-w-[620px] mx-auto text-black-500">
          牠們從哪裡來，往哪裡去？
        </h3>
        <h5 className="max-w-[620px] mx-auto text-[20px] leading-[30px] text-black-500">看特殊寵物的不幸旅程</h5>
      </TextSection>

      {/* flow-chart */}
      <ChartSection />
    </div>
  );
}

export default App;
