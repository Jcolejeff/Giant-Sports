import React from "react";
import logo from "../images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import styled from "styled-components";
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
						<img src={logo} className="nav-logo" alt="" />
						<button className="btn toggle-btn" onClick={openSidebar}>
							<FaBars />
						</button>
					</div>
					<ul className="nav-links">
						<li>
							<button className="link-btn" onMouseOver={displaySubmenu}>
								products
							</button>
						</li>
						<li>
							<button className="link-btn" onMouseOver={displaySubmenu}>
								developers
							</button>
						</li>
						<li>
							<button className="link-btn" onMouseOver={displaySubmenu}>
								company
							</button>
						</li>
					</ul>
					<button className="btn signin-btn">Sign in</button>
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

	/* nav media query */
	@media screen and (min-width: 800px) {
		.nav-center {
			display: grid;
			grid-template-columns: auto 1fr auto;
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
			grid-template-columns: 1fr 1fr 1fr;
			text-align: center;
			height: 100%;
			display: grid;
			align-items: center;
		}
		.nav-links li {
			height: 100%;
		}
		.link-btn {
			height: 100%;
			background: transparent;
			border-color: transparent;
			font-size: 1.1rem;
			color: white;
			text-transform: capitalize;
			letter-spacing: 1px;
			width: 10rem;
		}
	}
`;
