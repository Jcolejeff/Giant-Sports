import React, { useState } from "react";
import styled from "styled-components";

const ControlledInputs = () => {
	const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
	const [people, setPeople] = useState([]);
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setPerson({ ...person, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (person.firstName && person.email && person.age) {
			const newPerson = { ...person, id: new Date().getTime().toString() };
			setPeople([...people, newPerson]);
			setPerson({ firstName: "", email: "", age: "" });
		}
	};
	return (
		<>
			<Wrapper className="form">
				<form>
					<div className="form-control">
						<label htmlFor="firstName">Name : </label>
						<input
							type="text"
							id="firstName"
							name="firstName"
							value={person.firstName}
							onChange={handleChange}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="email">Email : </label>
						<input
							type="email"
							id="email"
							name="email"
							value={person.email}
							onChange={handleChange}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="age">Age : </label>
						<input
							type="number"
							id="age"
							name="age"
							value={person.age}
							onChange={handleChange}
						/>
					</div>
					<button type="submit" className="btn" onClick={handleSubmit}>
						add person
					</button>
				</form>
			</Wrapper>
			<article>
				{people.map((person) => {
					const { id, firstName, email, age } = person;
					return (
						<div key={id} className="item">
							<h4>{firstName}</h4>
							<p>{email}</p>
							<p>{age}</p>
						</div>
					);
				})}
			</article>
		</>
	);
};

const Wrapper = styled.article`
	background: var(--clr-white);
	max-width: var(--fixed-width);
	margin: 0 auto;
	margin-bottom: 4rem;
	padding: 1rem 2rem;
	border-radius: var(--radius);

	input {
		background: var(--clr-grey-10);
		border-color: transparent;
		border-radius: var(--radius);
		padding: 0.25rem 0.5rem;
	}
	.form-control {
		margin: 0.5rem 0;
		display: flex;
		flex-direction: column;
		align-items: start;
	}
	button {
		display: inline-block;
		background: var(--clr-black);
		color: var(--clr-white);
		border-color: transparent;
		margin-top: 1rem;
		letter-spacing: var(--spacing);
		padding: 0.15rem 0.25rem;
		text-transform: capitalize;
		border-radius: var(--radius);
		cursor: pointer;
	}
	.btn {
		display: inline-block;
		background: var(--clr-primary-5);
		color: var(--clr-white);
		padding: 0.25rem 0.75rem;
		border-radius: var(--radius);
		border-color: transparent;
		text-transform: capitalize;
		font-size: 1rem;
		letter-spacing: var(--spacing);
		margin-top: 2rem;
		margin-left: 0.5rem;
		margin-right: 0.5rem;
		cursor: pointer;
		transition: var(--transition);
	}
	.btn:hover {
		background: var(--clr-primary-1);
		color: var(--clr-primary-5);
	}
	.item {
		background: var(--clr-white);
		display: flex;
		justify-content: space-between;
		max-width: var(--fixed-width);
		margin: 2rem auto;
		align-items: center;
		border-radius: var(--radius);
	}
	.item button,
	.item a {
		background: transparent;
		border-color: transparent;
		color: var(--clr-primary-5);
		letter-spacing: var(--spacing);
		cursor: pointer;
	}
	.item {
		padding: 1rem 2rem;
	}
`;

export default ControlledInputs;
