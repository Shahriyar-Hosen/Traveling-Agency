import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from "swiper";
import "swiper/css";

const Banners = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                slidesPerView={3}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <div className="w-96">
                        <img
                            className="w-32  md:w-96 md:h-96 rounded-lg"
                            src="https://i.ibb.co/sRMwdrN/cox-s-bazar.jpg"
                            alt=""
                        />
                        <h2>iosdf</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-96">
                        <img
                            className="w-32  md:w-96 md:h-96 rounded-lg"
                            src="https://i.ibb.co/SV5RJhP/dubai.jpg"
                            alt=""
                        />
                        <h2>iosdf</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-96">
                        <img
                            className="w-32  md:w-96 md:h-96 rounded-lg"
                            src="https://i.ibb.co/FJz4sxT/istanbul.jpg"
                            alt=""
                        />
                        <h2>iosdf</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-96">
                        <img
                            className="w-32  md:w-96 md:h-96 rounded-lg"
                            src="https://i.ibb.co/WsdhSsF/maldives.jpg"
                            alt=""
                        />
                        <h2>iosdf</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-96">
                        <img
                            className="w-32  md:w-96 md:h-96 rounded-lg"
                            src="https://i.ibb.co/WsrVvYH/agra.jpg"
                            alt=""
                        />
                        <h2>iosdf</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-96">
                        <img
                            className="w-32  md:w-96 md:h-96 rounded-lg"
                            src="https://i.ibb.co/2nsH6L7/bankok.jpg"
                            alt=""
                        />
                        <h2>iosdf</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-96">
                        <img
                            className="w-32  md:w-96 md:h-96 rounded-lg"
                            src=" https://i.ibb.co/Yd39kWY/kathmandu.jpg"
                            alt=""
                        />
                        <h2>iosdf</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-96">
                        <img
                            className="w-32  md:w-96 md:h-96 rounded-lg"
                            src="https://i.ibb.co/xGSyWmB/colombo.jpg"
                            alt=""
                        />
                        <h2>iosdf</h2>
                    </div>
                </SwiperSlide>
            </Swiper>

            <h1 className="text-2xl font-bold my-3 mx-2">Hello</h1>
        </div>
    );
};

export default Banners;