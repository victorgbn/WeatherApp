import React, {useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { setProvidesAudioData } from 'expo/build/AR';

export default function Previsions() {

    const [city, setCity] = useState('');
    const [desc, setDesc] = useState('');
    const [temp, setTemp] = useState('');
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [icon, setIcon] = useState('');
    const [prevDt, setPrevDt] = useState('');
    

    fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=toulouse&appid=008b40e40732624e015ce068cbf7ac72&units=metric&lang=fr`
            )
            .then((response) => response.json())
            .then(r => { 
            //    setCity(r.name) 
            //    setDesc(r.weather[0].description)
            //    setTemp(r.main.temp.toFixed(1))
            //    setMin(r.main.temp_min.toFixed(1))
            //    setMax(r.main.temp_max.toFixed(1))
            //    setIcon(r.weather[0].icon)
               setPrevDt(r.list[0].dt_txt)
            //    setCountry(getCountryName(r.sys.country))
            });

    return (
        <View>
            
            <View style={stylesHome.containerPrevision}>
            <Image source={require('../assets/sun.png')} style={stylesHome.imgPrevision}></Image>
            <Text style={stylesHome.textDegrePrevision}>{prevDt}</Text>
            <Text style={stylesHome.textDegrePrevision}>25º</Text>
            </View>

            <View style={stylesHome.containerPrevision}>
            <Image source={require('../assets/sun.png')} style={stylesHome.imgPrevision}></Image>
            <Text style={stylesHome.textDegrePrevision}>17:15</Text>
            <Text style={stylesHome.textDegrePrevision}>25º</Text>
            </View>

            <View style={stylesHome.containerPrevision}>
            <Image source={require('../assets/sun.png')} style={stylesHome.imgPrevision}></Image>
            <Text style={stylesHome.textDegrePrevision}>19:15</Text>
            <Text style={stylesHome.textDegrePrevision}>25º</Text>
            </View>

        </View>
    );
}

const stylesHome = StyleSheet.create({
    containerPrevision: {
        borderBottomColor : 'white',
        borderBottomWidth: 1,
        paddingBottom: 5,
        width: 265,
        marginTop: 10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    imgPrevision: {
        height: 30,
        width: 30,
    },
    textDegrePrevision: {
        color: 'white',
        fontSize: 20,
    }
})
