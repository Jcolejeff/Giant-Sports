import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { data } from "../data";
import styled from "styled-components";
function App() {
	const [people, setPeople] = useState(data);
	const [index, setIndex] = React.useState(0);

	const nextSlide = () => {
		setIndex((oldIndex) => {
			let index = oldIndex + 1;
			if (index > people.length - 1) {
				index = 0;
			}
			return index;
		});
	};
	const prevSlide = () => {
		setIndex((oldIndex) => {
			let index = oldIndex - 1;
			if (index < 0) {
				index = people.length - 1;
			}
			return index;
		});
	};

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex((oldIndex) => {
				let index = oldIndex + 1;
				if (index > people.length - 1) {
					index = 0;
				}
				return index;
			});
		}, 5000);
		return () => {
			clearInterval(slider);
		};
	}, [index]);

	return (
		<StyledSlider>
			<div className="section">
				{people.map((person, personIndex) => {
					const { id, image, name, title, quote } = person;

					let position = "nextSlide";
					if (personIndex === index) {
						position = "activeSlide";
					}
					if (
						personIndex === index - 1 ||
						(index === 0 && personIndex === people.length - 1)
					) {
						position = "lastSlide";
					}

					return (
						<article className={position} key={id}>
							<div></div>
							<img src={image} alt={name} className="person-img" />

							<h2 className="title">{title}</h2>
							<h4 className="text">{quote}</h4>
						</article>
					);
				})}
				<button className="prev" onClick={prevSlide}>
					<FiChevronLeft />
				</button>
				<button className="next" onClick={nextSlide}>
					<FiChevronRight />
				</button>
			</div>
		</StyledSlider>
	);
}
const StyledSlider = styled.section`
	margin-block-end: 2rem;

	.title h2 {
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 500;
	}
	.title span {
		font-size: 0.85em;
		color: var(--clr-primary-5);
		margin-right: 1rem;
		font-weight: 700;
	}
	.section {
		margin: 0 auto;
		margin-top: 4rem;
		width: 95vw;
		height: 600px;
		text-align: center;
		position: relative;
		display: flex;
		overflow: hidden;
	}
	.person-img {
		margin-bottom: 1rem;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border: 4px solid var(--clr-grey-8);
		box-shadow: var(--dark-shadow);
		border-radius: 10px;
		position: absolute;
		top: 0;
		left: 0;
	}
	article h4 {
		text-transform: uppercase;
		color: var(--clr-primary-5);
		margin-bottom: 0.25rem;
	}
	.title {
		text-transform: capitalize;
		margin-bottom: 0.75rem;
		color: white;
		position: absolute;
		z-index: 60;
		top: 240px;
		left: 50%;
		transform: translateX(-50%);
	}
	.text {
		max-width: 35em;
		margin: 0 auto;
		margin-top: 2rem;
		line-height: 2;
		color: var(--clr-grey-5);
		color: white;
		position: absolute;
		z-index: 60;
		top: 350px;
		left: 50%;
		transform: translateX(-50%);
	}
	.icon {
		font-size: 3rem;
		margin-top: 1rem;
		color: var(--clr-primary-5);
	}
	.prev,
	.next {
		position: absolute;
		top: 300px;
		transform: translateY(-50%);
		background: var(--clr-grey-5);
		color: var(--clr-white);
		width: 2.7rem;
		height: 3rem;
		display: grid;
		place-items: center;
		border-color: transparent;
		font-size: 1.5rem;
		border-radius: var(--radius);
		cursor: pointer;
		transition: var(--transition);
	}
	.prev:hover,
	.next:hover {
		background: var(--clr-primary-5);
	}
	.prev {
		left: 0;
	}
	.next {
		right: 0;
	}
	@media (min-width: 800px) {
		.text {
			max-width: 45em;
		}
		.prev,
		.next {
			width: 2rem;
			height: 2rem;
			font-size: 1.5rem;
		}
		.section {
			width: 98vw;
		}
	}
	article {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: var(--transition);

		div {
			position: absolute;
			top: 0%;
			left: 0%;
			z-index: 44;
			width: 100%;
			height: 100%;
			background-color: black;
			opacity: 0.45;
			color: white;
		}
	}
	article.activeSlide {
		opacity: 1;
		transform: translateX(0);
		.text {
			animation: moveInRight 1s linear;
		}
		.title {
			animation: moveInLeft 1s linear;
		}
	}
	article.lastSlide {
		transform: translateX(-100%);
	}
	article.nextSlide {
		transform: translateX(100%);
	}

	@keyframes moveInLeft {
		0% {
			opacity: 0;
			transform: translateX(-10rem);
		}
		80% {
			transform: translateX(80rem);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes moveInRight {
		0% {
			opacity: 0;
			transform: translateX(10rem);
		}
		80% {
			transform: translateX(-80rem);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
	@media (min-width: 40rem) {
		margin-block-start: 5rem;
		.title {
			text-transform: capitalize;
			margin-bottom: 0.75rem;
			color: white;
			position: absolute;
			z-index: 60;
			top: 290px;
			left: 50%;
			transform: translateX(-50%);
		}
		.text {
			max-width: 35em;
			margin: 0 auto;
			margin-top: 2rem;
			line-height: 2;
			color: var(--clr-grey-5);
			color: white;
			position: absolute;
			z-index: 60;
			top: 300px;
			left: 50%;
			transform: translateX(-50%);
		}
	}
`;

export default App;
