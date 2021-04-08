import React from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

const mylist = [
    {
      "date": "08/04",
      "weekday": "Qui",
      "max": 23,
      "min": 15,
      "description": "Ensolarado",
      "condition": "clear_day"
    },
    {
      "date": "09/04",
      "weekday": "Sex",
      "max": 26,
      "min": 13,
      "description": "Ensolarado",
      "condition": "clear_day"
    },
    {
      "date": "10/04",
      "weekday": "Sáb",
      "max": 26,
      "min": 15,
      "description": "Ensolarado",
      "condition": "clear_day"
    },
    {
      "date": "11/04",
      "weekday": "Dom",
      "max": 27,
      "min": 15,
      "description": "Ensolarado",
      "condition": "clear_day"
    },
    {
      "date": "12/04",
      "weekday": "Seg",
      "max": 23,
      "min": 17,
      "description": "Trovoadas dispersas",
      "condition": "storm"
    },
    {
      "date": "13/04",
      "weekday": "Ter",
      "max": 21,
      "min": 16,
      "description": "Tempo nublado",
      "condition": "cloud"
    },
    {
      "date": "14/04",
      "weekday": "Qua",
      "max": 21,
      "min": 15,
      "description": "Tempo nublado",
      "condition": "cloud"
    },
    {
      "date": "15/04",
      "weekday": "Qui",
      "max": 22,
      "min": 14,
      "description": "Parcialmente nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "16/04",
      "weekday": "Sex",
      "max": 22,
      "min": 13,
      "description": "Parcialmente nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "17/04",
      "weekday": "Sáb",
      "max": 20,
      "min": 13,
      "description": "Trovoadas dispersas",
      "condition": "storm"
    }
  ];

export default function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <Menu/>
            <Header/>
            <Conditions/>
            <FlatList
                horizontal={true}
                contentContainerStyle={{paddingBottom: '5%'}}
                style={styles.list}
                data={mylist}
                keyExtractor={item => item.date}
                renderItem={({item}) => <Forecast data={item} />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f0ff',
        paddingTop: '5%'
    },
    list: {
        marginTop: 10,
        marginLeft: 10
    }
});