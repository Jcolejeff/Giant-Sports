import React from "react";
import phoneImg from "../images/phone.svg";
import { useGlobalContext } from "../context";
import styled from "styled-components";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";
const Hero = () => {
	const { closeSubmenu } = useGlobalContext();
	return (
		<Wrapper className="section-center" onMouseOver={closeSubmenu}>
			<article className="content">
				<h1>
					design your <br></br>
					comfort zone
				</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
					unde quo repudiandae assumenda nisi incidunt nihil ratione autem
					doloremque cupiditate eius sunt ut inventore perspiciatis provident
					reiciendis necessitatibus laudantium totam!
				</p>
				<button to="/products" className="btn hero-btn">
					shop now
				</button>
			</article>
			<article className="img-container">
				<img src={heroBcg} alt="table" className="main-img" />
				<img src={heroBcg2} alt="perosn working" className="accent-img" />
			</article>
		</Wrapper>
	);
};
const Wrapper = styled.section`
	min-height: 60vh;
	display: grid;
	place-items: center;
	.img-container {
		display: none;
	}

	p {
		line-height: 2;
		max-width: 45em;
		margin-bottom: 2rem;
		color: var(--clr-grey-5);
		font-size: 1rem;
	}
	@media (min-width: 992px) {
		height: calc(100vh - 5rem);
		grid-template-columns: 1fr 1fr;
		gap: 8rem;
		h1 {
			margin-bottom: 2rem;
		}
		p {
			font-size: 1.25rem;
		}
		.hero-btn {
			padding: 0.75rem 1.5rem;
			font-size: 1rem;
		}
		.img-container {
			display: block;
			position: relative;
		}
		.main-img {
			width: 100%;
			height: 550px;
			position: relative;
			border-radius: var(--radius);
			display: block;
			object-fit: cover;
		}
		.accent-img {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 250px;
			transform: translateX(-50%);
			border-radius: var(--radius);
		}
		.img-container::before {
			content: "";
			position: absolute;
			width: 10%;
			height: 80%;
			background: var(--clr-primary-9);
			bottom: 0%;
			left: -8%;
			border-radius: var(--radius);
		}
	}
`;

export default Hero;
