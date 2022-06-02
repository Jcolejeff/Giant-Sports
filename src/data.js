import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

import React from "react";
const sublinks = [
	{
		page: "products",
		links: [
			{ label: "payment", icon: <FaCreditCard />, url: "/products" },
			{ label: "terminal", icon: <FaCreditCard />, url: "/products" },
			{ label: "connect", icon: <FaCreditCard />, url: "/products" },
		],
	},
	{
		page: "developers",
		links: [
			{ label: "plugins", icon: <FaBook />, url: "/products" },
			{ label: "libraries", icon: <FaBook />, url: "/products" },
			{ label: "help", icon: <FaBook />, url: "/products" },
			{ label: "billing", icon: <FaBook />, url: "/products" },
		],
	},
	{
		page: "company",
		links: [
			{ label: "about", icon: <FaBriefcase />, url: "/products" },
			{ label: "customers", icon: <FaBriefcase />, url: "/products" },
		],
	},
];

export const data = [
	{
		id: 1,
		image:
			"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
		name: "maria ferguson",
		title: "office manager",
		quote:
			"Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.",
	},
	{
		id: 2,
		image:
			"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
		name: "john doe",
		title: "regular guy",
		quote:
			"Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
	},
	{
		id: 3,
		image:
			"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",
		name: "peter smith",
		title: "product designer",
		quote:
			"Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.",
	},
	{
		id: 4,
		image:
			"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
		name: "susan andersen",
		title: "the boss",
		quote:
			"Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ",
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
