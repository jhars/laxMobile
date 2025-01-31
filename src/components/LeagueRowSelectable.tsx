import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Button } from '@react-navigation/elements';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const LeagueRowSelectable = ({league, disabled, teamname}) => {
  const navigation = useNavigation();

  console.log(`leagueId: ${league.id}, leagueName: ${league.title}, teamname: ${teamname}`)

	return(
		<View style={styles.container}>
      		<Button onPress={() => navigation.navigate('CreateNewTeamConfirmation', {leagueID: league.id, leagueName: league.title, teamname: teamname})}>{league.title}</Button>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    paddingTop:25,
    padding:5,
  },
});

export default LeagueRowSelectable;