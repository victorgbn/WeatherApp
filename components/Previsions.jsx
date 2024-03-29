import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { setProvidesAudioData } from 'expo/build/AR';

// import * as Font from 'expo-font';
// import { setConfigurationAsync } from 'expo/build/AR';

// Font.loadAsync({
//     'Dosis': {
//       uri: require('../assets/fonts/Dosis.ttf'),
//     },
//   })

export default function Previsions() {

    const [icon, setIcon] = useState('');
    const [icon1, setIcon1] = useState('');
    const [icon2, setIcon2] = useState('');

    const [prevDt, setPrevDt] = useState('');
    const [prevDt1, setPrevDt1] = useState('');
    const [prevDt2, setPrevDt2] = useState('');
    const [prevTemp, setPrevTemp] = useState('');
    const [prevTemp1, setPrevTemp1] = useState('');
    const [prevTemp2, setPrevTemp2] = useState('');


    const ville = "Toulouse";
    const apikey = "008b40e40732624e015ce068cbf7ac72";

    fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${ville}&appid=${apikey}&units=metric&lang=fr`
    )
        .then((response) => response.json())
        .then(r => {
            setPrevDt(r.list[0].dt_txt)
            setPrevDt1(r.list[1].dt_txt)
            setPrevDt2(r.list[2].dt_txt)
            setPrevTemp(r.list[5].main.temp)
            setPrevTemp1(r.list[10].main.temp)
            setPrevTemp2(r.list[15].main.temp)

            setIcon(r.list[5].weather[0].icon)
            setIcon1(r.list[10].weather[0].icon)
            setIcon2(r.list[15].weather[0].icon)
        });

    return (
        <View>
            <View style={stylesHome.containerPrevision}>
                <Image style={stylesHome.imgPrevision} source={{
                    uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
                }} />
                <Text style={stylesHome.textDegrePrevision}>{prevDt}</Text>
                <Text style={stylesHome.textDegrePrevision}>{prevTemp}ºC</Text>
            </View>

            <View style={stylesHome.containerPrevision}>
                <Image style={stylesHome.imgPrevision} source={{
                    uri: `http://openweathermap.org/img/wn/${icon1}@2x.png`,
                }} />
                <Text style={stylesHome.textDegrePrevision}>{prevDt1}</Text>
                <Text style={stylesHome.textDegrePrevision}>{prevTemp1}ºC</Text>
            </View>

            <View style={stylesHome.containerPrevision}>
                <Image style={stylesHome.imgPrevision} source={{
                    uri: `http://openweathermap.org/img/wn/${icon2}@2x.png`,
                }} />
                <Text style={stylesHome.textDegrePrevision}>{prevDt2}</Text>
                <Text style={stylesHome.textDegrePrevision}>{prevTemp2}ºC</Text>
            </View>

        </View>
    );
}

const stylesHome = StyleSheet.create({
    containerPrevision: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        paddingBottom: 5,
        width: 265,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imgPrevision: {
        height: 30,
        width: 30,
    },
    textDegrePrevision: {
        color: 'white',
        fontSize: 13,
    }
})
