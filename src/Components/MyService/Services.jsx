/** @format */

import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import CV from './CV.pdf'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

const Services = () => {
	const { ref, inView } = useInView({
		threshold: 0.2,
	})
	const animation3 = useAnimation()
	const animation2 = useAnimation()
	const animation = useAnimation()

	useEffect(() => {
		console.log('use effect hook, inView = ', inView)
		if (inView) {
			animation3.start({
				x: 0,
				transition: {
					duration: 1,
					type: 'spring',
				},
			})
		}
		if (!inView) {
			animation3.start({
				x: '100vw',
				left: '20rem',
			})
		}
	})

	useEffect(() => {
		console.log('use effect hook, inView = ', inView)
		if (inView) {
			animation2.start({
				x: 0,
				left: '1rem',
				transition: {
					duration: 1,
					type: 'spring',
				},
			})
		}
		if (!inView) {
			animation2.start({
				x: '-100vw',
				left: '8rem',
			})
		}
	})

	useEffect(() => {
		console.log('use effect hook, inView = ', inView)
		if (inView) {
			animation.start({
				x: 0,
				transition: {
					duration: 1,
					type: 'spring',
				},
			})
		}
		if (!inView) {
			animation.start({
				x: '100vw',
				left: '18rem',
			})
		}
	})

	// context
	const theme = useContext(themeContext)
	const darkMode = theme.state.darkMode

	return (
		<div className="services" id="Services">
			<div className="awesome">
				<span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
				<span>services</span>
				<span>
					I am working as aWeb Developer. I have worked
					<br /> with various technologies and programming languages.
					<br /> I have complete knowledge
					and grip on front-end development.
				</span>
				<a href={CV}>
					<button className="button s-button">Download CV</button>
				</a>
				<div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
			</div>
			<div ref={ref} className="cards">
				<motion.div animate={animation3} initial={{ left: '35rem' }}>
					<div style={{ left: '35rem' }}>
						<Card
							emoji={HeartEmoji}
							heading={'Design'}
							detail={'Figma, Sketch, Adobe Photoshop, Framer Motion'}
						/>
					</div>
				</motion.div>

				<motion.div animate={animation2} initial={{ top: '12rem' }}>
					<div>
						<Card
							emoji={Glasses}
							heading={'Developer'}
							detail={'Html 5, CSS 3, Bootstrap 5, JavaScript, React Js'}
						/>
					</div>
				</motion.div>
				<motion.div animate={animation} initial={{ top: '19rem' }}>
					<div>
						<Card
							emoji={Humble}
							heading={'Social Media'}
							detail={'Freelancer, Digital Marketing, Youtube, SEO, Google '}
						/>
					</div>
				</motion.div>
				<div
					className="blur s-blur2"
					style={{ background: 'var(--purple)' }}></div>
			</div>
		</div>
	)
}

export default Services
