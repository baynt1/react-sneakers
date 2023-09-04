import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export const SliderView: FC = () => {
  return (
    <>
      <Swiper modules={[Navigation]} loop={true} navigation={true}>
        <SwiperSlide className={"p-40"}>
          <div
            className={"d-flex justify-between"}
            style={{ background: "#F4EFE9", width: "100%", borderRadius: 20 }}
          >
            <div style={{ paddingLeft: 60 }}>
              <img
                src="/public/disdas.png"
                alt="logo"
                style={{ marginLeft: -40, marginBottom: 20, marginTop: 15 }}
              />
              <div style={{ fontSize: 38, fontWeight: 700, marginBottom: 20 }}>
                <span style={{ color: "#8BB43C" }}>Stan Smith</span>, Forever!
              </div>
              <div style={{ width: 180 }}>
                <button
                  className="greenButton"
                  style={{
                    height: 40,
                    borderRadius: 50,
                    lineHeight: "10px",
                    textTransform: "uppercase",
                  }}
                >
                  Купить
                </button>
              </div>
            </div>
            <img src="/public/slider.png" alt={"slider"} />
          </div>
        </SwiperSlide>
        <SwiperSlide className={"p-40"}>
          <div
            className={"d-flex justify-between"}
            style={{ background: "#F4EFE9", width: "100%", borderRadius: 20 }}
          >
            <div style={{ paddingLeft: 60 }}>
              <img
                src="/public/disdas.png"
                alt="logo"
                style={{ marginLeft: -40, marginBottom: 20, marginTop: 15 }}
              />
              <div style={{ fontSize: 38, fontWeight: 700, marginBottom: 20 }}>
                <span style={{ color: "#8BB43C" }}>Walter White</span>, Forever!
              </div>
              <div style={{ width: 180 }}>
                <button
                  className="greenButton"
                  style={{
                    height: 40,
                    borderRadius: 50,
                    lineHeight: "10px",
                    textTransform: "uppercase",
                  }}
                >
                  Купить
                </button>
              </div>
            </div>
            <img src="/public/slider.png" alt={"slider"} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
