import React from "react";
import styled from "styled-components";
import { Zoom, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedinIn, FaGithub, FaMailBulk } from "react-icons/fa";

const Footer = () => {
	return (
		<Wrapper>
			<Slide>
				<div className="contact">
					<section>
						<div>
							<h3>Address</h3>
							<p>
								34 Railway Shopping Complex, <br /> Opposite JUTH Temporary Site
								Murtala Way, <br />
								Jos. Plateau State Nigeria
							</p>
							<h3>Activities location</h3>
							<p>
								Police Field, Police Headquaters, <br />
								JD Gomwalk Road,
								<br />
								Jos. Plateau State Nigeria.
							</p>
						</div>
					</section>
					<section>
						<>
							<h3>Contacts</h3>
							<p>
								Email: <br />
								<a href="mailto:meetus@giantsportsplus.com">
									meetus@giantsportsplus.com
								</a>
							</p>
							<p>
								Phone: <br />
								<a href="tel:+2348033369900">+234 803 336 9900</a> <br />
								<a href="tel:+2348033369900">+234 803 336 9900</a> <br />
								<a href="tel:+2348033369900">+234 803 336 9900</a> <br />
							</p>
							<p>
								Whatsapp: <br />
								<a href="tel:+2348033369900">+234 803 336 9900</a>
							</p>
						</>
					</section>
					<section className="page-links">
						<h3> links</h3>
						<Link to="/comingSoon">Events</Link>
						<Link to="/comingSoon">Trainee</Link>
						<Link to="/comingSoon">Mentorship</Link>
						<Link to="/comingSoon">Endorsement</Link>
						<Link to="/comingSoon">Partnership</Link>
						<Link to="/comingSoon">Sports</Link>
						<Link to="/comingSoon">Agriculture</Link>
						<Link to="/comingSoon">Education</Link>
						<Link to="/comingSoon">Tourism</Link>
						<Link to="/comingSoon">Gallery</Link>
						<Link to="/about">About Us</Link>
					</section>
				</div>
				<div className="links">
					<h5>
						&copy;{new Date().getFullYear()}
						<span> Gaint sports</span>
						<h5>All rights reserved</h5>
					</h5>
					<ul>
						<li>
							<a href="https://github.com">
								<FaGithub />
							</a>
						</li>

						<li>
							<a href="https://www.linkedin.com">
								<FaLinkedinIn />
							</a>
						</li>
						<li>
							<a href=" https://twitter.com">
								<FaTwitter />
							</a>
						</li>
						<li>
							<a href="mailto:ikkhjhhjshaklsj@gmail.com">
								<FaMailBulk />
							</a>
						</li>
					</ul>
				</div>
			</Slide>
		</Wrapper>
	);
};

const Wrapper = styled.footer`
	background: var(--clr-black);
	color: var(--clr-white);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-inline: auto;
	margin-block-end: 1rem;
	margin-block-start: 2rem;
	width: 95vw;
	text-align: center;
	font-size: 0.8rem;

	font-weight: 600;

	box-shadow: var(--light-shadow);
	padding: 3.5rem;
	border-radius: 10px;
	.contact {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
	a {
		color: var(--clr-primary-5);
	}
	.page-links {
		display: flex;
		flex-direction: column;
	}
	.links {
		ul {
			display: flex;
			li {
				margin: 1.5rem;
				font-size: 1.4rem;
			}
		}
	}
	span {
		color: var(--clr-primary-5);
	}
	h5 {
		color: var(--clr-white);
		margin: 0.1rem;

		font-weight: 400;
		text-transform: none;
		line-height: 1.25;
	}
	@media (min-width: 70rem) {
		flex-direction: column;
		width: 95vw;
		text-align: center;
		font-size: 0.9rem;
		gap: 3rem;
		font-weight: 600;
		font-size: 1rem;
		box-shadow: var(--light-shadow);

		border-radius: 10px;

		.contact {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 10rem;
			margin-inline-end: 10rem;
			section {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				a {
					color: var(--clr-primary-5);
				}
				div {
					display: flex;
					flex-direction: column;
				}
			}
		}
		.links {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			gap: 30rem;
			ul {
				display: flex;
				li {
					margin: 1.5rem;
					font-size: 1.4rem;
				}
			}
		}
	}
`;

export default Footer;
