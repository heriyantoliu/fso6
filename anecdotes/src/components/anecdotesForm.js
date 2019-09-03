import React from 'react';
import { connect } from 'react-redux';
import { createAnecdotes } from '../reducers/anecdoteReducer';
import anecdoteService from '../services/anecdotes';

const AnecdotesForm = props => {
	const addAnecdotes = async event => {
		event.preventDefault();
		const content = event.target.anecdotes.value;
		event.target.anecdotes.value = '';
		const newAnecdote = await anecdoteService.createNew(content);
		props.createAnecdotes(newAnecdote);
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

export default connect(
	null,
	{ createAnecdotes }
)(AnecdotesForm);
