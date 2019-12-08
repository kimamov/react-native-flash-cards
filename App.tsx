import React, { useState, useReducer } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import CreateDeck from './components/CreateDeck'
import CreateCard from './components/CreateCard'
import Overview from './components/Overview'
import Home from './components/Home'

const Tabs = createBottomTabNavigator(
  {
    home: { screen: Home },
    overview: { screen: (props) => <Overview {...props} /> },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'overview') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#42f44b',
      inactiveTintColor: 'gray',
    },
  }
);

const StackNavigator = createStackNavigator({
  home: { screen: Tabs },
  createDeck: { screen: CreateDeck },
  createCard: { screen: CreateCard },
});




const MainNav = createAppContainer(StackNavigator)

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
const initialState = {
  decks: {
    cs: [],
    bio: [],
    math: []
  }

}

export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (

    <MainNav screenProps={{ state: state, dispatch: dispatch }} />

  );
}


