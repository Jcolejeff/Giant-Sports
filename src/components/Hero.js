import React from "react";
import phoneImg from "../images/phone.svg";
import { useGlobalContext } from "../context";
import styled from "styled-components";

const Hero = () => {
	const { closeSubmenu } = useGlobalContext();
	return (
		<Wrapper>
			<section className="hero" onMouseOver={closeSubmenu}>
				<div className="hero-center">
					<article className="hero-info">
						<h1>
							Payments infrastructure <br />
							for the internet
						</h1>
						<p>
							Millions of companies of all sizes—from startups to Fortune
							500s—use Stripe’s software and APIs to accept payments, send
							payouts, and manage their businesses online.
						</p>
						<button className="btn">Start now</button>
					</article>
					<article className="hero-images">
						<img src={phoneImg} className="phone-img" alt="phone" />
					</article>
				</div>
			</section>
		</Wrapper>
	);
};
const Wrapper = styled.section`
	.hero::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 65%;
		top: 0;
		left: 0;
		background-size: cover;
		background-repeat: no-repeat;
		z-index: -1;
	}
	.hero {
		position: relative;
		min-height: 100vh;

		display: grid;
		grid-template-columns: 1fr;
		justify-items: center;
	}
	.hero-center {
		width: 90vw;
		max-width: var(--max-width);
		display: grid;
		align-items: center;
	}

	.hero-info h1 {
		text-transform: none;
		max-width: 500px;
		margin-bottom: 2rem;
	}
	.hero-info p {
		max-width: 35em;
		line-height: 1.8;
	}
	.hero-images {
		display: none;
	}
	@media screen and (min-width: 800px) {
		.hero::before {
			background-size: contain;
			height: 100%;
		}
		.hero-center {
			grid-template-columns: 2fr 1fr;
		}

		.hero-info h1 {
			font-size: 3rem;
		}
		.hero-info p {
			font-size: 1.25rem;
		}
		.hero-images {
			display: block;
			justify-self: center;
		}
		.phone-img {
			width: 12rem;
		}
	}

	@media screen and (min-width: 1200px) {
		.hero-center {
			grid-template-columns: 2fr 1fr;
			align-items: end;
			padding-bottom: 12vh;
		}
		.hero-info h1 {
			max-width: 100%;
			font-size: 5.5rem;
		}
		.hero-images {
			align-self: end;
		}
		.phone-img {
			width: 15rem;
		}
	}
	@media screen and (min-width: 1400px) {
		.hero-center {
			padding-bottom: 20vh;
		}
		.phone-img {
			width: 17rem;
		}
	}
`;

export default Hero;
