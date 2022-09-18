/** @format */

import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

const Works = () => {
	const { ref, inView } = useInView({
		threshold: 0.2,
	})
	const animation7 = useAnimation()
	// context
	const theme = useContext(themeContext)
	const darkMode = theme.state.darkMode

	useEffect(() => {
		console.log('use effect hook, inView = ', inView)
		if (inView) {
			animation7.start({
				rotate: 0,
				transition: {
					duration: 2,
				},
			})
		}
		if (!inView) {
			animation7.start({
				rotate: 45,
			})
		}
	})

	return (
		<div className="works">
			<div className="awesome">
				<span style={{ color: darkMode ? 'white' : '' }}>
					Works for All these
				</span>
				<span>Brands & Clients</span>
				<span>
					I want to work in a challenging environment that give chance to grow
					up
					<br /> that organization and explore my skills to betterment for my
					company.
					<br />
				</span>

				<button className="button s-button">Hire Me</button>

				<div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
			</div>

			{/* right side*/}

			<div ref={ref} className="w-right">
				<motion.div
					initial={{ rotate: 45 }}
					animate={animation7}
					whileInView={{ rotate: 0 }}
					viewport={{ margin: '-40px' }}
					transition={{ duration: 3.5, type: 'spring' }}
					className="w-mainCircle">
					<div className="w-secCircle">
						<img src={Upwork} alt="" />
					</div>
					<div className="w-secCircle">
						<img src={Fiverr} alt="" />
					</div>
					<div className="w-secCircle">
						<img src={Amazon} alt="" />
					</div>
					<div className="w-secCircle">
						<img src={Shopify} alt="" />
					</div>
					<div className="w-secCircle">
						<img src={Facebook} alt="" />
					</div>
				</motion.div>
				{/* background Circles */}
				<div className="w-backCircle blueCircle"></div>
				<div className="w-backCircle yellowCircle"></div>
			</div>
		</div>
	)
}

export default Works
