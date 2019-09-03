import React from 'react';
import AnecdotesForm from './components/AnecdotesForm';
import AnecdoteList from './components/AnecdoteList';

const App = props => {
	return (
		<div>
			<h2>Anecdotes</h2>
			<AnecdoteList store={props.store} />
			<AnecdotesForm store={props.store} />
		</div>
	);
};

export default App;
