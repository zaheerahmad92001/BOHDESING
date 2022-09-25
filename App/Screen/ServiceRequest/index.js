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
    FlatList
} from 'react-native';
import {
    moderateScale,
    verticalModerateScale,
    verticalScale,
} from '../../Components/PixelRatio';
import { Card, Icon, Radio, Item } from 'native-base';
import Navigation from '../../Service/Navigation';

import Header from '../../Components/Header';
import { COLOR } from '../../Constants/Color';
import { FONT } from '../../Constants/Font';
import Slider from '../../Components/Slider';
const { height, width } = Dimensions.get('screen');




// create a component
const ServiceRequest = () => {




    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={COLOR.themeColour} />
            <Header />
            <View style={{ padding: moderateScale(15) }}>
                <Text style={styles.text}>Service Request: <Text style={styles.text2}>Sony ax088</Text></Text>

                <View style={styles.view}>
                    <Text style={[styles.text1,{width:'16%'}]}>Name</Text>
                </View>

                <TextInput style={styles.input} />


                <View style={styles.view}>
                    <Text style={[styles.text1,{width:'20%'}]}>Address</Text>
                </View>

                <TextInput style={[styles.input,{ height:moderateScale(90)}]} />


                <View style={styles.view}>
                    <Text style={[styles.text1,{width:'35%'}]}>Contact Number</Text>
                </View>

                <TextInput style={styles.input} />


                <View style={styles.view}>
                    <Text style={[styles.text1,{width:'58%'}]}>Reason for Service Request</Text>
                </View>

                <TextInput style={[styles.input,{ height:moderateScale(130)}]} />

            </View>




        </View >
    );
};

// define your stylesBigbasket
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    input: {
        borderColor: COLOR.fontColourLight,
        borderWidth: 1,
        borderRadius: moderateScale(5),
        marginBottom: moderateScale(20),
        color:COLOR.fontColour
    },
    text: {
        marginBottom: moderateScale(40),
        fontFamily:FONT.primaryFontLight,
        color:COLOR.fontColourLight
    },
    text1: {
        color: COLOR.fontColourLight,
        marginLeft: moderateScale(20),
        marginBottom: moderateScale(-8),
        backgroundColor:COLOR.white,
        zIndex:99999,
        textAlign:'center',
        fontSize:moderateScale(14)
    },
    view: {
    
     zIndex:99999   
    },
    text2:{
        fontFamily:FONT.primaryFont,
        color:COLOR.fontColour
    }


});

//make this component available to the app
export default ServiceRequest
