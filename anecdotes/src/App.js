import React from 'react';
import AnecdotesForm from './components/AnecdotesForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import Filter from './components/Filter';

const App = props => {
	return (
		<div>
			<Notification store={props.store} />
			<Filter store={props.store} />
			<h2>Anecdotes</h2>
			<AnecdoteList store={props.store} />
			<AnecdotesForm store={props.store} />
		</div>
	);
};

export default App;
