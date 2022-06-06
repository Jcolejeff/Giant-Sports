import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const ErrorPage = () => {
	const { closeSubmenu } = useGlobalContext();

	return (
		<Wrapper className="page-100" onMouseOver={closeSubmenu}>
			<section>
				<h1>404</h1>
				<h3>Sorry,the page you tried cannot be found</h3>
				<Link to="/" className="btn">
					back home
				</Link>
			</section>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	background: var(--clr-primary-10);
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	h1 {
		font-size: 10rem;
	}
	h3 {
		text-transform: none;
		margin-bottom: 2rem;
	}
	.btn {
		padding: 0.75rem 1.5rem;
		font-size: 1rem;
		background: var(--clr-primary-9);
		color: black;
		border-radius: var(--radius);
		font-weight: 500;
	}
`;

export default ErrorPage;
