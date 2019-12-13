import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons'
import CreateDeck from './CreateDeck'
import CreateCard from './CreateCard'
import Overview from './Overview'
import { Quiz, UnsolvedQuiz } from './Quiz'
import Home from './Home'
import DeckDetails from './DeckDetails';
import QuestionOverview from './QuestionOverview';
import DeckSettings from './DeckSettings';


const Tabs = createBottomTabNavigator(
  {
    Home: { screen: (props) => <Overview {...props} /> },
    Advanced: { screen: (props) => <DeckSettings {...props} /> },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Advanced') {
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
  quiz: { screen: Quiz },
  unsolvedQuiz: { screen: UnsolvedQuiz },
  createDeck: { screen: CreateDeck },
  questionOverview: { screen: QuestionOverview }
});




export default createAppContainer(StackNavigator)