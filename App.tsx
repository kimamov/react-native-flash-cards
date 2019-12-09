import React, { useReducer } from 'react';
import Navigation from './components/Navigation'
import initialState from './state/initialState'


function reducer(state, action) {
  switch (action.type) {
    case 'createDeck':
      return { ...state, decks: {...state.decks, [action.payload]: []} };
    case 'addCard':
      let questions=[...state.decks[action.deckName], action.payload];
      console.log(state)
      return { ...state, decks: {...state.decks, [action.deckName]: questions} };
    default:
      return state;
  }
}


export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (

    <Navigation screenProps={{ state: state, dispatch: dispatch }} />

  );
}


