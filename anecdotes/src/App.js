import React from 'react';
import AnecdotesForm from './components/AnecdotesForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import Filter from './components/Filter';

const App = props => {
	return (
		<div>
			<Notification />
			<Filter />
			<h2>Anecdotes</h2>
			<AnecdoteList />
			<AnecdotesForm />
		</div>
	);
};

export default App;
