import React from 'react';
import { addVote, createAnecdotes } from './reducers/anecdoteReducer';

const App = props => {
	const anecdotes = props.store.getState();

	const vote = id => {
		props.store.dispatch(addVote(id));
	};

	const addAnecdotes = event => {
		event.preventDefault();
		const content = event.target.anecdotes.value;
		props.store.dispatch(createAnecdotes(content));
		event.target.anecdotes.value = '';
	};

	return (
		<div>
			<h2>Anecdotes</h2>
			{anecdotes.map(anecdote => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => vote(anecdote.id)}>vote</button>
					</div>
				</div>
			))}
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

export default App;
