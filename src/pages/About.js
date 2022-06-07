import React from "react";
import styled from "styled-components";
import { Zoom, Slide } from "react-awesome-reveal";
import { useGlobalContext } from "../context";

const About = () => {
	const { closeSubmenu } = useGlobalContext();

	return (
		<Wrapper onMouseOver={closeSubmenu}>
			<Zoom>
				<section>
					<h3>ABOUT</h3>
					<h4>GIANT SPORTS PLUS</h4>{" "}
					<p>
						With major subsidiary Ghis (Giant Hills Sports) Concept Ethics &
						Value Multi Purpose Cooperative Society Limited Group. Our mission
						is to use sports, education and creativity as a platform to provide
						an alternative pathway to identify, nurture and develop viable
						talent amongst children, young adults and youths in synergy with
						local communities, parents, schools, coaches, managers and
						regulatory bodies in the world. We engage world class partners and
						experts in the industry to offer at your doorstep digital and
						desired community mentoring experience, practical interactive skill
						learning, shape mind set, instill discipline for mutual benefit,
						harness, sustain creative and productive ability for a peaceful,
						united and egalitarian society. Are you curious to be a part of a
						global community innovation that is creating a group of all round
						self reliant personalities in all spheres of life. Experience
						Giantsportsplus and become a part of our global community for
						positive outcomes.
					</p>
				</section>
			</Zoom>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin-inline: auto;
	margin-block-end: 3rem;
	background-color: hsl(205, 54%, 87%);
	width: 90vw;
	text-align: center;
	font-size: 1.2rem;
	font-weight: 400;
	word-spacing: 3px;
	box-shadow: var(--light-shadow);
	padding: 1.4rem;
	border-radius: 10px;

	@media (min-width: 40rem) {
		width: 80vw;
		font-weight: 400;
		font-size: 1.5rem;
		padding: 3.5rem;
		margin-block-start: 3rem;
		h3 {
			font-size: 1.3rem;
		}
	}
`;

export default About;
