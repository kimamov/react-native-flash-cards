import React, { useReducer, useEffect } from 'react';
import Navigation from './components/Navigation'
import initialState from './state/initialState'
import { AppState, AsyncStorage } from 'react-native';
import { askPermissions, scheduleNotification } from "./NotificationService.js"

let dataRecovered = false;
let stateWasChanged = false;

function reducer(state, action) {
  stateWasChanged = true;
  switch (action.type) {
    case 'createDeck':
      if (state.decks[action.payload]) return state;
      action.onCreate()
      return { ...state, decks: { ...state.decks, [action.payload]: { questions: [], solved: 0 } } };
    case 'addCard':
      let questions = [...state.decks[action.deckName].questions, action.payload];
      return { ...state, decks: { ...state.decks, [action.deckName]: { ...state.decks[action.deckName], questions: questions } } };
    case 'solveCard': {
      let questions = [...state.decks[action.deckName].questions];
      return { ...state, decks: { ...state.decks, [action.deckName]: { ...state.decks[action.deckName], questions: questions.map(i => i.id === action.questionId ? { ...i, solved: action.payload } : i) } } };
    }
    case 'setScore': {
      let score = 0;
      state.decks[action.deckName].questions.map(i => {
        if (i.solved) score++;
      });
      /* reset the notification timer */
      scheduleNotification()

      return { ...state, decks: { ...state.decks, [action.deckName]: { ...state.decks[action.deckName], solved: score } } };
    }
    case 'deleteDeck': {
      if (!state.decks[action.payload]) return state;
      const { [action.payload]: value, ...rest } = state.decks;
      return { ...state, decks: { ...rest } };
    }
    case 'recoverState': {
      if (action.payload && action.payload.decks) {
        /* console.log("recovered this")
        console.log(action.payload); */
        dataRecovered = true;
        return action.payload
      } return state;
    }
    default:
      return state;
  }
}




export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const storeData = async () => {
    if (state && stateWasChanged) {
      try {

        await AsyncStorage.setItem('flashCardsStore', JSON.stringify(state));

      } catch (error) {
        console.log(error)
      }
    }
  };

  const retrieveData = async () => {
    if (state && state.decks) {
      try {
        const value = await AsyncStorage.getItem('flashCardsStore');
        if (value !== null) {
          /* console.log(value); */
          const data = JSON.parse(value);
          if (data.decks) {
            dispatch({
              type: "recoverState",
              payload: data
            })
          }

        }
        dataRecovered = true;
      } catch (error) {
        console.log(error)
      }
    }
  };

  const handleAppStateChange = (nextAppState) => {
    if (nextAppState === 'background' || nextAppState === 'inactive') {
      storeData();
    }
  }

  useEffect(() => {
    stateWasChanged = false;
    dataRecovered = false;
    retrieveData()
    askPermissions()
    scheduleNotification()
    return () => {
    };
  }, [])

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange)
    if (state && state.decks && dataRecovered) {
      storeData()
    }
    return () => {
      AppState.removeEventListener('change', handleAppStateChange)

    };
  }, [state])

  return (

    <Navigation screenProps={{ state: state, dispatch: dispatch }} />

  );
}


