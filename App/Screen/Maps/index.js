import React, { Component, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
    Image,
    Dimensions,
    StatusBar,
    ScrollView,
} from 'react-native';
import {
    moderateScale,
    verticalModerateScale,
    verticalScale,
} from '../../Components/PixelRatio';
import { Card, Icon, Radio, ListItem } from 'native-base';
import Navigation from '../../Service/Navigation';

import Header from '../../Components/Header';
import { COLOR } from '../../Constants/Color';
import { FONT } from '../../Constants/Font';
import Slider from '../../Components/Slider';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
const { height, width } = Dimensions.get('screen');


// create a component
const Maps = () => {



    return (

        <View style={styles.contain}>
            <Header />
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: 37.78825,
                            longitude: -122.4324
                        }}
                        
                    />
                </MapView>
            </View>
        </View >
    );
};

// define your stylesBigbasket
const styles = StyleSheet.create({
    contain: {
        flex: 1,

        backgroundColor: "#fff"
    },
    container: {
        padding: moderateScale(15),
        height: height,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

//make this component available to the app
export default Maps
