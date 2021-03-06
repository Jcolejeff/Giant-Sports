import React from "react";
import styled from "styled-components";
import { services } from "../data";
import { Zoom } from "react-awesome-reveal";
const Services = () => {
	return (
		<Wrapper>
			<article className="header">
				<h2>
					Giant Sports
					<br />
					let's your build your future
				</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
					nihil explicabo repellat eos veritatis beatae quae quod. Expedita,
					autem deleniti.
				</p>
			</article>
			<Zoom>
				<div className="section-center">
					<div className="services-center">
						{services.map((service) => {
							const { id, icon, title, text } = service;
							return (
								<article key={id} className="service">
									<span className="icon">{icon}</span>
									<h4>{title}</h4>
									<p>{text}</p>
								</article>
							);
						})}
					</div>
				</div>
			</Zoom>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	background: var(--clr-primary-9);

	.services-center {
		grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
	}
	h3,
	h4 {
		color: var(--clr-primary-1);
		font-weight: 400;
		font-size: 1.6rem;
	}

	.header {
		display: grid;
		grid-template-columns: 1fr;
		position: relative;
		top: 3rem;
		text-align: center;

		h3 {
			margin-bottom: 2rem;
			line-height: 1.3;
		}
	}

	p {
		margin-bottom: 0;
		line-height: 1.8;
		padding-inline: 0.6rem;
		font-size: 1rem;
	}
	.services-center {
		display: grid;
		gap: 2rem;
	}
	.service {
		margin: 1rem;
		background: var(--clr-primary-7);
		text-align: center;
		padding: 2.5rem 2rem;
		border-radius: var(--radius);
	}
	span {
		width: 4rem;
		height: 4rem;
		display: grid;
		margin: 0 auto;
		place-items: center;
		margin-bottom: 1rem;
		border-radius: 50%;
		background: var(--clr-primary-10);
		color: var(--clr-primary-1);
		svg {
			font-size: 2rem;
		}
	}
	@media (min-width: 992px) {
		margin-block-start: 10rem;
		.header {
			display: grid;
			grid-template-columns: 1fr 1fr;
			position: relative;
			top: 8rem;
			text-align: center;
			padding-inline-end: 4rem;
			h3,
			p {
				font-size: 1.3rem;
			}
		}
	}
	@media (min-width: 576px) {
		.services-center {
			grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
		}
	}
	@media (min-width: 1280px) {
		padding: 0;
		.section-center {
			transform: translateY(10.2rem);
		}
	}
`;
export default Services;
