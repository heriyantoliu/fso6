import React from 'react';
import { createAnecdotes } from '../reducers/anecdoteReducer';

const AnecdotesForm = props => {
	const addAnecdotes = event => {
		event.preventDefault();
		const content = event.target.anecdotes.value;
		props.store.dispatch(createAnecdotes(content));
		event.target.anecdotes.value = '';
	};
	return (
		<div>
			<h2>create new</h2>
			<form onSubmit={addAnecdotes}>
				<div>
					<input name='anecdotes' />
				</div>
				<button type='submit'>create</button>
			</form>
		</div>
	);
};

export default AnecdotesForm;
