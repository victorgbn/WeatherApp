import React, {useState} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

// import * as Font from 'expo-font';
// import { setConfigurationAsync } from 'expo/build/AR';

// Font.loadAsync({
//   'Dosis': {
//     uri: require('../assets/fonts/Dosis.ttf'),
//   },
// })


export default function Home() {

    var d = new Date().getDate(); 
    var date = d.toString().padStart(2,'0');
    var m = new Date().getMonth() + 1; 
    var month = m.toString().padStart(2,'0'); //Ajoute 0 pour faire 2 carractères
    var year = new Date().getFullYear(); 
    var h = new Date().getHours(); 
    var heure = h.toString().padStart(2,'0');
    var mi = new Date().getMinutes();
    var minu = mi.toString().padStart(2,'0');

    const [city, setCity] = useState('');
    const [desc, setDesc] = useState('');
    const [temp, setTemp] = useState('');
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [iconHome, setIconHome] = useState('');

    const ville = "Toulouse";
    const apikey = "008b40e40732624e015ce068cbf7ac72"

fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apikey}&units=metric&lang=fr`
        )
        .then((response) => response.json())
        .then(r => { 
           setCity(r.name) 
           setDesc(r.weather[0].description)
           setTemp(r.main.temp.toFixed(1))
        //    setMin(r.main.temp_min.toFixed(1))
        //    setMax(r.main.temp_max.toFixed(1))
           setIconHome(r.weather[0].icon) 
        });


    return (

        <View>
            <View style={stylesHome.containerHeader}>
                <Text style={stylesHome.bigTitle}>Victor Météo</Text>
                <Text style={stylesHome.time}>le {date}/{month}/{year} à {heure}:{minu}</Text>
            </View>
            <View style={stylesHome.containerWeather}>
                <Text style={stylesHome.cityTitle}>{city}</Text>
                <Image style={stylesHome.imgLogo} source={{
                uri: `http://openweathermap.org/img/wn/${iconHome}@2x.png`,
                }}/>
                

                <Text style={stylesHome.bigTitleDegre}>{temp}ºC</Text>
                <Text style={stylesHome.infoWeather}>{desc}</Text>
            </View>
        </View>
    );
}

const stylesHome = StyleSheet.create({
    containerHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    bigTitle: {
        color: 'white',
        fontSize: 50,
        fontFamily: 'Dosis',
    },
    time: {
        color: 'white',
    },
    containerWeather: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor : 'white',
        borderWidth: 1,
        paddingRight: 50,
        paddingLeft: 50,
        paddingBottom: 20,
        paddingTop: 20,
        marginBottom: 30,
        borderRadius: 20,
    },
    imgLogo:{
        height: 100,
        width: 100,
    },
    bigTitleDegre: {
        color: 'white',
        textAlign :'center',
        marginTop: 10,
        fontSize: 70,
        fontFamily:'Dosis',
    },
    cityTitle: {
        color: 'white',
        fontSize: 40,
        marginBottom: 20,
        fontFamily:'Dosis',
    },
    infoWeather:{
        color: 'white',
        marginTop: 5,
    }
  });

// export default Home;



    