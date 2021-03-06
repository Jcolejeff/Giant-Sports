import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Submenu = () => {
	const {
		isSubmenuOpen,
		page: { page, links },
		location,
		closeSubmenu,
	} = useGlobalContext();
	const container = useRef(null);
	const [columns, setColumns] = useState("col-2");
	useEffect(() => {
		setColumns("col-2");
		const submenu = container.current;
		const { center, bottom } = location;
		submenu.style.left = `${center}px`;
		submenu.style.top = `${bottom}px`;
		console.log(links);
		if (links.length === 3) {
			setColumns("col-3");
		}
		if (links.length > 3) {
			setColumns("col-4");
		}
	}, [page, location, links]);
	return (
		<SubmenuWrapper>
			<aside
				className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
				ref={container}
			>
				<section>
					<h4>{page}</h4>
					<div className={`submenu-center ${columns}`}>
						{links.map((link, index) => {
							const { url, icon, label } = link;
							return (
								<Link onClick={closeSubmenu} key={index} to={url}>
									{icon}
									{label}
								</Link>
							);
						})}
					</div>
				</section>
			</aside>
		</SubmenuWrapper>
	);
};

export default Submenu;

const SubmenuWrapper = styled.div`
	.submenu {
		background: var(--clr-white);
		box-shadow: var(--dark-shadow);
		position: absolute;
		top: 4rem;
		left: 50%;
		transform: translateX(-50%);
		z-index: 3;
		display: none;
		padding: 2rem;
		border-radius: var(--radius);
		transition: var(--transition);
	}
	.submenu::before {
		content: "";
		display: block;
		width: 0;
		height: 0;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-bottom: 5px solid var(--clr-white);
		position: absolute;
		top: -5px;
		left: 50%;
		transform: translateX(-50%);
	}

	.submenu.show {
		display: block;
	}

	.submenu-center {
		display: grid;
		gap: 0.25rem 2rem;
	}
	.col-2 {
		grid-template-columns: repeat(2, 1fr);
	}
	.col-3 {
		grid-template-columns: repeat(3, 1fr);
	}
	.col-4 {
		grid-template-columns: repeat(4, 1fr);
	}
	.submenu h4 {
		margin-bottom: 1.5rem;
	}
	.submenu-center a {
		width: 10rem;
		display: block;
		color: var(--clr-grey-1);
		text-transform: capitalize;
		display: flex;
		align-items: center;
	}
	.submenu-center svg {
		color: var(--clr-grey-5);
		margin-right: 1rem;
	}
`;
