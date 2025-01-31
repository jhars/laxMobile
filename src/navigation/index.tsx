import React, {useEffect} from 'react';
import {useDispatch } from 'react-redux';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MyTeamsScreen from '../screens/MyTeamsScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import TeamPlayersScreen from '../screens/TeamPlayersScreen';
import CreateNewTeamScreen from '../screens/CreateNewTeamScreen';
import CreateNewTeamConfirmation from '../screens/CreateNewTeamConfirmation';
import AllPlayersScreen from '../screens/AllPlayersScreen';
import LeaguesScreen from '../screens/LeaguesScreen';
import LeagueTeamsScreen from '../screens/LeagueTeamsScreen';

import {currentUserAction} from '../actions/currentUserAction';

const Drawer = createDrawerNavigator();
const LeagueStack = createNativeStackNavigator();
const TeamsStack = createNativeStackNavigator();

export const Navigation = () => {
// const DrawerNavigator = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(currentUserAction());
    }, []);

  function LeaguesNavigator() {
    return (
      <LeagueStack.Navigator>
        <LeagueStack.Screen options={{ headerShown: false }} name="LeaguesScreen" component={LeaguesScreen} />
        <LeagueStack.Screen name="LeagueTeamsScreen" component={LeagueTeamsScreen} />
      </LeagueStack.Navigator>
    );
  }

  function MyTeamsNavigator() {
    return (
      <TeamsStack.Navigator>
        <TeamsStack.Screen options={{ headerShown: false }} name="UserTeams" component={MyTeamsScreen} />
        <TeamsStack.Screen name="TeamPlayersScreen" component={TeamPlayersScreen} />
        <TeamsStack.Screen name="CreateNewTeamScreen" component={CreateNewTeamScreen} />
        <TeamsStack.Screen name="CreateNewTeamConfirmation" component={CreateNewTeamConfirmation} />
      </TeamsStack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="My Teams" component={MyTeamsNavigator} />
        <Drawer.Screen name="Leagues" component={LeaguesNavigator} />
        <Drawer.Screen name="Players" component={AllPlayersScreen} />
        <Drawer.Screen name="Account" component={MyAccountScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// export const Navigation = createStaticNavigation(MyDrawer);