import React from 'react';
import { StyleSheet, LogBox } from 'react-native';
import RollContainer from './components/RollContainer/RollContainer'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HistoryContainer from './components/HistoryContainer/HistoryContainer'
import Ionicons from 'react-native-vector-icons/Ionicons';
import LandingContainer from './components/LandingContainer/LandingContainer'

LogBox.ignoreLogs(['Setting a timer']);
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === 'Roll') {
              iconName = focused ? 'albums' : 'albums-outline';
            } else if (route.name === 'History') {
              iconName = focused ? 'ios-archive' : 'ios-archive-outline';
            } else if (route.name === 'Join') {
              iconName = focused ? 'home-outline' : 'home';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
          
        <Tab.Screen name="Join" component={LandingContainer} />
        <Tab.Screen name="Roll" component={RollContainer} />
        <Tab.Screen name="History" component={HistoryContainer} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({

});
