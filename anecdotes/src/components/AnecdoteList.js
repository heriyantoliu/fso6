import React from 'react';
import { connect } from 'react-redux';
import { addVote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = props => {
	const vote = anecdote => {
		props.addVote(anecdote);
		props.setNotification(`you voted ${anecdote.content}`);
		setTimeout(() => {
			props.setNotification(null);
		}, 5000);
	};
	return (
		<div>
			{props.anecdotesToShow.map(anecdote => (
				<div key={anecdote.id}>
					<div>{anecdote.content}</div>
					<div>
						has {anecdote.votes}
						<button onClick={() => vote(anecdote)}>vote</button>
					</div>
				</div>
			))}
		</div>
	);
};

const anecdotesToShow = ({ anecdotes, filter }) => {
	return anecdotes.filter(a =>
		a.content.toLowerCase().includes(filter.toLowerCase())
	);
};

const mapStateToProps = state => {
	return {
		anecdotesToShow: anecdotesToShow(state)
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
