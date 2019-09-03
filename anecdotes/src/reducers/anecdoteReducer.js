const reducer = (state = [], action) => {
	switch (action.type) {
		case 'NEW_ANECDOTES':
			return [...state, action.data];
		case 'INIT_ANECDOTES':
			return action.data;
		case 'VOTE':
			const id = action.data.id;
			const anecdotesToVote = state.find(a => a.id === id);
			const changedAnecdotes = {
				...anecdotesToVote,
				votes: anecdotesToVote.votes + 1
			};
			return state
				.map(anecdotes => (anecdotes.id !== id ? anecdotes : changedAnecdotes))
				.sort((a, b) => b.votes - a.votes);
		default:
			return state;
	}
};

export const addVote = id => {
	return {
		type: 'VOTE',
		data: {
			id
		}
	};
};

export const createAnecdotes = data => {
	return {
		type: 'NEW_ANECDOTES',
		data
	};
};

export const initializeAnecdotes = anecdotes => {
	return {
		type: 'INIT_ANECDOTES',
		data: anecdotes
	};
};

export default reducer;
