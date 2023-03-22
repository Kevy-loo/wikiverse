import React, { useState } from "react";
import apiURL from "../api";

export const Form = ({ addBtn }) => {
	let book = {
		title: "",
		content: "",
		name: "",
		email: "",
		tags: "",
	};

	const [articleData, setArticleData] = useState(book);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch(`${apiURL}/wiki`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(articleData),
		});

		setArticleData({
			title: "",
			content: "",
			name: "",
			email: "",
			tags: "",
		});

		addBtn();
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setArticleData((data) => ({
			...data,
			[name]: value,
		}));
	};

	return (
		<div>
			<h2>Add A Page</h2>
			<form onSubmit={handleSubmit}>
				<input
					placeholder="Title"
					name="title"
					type="text"
					value={articleData.title}
					onChange={handleChange}
				></input>
				<br />
				<input
					placeholder="Article Content"
					name="content"
					type="text"
					value={articleData.content}
					onChange={handleChange}
				></input>
				<br />
				<input
					placeholder="Author Name"
					name="name"
					type="text"
					value={articleData.name}
					onChange={handleChange}
				></input>
				<br />
				<input
					placeholder="Author Email"
					name="email"
					type="email"
					value={articleData.email}
					onChange={handleChange}
				></input>
				<br />
				<input
					placeholder="Tags"
					name="tags"
					value={articleData.tags}
					onChange={handleChange}
				></input>
				<br />
				<button type="submit">Create Page</button>
			</form>
		</div>
	);
};
