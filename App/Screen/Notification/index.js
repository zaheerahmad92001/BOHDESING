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

const data = [
    {
        company: '10% off on Samsung Products',
        location: 'Buy any products worth more than 10000/-'
    },
    {
        company: '1000/- off on Apple products',
        location: 'Buy any apple product to avail the offer'
    },
   
    
];


// create a component
const Dealers = () => {

    const[wish,setwish]=useState(false)


    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={COLOR.themeColour} />
            <Header />
            
            <View style={{ marginHorizontal: moderateScale(15), flex: 1 }}>

                <FlatList
                    style={{ backgroundColor: '#fff', marginTop:moderateScale(5) }}
                    data={data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => {
                        return (

                            <Pressable style={{ marginVertical: moderateScale(5) }} >
                                <View style={styles.view1}>
                                    
                                    <View style={{ marginLeft: moderateScale(10) }}>
                                        <View style={styles.view2}>
                                           
                                                <Text
                                                    style={[styles.text, {
                                                        color: COLOR.fontColour,
                                                        fontSize: moderateScale(14),
                                                        marginBottom: moderateScale(5)
                                                    }]}
                                                >{item.company}</Text>
                                                <Text style={[styles.text, { color: COLOR.fontColour, marginBottom: moderateScale(5) }]}>{item.location}</Text>
                                        </View>
                                        
                                        
                                    </View>

                                </View>
                            </Pressable>

                        );
                    }}
                />
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
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: moderateScale(5),
        paddingHorizontal: moderateScale(5),
        marginTop: moderateScale(15),
        marginBottom: moderateScale(15),
        width: '85%',
        height: moderateScale(40),

    },
    input: {

        width: '90%',
        color:COLOR.fontColour
    },
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(15)
    },
    img: {
        borderColor: COLOR.themeColour,
        borderWidth: 1,
        paddingVertical: moderateScale(10),
        paddingHorizontal: moderateScale(5),
        borderRadius: moderateScale(5)
    },
    text: {
        fontFamily: FONT.primaryFontLight,
        fontSize: moderateScale(11),
        color: COLOR.fontColourLight
    },
    view1: {
        flexDirection: 'row',

        alignItems: 'center',
        padding: moderateScale(10),
        backgroundColor: COLOR.white,
        elevation: 3,
        width: '98%',
        alignSelf: 'center'
    },
    // view2: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     width: '80%'
    // },
    view3: {
        flexDirection: 'row',
        // width: '24%',
        justifyContent: 'space-between'
    }


});

//make this component available to the app
export default Dealers
