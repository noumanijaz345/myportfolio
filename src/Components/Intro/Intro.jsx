/** @format */

import React, { useContext } from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Nomi from '../../img/nomi.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

const Intro = () => {
	const { ref, inView } = useInView({
		threshold: 0.2,
	})
	const animation4 = useAnimation()
	const animation5 = useAnimation()
	const animation6 = useAnimation()
	// Transition
	useEffect(() => {
		console.log('use effect hook, inView = ', inView)
		if (inView) {
			animation4.start({
				x: '5vw',
				left: '-35%',
				transition: {
					duration: 2,
					type: 'spring',
				},
			})
		}
		if (!inView) {
			animation4.start({
				x: '0vw',
				left: '-35%',
			})
		}
	})

	useEffect(() => {
		console.log('use effect hook, inView = ', inView)
		if (inView) {
			animation5.start({
				x: '5vw',
				left: '55%',

				transition: {
					duration: 2,
					type: 'spring',
				},
			})
		}
		if (!inView) {
			animation5.start({
				x: '10vw',
				left: '50%',
			})
		}
	})

	useEffect(() => {
		console.log('use effect hook, inView = ', inView)
		if (inView) {
			animation6.start({
				x: '0vw',
				left: '5%',

				transition: {
					duration: 2,
					type: 'spring',
				},
			})
		}
		if (!inView) {
			animation6.start({
				x: '0vw',
				left: '10%',
			})
		}
	})
	// context
	const theme = useContext(themeContext)
	const darkMode = theme.state.darkMode

	return (
		<div className="intro" id="Intro">
			<div className="i-left">
				<div className="i-name">
					<span style={{ color: darkMode ? 'white' : '' }}>Hy! I Am</span>
					<span>Nouman Ejaz</span>
					<span>
						Frontend Developer with high level of experience in web designing
						and development,<br></br>producting the Quality work
					</span>

					<button className="button i-button">Hire me</button>
					<div className="i-icons">
						<a href="#">
							<img src={Github} alt="" />
						</a>

						<a href="#">
							<img src={LinkedIn} alt="" />
						</a>
						<a href="#">
							<img src={Instagram} alt="" />
						</a>
					</div>
				</div>
			</div>
			<div ref={ref} className="i-right">
				<img src={Vector1} alt="" />
				<img src={Vector2} alt="" />
				<img src={Nomi} alt="" />
				<motion.img
					animate={animation4}
					initial={{ left: '-36%' }}
					whileInView={{ left: '-24%' }}
					//	transition={transition}
					src={glassesimoji}
					alt=""
				/>
				<motion.div
					initial={{ left: '60%' }}
					animate={animation5}
					whileInView={{ left: '53%' }}
					//transition={transition}
					className="floating-div">
					<div>
						<FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
					</div>
				</motion.div>

				<motion.div
					initial={{ left: '3rem', top: '18rem' }}
					animate={animation6}
					whileInView={{ left: '0rem' }}
					//	transition={transition}
					className="floating-div">
					{/* floatinDiv mein change hy dark mode ka */}
					<div>
						<FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
					</div>
				</motion.div>

				<div className="blur" style={{ background: 'rgb (238 210 255)' }}></div>
				<div
					className="blur"
					style={{
						background: '#c1f5ff',
						top: '17rem',
						width: '21rem',
						height: '11rem',
						left: '-9rem',
					}}></div>
			</div>
		</div>
	)
}

export default Intro
