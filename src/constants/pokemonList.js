const pokemonList = [
    {
      id: 0,
      name: "天竺鼠",
      price: 999,
      origin: "南美洲，廣泛引進各國飼養",
      level: "無危",
      difficulty:
        "長大後，體型及食量變大、排泄變多，疏於清潔會屎尿滿地，味道濃重，因此遭棄養。",
      chaos:
        "不肖繁殖場強迫母體不斷生產幼體來販賣，未給予足夠休養時間；待母體繁殖力消耗殆盡後，便將牠們遺棄。",
      frontImage:
        "https://vip.udn.com/newmedia/2022/exoticpets/assets/animals/pc+pad/exoticpets-animal1-a-pc",
      backImage:
        "https://vip.udn.com/newmedia/2022/exoticpets/assets/animals/pc+pad/exoticpets-animal1-b-pc",
    },
    {
      id: 1,
      name: "北美浣熊",
      price: 40000,
      origin: "北美洲",
      level: "無危",
      difficulty:
        "野性較高具攻擊性，不適合作為居家寵物，若飼主未花時間培養互信，浣熊會生氣咬人致流血，因此遭到棄養。",
      chaos:
        "在日本，遭棄養的浣熊在野外大繁衍，造成嚴重農損；在台灣，已有民眾在野外目擊浣熊「母帶子」生活，恐成下一外來入侵種。",
      frontImage:
        "https://vip.udn.com/newmedia/2022/exoticpets/assets/animals/pc+pad/exoticpets-animal2-a-pc",
      backImage:
        "https://vip.udn.com/newmedia/2022/exoticpets/assets/animals/pc+pad/exoticpets-animal2-b-pc",
    },
    {
      id: 2,
      name: "絨鼠 (龍貓)",
      price: 59999,
      origin: "南美洲安地斯山脈",
      level: "瀕危",
      difficulty:
        "適宜溫度為攝氏15至23度，在台飼養需開冷氣，否則有食慾不佳、皮膚病問題。",
      chaos:
        "高單價新興寵物，高雄港曾查獲50隻走私，鑑價每隻高達16萬元；因是國外人工繁殖，不列入保育類，以安樂死銷毀。",
      frontImage:
        "https://vip.udn.com/newmedia/2022/exoticpets/assets/animals/pc+pad/exoticpets-animal3-a-pc",
      backImage:
        "https://vip.udn.com/newmedia/2022/exoticpets/assets/animals/pc+pad/exoticpets-animal3-b-pc",
    },
    {
      id: 3,
      name: "海蟾蜍",
      price: "已禁止販售",
      origin: "中南美洲",
      level: "無危",
      difficulty:
        "遇敵人會噴出毒液，屬雜食性，食量極大且繁殖力強，需留意過度繁殖問題。",
      chaos:
        "遭人放生野外的海蟾蜍，在南投草屯繁衍，入侵本土生態；逾600隻遭移除，恐遭安樂死處理。政府已列管，禁止繁殖販賣。",
      frontImage:
        "https://vip.udn.com/newmedia/2022/exoticpets/assets/animals/pc+pad/exoticpets-animal4-a-pc",
      backImage:
        "https://vip.udn.com/newmedia/2022/exoticpets/assets/animals/pc+pad/exoticpets-animal4-b-pc",
    },
    {
      id: 4,
      name: "刺蝟",
      price: 599,
      origin: "西歐、北歐、北非、中國",
      level: "無危",
      difficulty:
        "夜行性動物，喜歡半夜翻箱倒櫃。生氣時把刺豎起來或咬人，部分飼主不花時間與牠互動，建立感情，反而將牠遺棄。",
      chaos:
        "繁殖業者採「近親交配」，造成小刺蝟有基因缺陷，包括體型弱小、腳部萎縮等問題。",
      frontImage:
        "https://vip.udn.com/newmedia/2022/exoticpets/assets/animals/pc+pad/exoticpets-animal5-a-pc",
      backImage:
        "https://vip.udn.com/newmedia/2022/exoticpets/assets/animals/pc+pad/exoticpets-animal5-b-pc",
    },
    {
      id: 5,
      name: "狐獴",
      price: 120000,
      origin: "非洲喀拉哈里沙漠",
      level: "無危",
      difficulty:
        "群居數量可達30隻，挖洞為巢，但台灣飼養多為單隻且空間狹小。動保人士批違反習性，不應作為寵物。",
      chaos:
        "高單價新興寵物，桃園機場曾查獲走私，每隻鑑價高達15萬台幣，因不屬保育類，依防疫規定以安樂死銷毀。",
      frontImage:
        "https://vip.udn.com/newmedia/2022/exoticpets/assets/animals/pc+pad/exoticpets-animal6-a-pc",
      backImage:
        "https://vip.udn.com/newmedia/2022/exoticpets/assets/animals/pc+pad/exoticpets-animal6-b-pc",
    },
    {
      id: 6,
      name: "蘇卡達象龜",
      price: 3299,
      origin: "非洲撒哈拉沙漠南部",
      level: "瀕危",
      difficulty:
        "草食性。世界第三大陸龜，可長到80公分，部分飼主因空間不足棄養，流落至動物園或私人單位。",
      chaos:
        "未開放進口前，走私利潤大，每隻可賺2萬；開放進口後，台產繁殖氾濫，利用宅配寄送，過程死亡黑數眾多。",
      frontImage:
        "https://vip.udn.com/newmedia/2022/exoticpets/assets/animals/pc+pad/exoticpets-animal7-a-pc",
      backImage:
        "https://vip.udn.com/newmedia/2022/exoticpets/assets/animals/pc+pad/exoticpets-animal7-b-pc",
    },
    {
      id: 7,
      name: "綠鬣蜥",
      price: "已禁止販售",
      origin: "中南美洲",
      level: "無危",
      difficulty:
        "草食性。成體可長到180公分，加上求偶季會變得暴躁，咬人抓人，因此遭棄養。",
      chaos:
        "因棄養或逃逸野外，在南部大規模繁衍，造成巨大農損，去年屏東縣移除近2萬隻為全國最多；已列管，禁止繁殖販賣。",
      frontImage:
        "https://vip.udn.com/newmedia/2022/exoticpets/assets/animals/pc+pad/exoticpets-animal8-a-pc",
      backImage:
        "https://vip.udn.com/newmedia/2022/exoticpets/assets/animals/pc+pad/exoticpets-animal8-b-pc",
    },
    {
      id: 8,
      name: "麝香豬",
      price: 3000,
      origin: "中國大陸",
      level: "無危",
      difficulty:
        "寵物店販售時標榜「迷你豬」，實際可養到體重破百，加上食量大，飼主因此棄養。因體型大，後端收容成難題。",
      chaos:
        "常見不當對待，有豬隻被關在狹小鐵籠，當成吃廚餘工具，腳部受傷變形，所幸獲救。",
      frontImage:
        "https://vip.udn.com/newmedia/2022/exoticpets/assets/animals/pc+pad/exoticpets-animal9-a-pc",
      backImage:
        "https://vip.udn.com/newmedia/2022/exoticpets/assets/animals/pc+pad/exoticpets-animal9-b-pc",
    },
  ];

export default pokemonList