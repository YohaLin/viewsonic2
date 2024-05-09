import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlowChartLine from "../svgs/FlowChartLine";
import Wrapper from "../layouts/Wrapper";
import FlowChartText from "../svgs/FlowChartText";

const ChartSection = () => {
  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top-=300 top",
            end: "bottom+=300 bottom",
            scrub: true,
          },
        })
        // "<" means the same time from last element
        // ">" means when last element is over, start
        .to("#stop2", { attr: { offset: "100%" }, duration: 20 })
        .to("#stop3", { attr: { offset: "100%" }, duration: 20 }, "<")
        .fromTo(".pc-text1", { opacity: 0 }, { opacity: 1, duration: 1 }, "<")
        .fromTo(".pc-text2", { opacity: 0 }, { opacity: 1, duration: 1.5 }, ">")
        .fromTo(".pc-text3", { opacity: 0 }, { opacity: 1, duration: 1 }, ">")
        .fromTo(".pc-text4", { opacity: 0 }, { opacity: 1, duration: 1 }, ">")
        .fromTo(".pc-text5", { opacity: 0 }, { opacity: 1, duration: 2 }, ">")
        .fromTo(".pc-text6", { opacity: 0 }, { opacity: 1, duration: 2 }, ">")
        .fromTo(
          ".icon1",
          { opacity: 0 },
          { opacity: 1, duration: 2 },
          "<1"
        )
        .fromTo(".pc-text7", { opacity: 0 }, { opacity: 1, duration: 3 }, ">")
        .fromTo(".pc-text8", { opacity: 0 }, { opacity: 1, duration: 3 }, ">")
        .fromTo(
          ".icon2",
          { opacity: 0 },
          { opacity: 1, duration: 2 },
          "<1"
        )
        .fromTo(".pc-text9", { opacity: 0 }, { opacity: 1, duration: 3 }, ">")
        .fromTo(".pc-text10", { opacity: 0 }, { opacity: 1, duration: 3 }, ">")
        .fromTo(
          ".icon3",
          { opacity: 0 },
          { opacity: 1, duration: 2 },
          "<1"
        );
    },
    { scope: container }
  );

  return (
    <Wrapper style="bg-grey-200">
      <div
        className="relative w-[calc(960px+(100%-1025px)*0.21569)] max-w-[1015px] h-[1647px] mx-auto mb-[600px]"
        ref={container}
      >
        {/* flowChartLine */}
        <div className="absolute">
          <FlowChartLine />
        </div>

        {/* flowChartText */}
        <div className="absolute">
          <FlowChartText />
        </div>
      </div>
    </Wrapper>
  );
};

export default ChartSection;
