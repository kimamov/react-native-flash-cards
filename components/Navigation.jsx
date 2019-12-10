import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons'
import CreateDeck from './CreateDeck'
import CreateCard from './CreateCard'
import Overview from './Overview'
import Quiz from './Quiz'
import Home from './Home'

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
    quiz: {screen: Quiz},
    createDeck: {screen: CreateDeck}
  });
  
  
  
  
export default createAppContainer(StackNavigator)