import React from "react";
import logo from "../images/logo55.jpg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Navbar = () => {
	const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
	const displaySubmenu = (e) => {
		const page = e.target.textContent;
		const tempBtn = e.target.getBoundingClientRect();
		const center = (tempBtn.left + tempBtn.right) / 2;
		const bottom = tempBtn.bottom - 3;
		openSubmenu(page, { center, bottom });
	};
	const handleSubmenu = (e) => {
		if (!e.target.classList.contains("link-btn")) {
			closeSubmenu();
		}
	};
	return (
		<Nav>
			<nav className="nav" onMouseOver={handleSubmenu}>
				<div className="nav-center">
					<div className="nav-header">
						<Link to="/">
							<img src={logo} className="nav-logo" alt="" />
						</Link>
						<button className="btn toggle-btn" onClick={openSidebar}>
							<FaBars />
						</button>
					</div>
					<ul className="nav-links">
						<li>
							<Link to="/" className="link-btn-1">
								Home
							</Link>
						</li>
						<li>
							<Link to="/comingSoon" className="link-btn-1">
								Events
							</Link>
						</li>
						<li>
							<button className="link-btn" onMouseOver={displaySubmenu}>
								Membership
							</button>
						</li>
						<li>
							<button className="link-btn" onMouseOver={displaySubmenu}>
								Affiliation
							</button>
						</li>
						<li>
							<Link to="/comingSoon" className="link-btn-1">
								Gallery
							</Link>
						</li>
						<li>
							<Link to="/about" className="link-btn-1">
								About Us
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</Nav>
	);
};

export default Navbar;

const Nav = styled.nav`
	background-color: black;

	.nav {
		height: 5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: transparent;
		position: relative;
		z-index: 1;
	}
	.nav-center {
		width: 90vw;
		max-width: var(--max-width);
	}
	.nav-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.btn {
		font-size: 1rem;
		padding: 0.25rem 0.75rem;
		border-radius: var(--radius);
		border-color: transparent;
		color: white;
		background: var(--clr-black);
		cursor: pointer;
		transition: var(--transition);
	}
	.btn:hover {
		background: var(--clr-grey-5);
	}
	.nav-links {
		display: none;
	}
	.signin-btn {
		display: none;
	}
	.nav-logo {
		width: 7.5rem;
	}
	/* nav media query */
	@media screen and (min-width: 800px) {
		.nav-center {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.toggle-btn {
			display: none;
		}
		.signin-btn {
			display: inline-block;
		}
		.nav-links {
			display: block;
			justify-self: center;
			display: grid;
			grid-template-columns: repeat(6, 1fr);
			text-align: center;
			height: 60%;
			display: grid;
			align-items: center;
			justify-items: center;
		}
		.nav-links li {
			height: 100%;
		}
		.link-btn {
			height: 100%;
			background: transparent;
			border-color: transparent;
			font-size: 0.9rem;
			color: white;
			text-transform: capitalize;
			letter-spacing: 1px;
			width: 7rem;
			justify-items: center;
		}
		.link-btn-1 {
			height: 100%;
			background: transparent;
			border-color: transparent;
			font-size: 0.9rem;
			color: white;
			text-transform: capitalize;
			letter-spacing: 1px;
			width: 6rem;
			justify-items: center;
		}
	}
`;
