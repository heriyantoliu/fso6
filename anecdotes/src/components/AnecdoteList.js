import React from 'react';
import { connect } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = props => {
	const anecdotes = props.anecdotes;
	const filter = props.filter;

	const anecdotesToShow = anecdotes.filter(a =>
		a.content.toLowerCase().includes(filter.toLowerCase())
	);

	const vote = (id, content) => {
		props.addVote(id);
		props.setNotification(`you voted ${content}`);
		setTimeout(() => {
			props.setNotification(null);
		}, 5000);
	};
	return (
		<div>
			{anecdotesToShow.map(anecdote => (
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

const mapStateToProps = state => {
	return {
		anecdotes: state.anecdotes,
		filter: state.filter
	};
};

const mapDispatchToProps = {
	addVote,
	setNotification
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AnecdoteList);
