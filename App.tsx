import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import CreateDeck from './components/CreateDeck'
import Overview from './components/Overview'
import Home from './components/Home'

const Tabs = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Overview: { screen: (props)=><Overview {...props}/> },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Overview') {
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
  Home: { screen: Tabs },
  CreateDeck: { screen: CreateDeck },
});


const MainNav = createAppContainer(StackNavigator)


export default function App() {
  const [questions, setQuestions]=useState({
    cs: [],
    bio: [],
    math: []
  })

  return (

    <MainNav screenProps={{questions: questions, setQuestions: setQuestions}}/>

  );
}


