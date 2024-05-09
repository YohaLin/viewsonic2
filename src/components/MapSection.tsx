import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MapLine from "../svgs/MapLine";

const MapSection = () => {
  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  // store the timeline in a ref.
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            pin: true,
            scrub: true,
          },
        })
        .fromTo(
          "#mapCountry",
          {
            opacity: 0,
          },
          {
            opacity: 1,
          }
        )
        .fromTo(
          ".line",
          {
            strokeDashoffset: 1280,
          },
          {
            strokeDashoffset: 0,
          }
        )
        .to("#mapCountry", {
          opacity: 0,
        })
        .to([".line, .dot"], {
          opacity: 0,
        })
        .fromTo(
          "#mapScroll1",
          {
            opacity: 0,
          },
          {
            opacity: 1,
          }
        )
        .to("#mapScroll1", { opacity: 0 })

        .fromTo(
          "#mapScroll2",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
          }
        )
        .to("#mapScroll2", { opacity: 0 })

        .fromTo(
          "#mapScroll3",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
          }
        )
        .to("#mapScroll3", { opacity: 0 });
    },
    { scope: container }
  );

  return (
    <div
      className="relative h-[56.25vw] bg-grey-200"
      ref={container}
    >
      {/* maps */}
      <div
        id="mapBG"
        className="absolute bg-[url('https://vip.udn.com/newmedia/2022/exoticpets/assets/map-background.svg')] bg-cover bg-center"
      ></div>
      <div
        id="mapSource"
        className="absolute bg-[url('https://vip.udn.com/newmedia/2022/exoticpets/assets/map_source.svg')] bg-cover bg-center"
      ></div>
      <div
        id="mapCountry"
        className="absolute z-10 bg-[url('https://vip.udn.com/newmedia/2022/exoticpets/assets/map-country_name-pc.svg')] bg-cover bg-center"
      ></div>

      {/* map lines */}
      <div className="absolute">
        <MapLine />
      </div>

      {/* animals */}
      <div
        id="mapScroll1"
        className="absolute bg-[url('https://vip.udn.com/newmedia/2022/exoticpets/assets/map-scroll-1-pc.svg')] bg-cover bg-center"
      ></div>
      <div
        id="mapScroll2"
        className="absolute bg-[url('https://vip.udn.com/newmedia/2022/exoticpets/assets/map-scroll-2-pc.svg')] bg-cover bg-center"
      ></div>
      <div
        id="mapScroll3"
        className="absolute bg-[url('https://vip.udn.com/newmedia/2022/exoticpets/assets/map-scroll-3-pc.svg')] bg-cover bg-center"
      ></div>
    </div>
  );
}

export default MapSection