import React from 'react';
import AnecdotesForm from './components/AnecdotesForm';
import { addVote } from './reducers/anecdoteReducer';

const App = props => {
	const anecdotes = props.store.getState();

	const vote = id => {
		props.store.dispatch(addVote(id));
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
			<AnecdotesForm store={props.store} />
		</div>
	);
};

export default App;
