import React from 'react'
import css from "./Testimonials.module.css"
import Hero from "../../assets/testimonialHero.png"
import { TestimonialsData } from "../../data/testimonials"

import { SwiperSlide, Swiper } from 'swiper/react'
function Testimonials() {
    return (
        <div className={css.testimonials}>
            <div className={css.wrapper}>
                <div className={css.container}>
                    <span>Top Rated</span>
                    <span>
                        Seedily say suitable disposal and boy. Excercise joy man children rejoiced.
                    </span>
                </div>
                <img src={Hero} alt="Hero-img" />

                <div className={css.container}>
                    <span> 150k</span>
                    <span>Happy Customers</span>
                </div>
            </div>
            <div className={css.reviews}>Reviews</div>
            <div className={css.carousal}>
                <Swiper
                    slidesPerView={3}
                    slidesPerGroup={1}
                    spaceBetween={20}
                    className={css.tCorousal}
                    breakpoints={{
                        856: {
                            slidesPerView: 3
                        },
                        640: {
                            slidesPerView: 2
                        },
                        0: {
                            slidesPerView: 1
                        }
                    }}
                >
                    {
                        TestimonialsData.map((testimonial) => (
                            <SwiperSlide key={testimonial.key}>
                                <div className={css.testimonial}>
                                    <img src={testimonial.image} alt="testimonial" />
                                    <span>{testimonial.comment}</span>
                                    <hr />
                                    <span>{testimonial.name}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials