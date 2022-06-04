import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

import img1 from "./images/jannes-glas-0NaQQsLWLkA-unsplash.jpg";
import img2 from "./images/jannik-skorna-mY2ZHBU6GRk-unsplash.jpg";
import img3 from "./images/valentin-balan-k0aVMMZwqtU-unsplash.jpg";
import React from "react";
const sublinks = [
	{
		page: "Affiliation",
		links: [
			{ label: "Sports", icon: <FaBriefcase />, url: "/comingSoon" },
			{ label: "Education", icon: <FaBriefcase />, url: "/comingSoon" },
			{ label: "Agriculture", icon: <FaBriefcase />, url: "/comingSoon" },
			{ label: "Tourism", icon: <FaBriefcase />, url: "/comingSoon" },
		],
	},
	{
		page: "Membership",
		links: [
			{ label: "Participant", icon: <FaBook />, url: "/form" },
			{ label: "Mentorship", icon: <FaBook />, url: "/comingSoon" },
			{ label: "Partnership", icon: <FaBook />, url: "/comingSoon" },
			{ label: "Endorsement", icon: <FaBook />, url: "/comingSoon" },
		],
	},
];

export const data = [
	{
		id: 1,
		image: img1,
		name: "maria ferguson",
		title: "Giant Sport Plus",
		quote: " viral kombucha gentrify fanny pack raclette pok pok mustache.",
	},
	{
		id: 2,
		image: img2,
		name: "Giant Sport Plus",
		title: "Giant Sport Plus",
		quote:
			", chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
	},
	{
		id: 3,
		image: img3,
		name: "Giant Sport Plus",
		title: "Giant Sport Plus",
		quote: "clednal dkee cleanse hammock flexitarian ethical paleo.",
	},
];

export const services = [
	{
		id: 1,
		icon: <GiCompass />,
		title: "mission",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
	},
	{
		id: 2,
		icon: <GiDiamondHard />,
		title: "vision",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
	},
	{
		id: 3,
		icon: <GiStabbedNote />,
		title: "history",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
	},
];
export default sublinks;
