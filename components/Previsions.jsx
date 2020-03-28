import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function Previsions() {
    return (
        <View>
            
            <View style={stylesHome.containerPrevision}>
            <Image source={require('../assets/sun.png')} style={stylesHome.imgPrevision}></Image>
            <Text style={stylesHome.textDegrePrevision}>15:15</Text>
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
