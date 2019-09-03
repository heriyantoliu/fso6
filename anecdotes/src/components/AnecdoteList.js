import React from 'react';
import { addVote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = ({ store }) => {
	const anecdotes = store.getState().anecdotes;

	const vote = (id, content) => {
		store.dispatch(addVote(id));
		store.dispatch(setNotification(`you voted ${content}`));
		setTimeout(() => {
			store.dispatch(setNotification(null));
		}, 5000);
	};
	return (
		<div>
			{anecdotes.map(anecdote => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => vote(anecdote.id, anecdote.content)}>
							vote
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default AnecdoteList;
