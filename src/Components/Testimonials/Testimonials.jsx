/** @format */

import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import { Pagination } from 'swiper'
import 'swiper/modules/pagination/pagination.min.css'


const Testimonials = () => {
	const clients = [
		{
			img: profilePic1,
			review:
			'Nouman is incredibly helpful and professional which I really needed on the build of my website. I will definitely be using Nouman again for any future work and I highly recommend to all.',
		},
		{
			img: profilePic2,
			review:
				'Been working with him for a long time now. good communication skills, Very competent and always awesome delivery. I highly recommend',
		},
		{
			img: profilePic3,
			review:
				'I have been working with him for a long time. Really impressed by his work. He has done all the tasks I required with full support. Definitely I will keep him for ongoing projects.',
		},
		{
			img: profilePic4,
			review:
				'Really talented dev and great to work with. Would recommend and use again 10/10. Very satisifed with work. He is caring and gives a lot of attention to the detail. Exactly what you need from a front-end developer',
		},
	]

	return (
		<div className="t-wrapper" id="testimonial">
			<div className="t-heading">
				<span>Clients always get </span>
				<span>Exceptional Work </span>
				<span>from me...</span>
				<div
					className="blur t-blur1"
					style={{ background: 'var(--purple)' }}></div>
				<div className="blur t-blur2" style={{ background: 'skyblue' }}></div>
			</div>

			<Swiper
				modules={[Pagination]}
				slidesPerView={1}
				pagination={{ clickable: true }}>
				{clients.map((client, index) => {
					return (
						<SwiperSlide key={index}>
							<div className="testimonials">
								<img src={client.img} alt="" />
								<span>{client.review}</span>
							</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}

export default Testimonials
