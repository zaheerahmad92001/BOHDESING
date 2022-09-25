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
const ReceiptDetails = () => {




    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={COLOR.themeColour} />
            <Header />
            <View style={{ padding: moderateScale(15) }}>
                <View style={styles.first}>
                    <Text style={[styles.textt,{color:COLOR.themeColour, borderBottomWidth:2, borderBottomColor:COLOR.themeColour}]}>Receipt</Text>
                    <Pressable  onPress={() => { Navigation.navigate('WarrantyDetails')}} >
                    <Text style={styles.textt}>Warranty</Text>
                    </Pressable>
                    <Text style={styles.textt}>Exchange</Text>
                    <Text style={styles.textt}>Contracts</Text>
                </View>

                <View style={[styles.view,{marginBottom:moderateScale(35)}]}>
                    <Image
                        source={require('../../Assets/logo.png')}
                        style={{ height: moderateScale(45), width: moderateScale(45) }}
                    />
                    <Text style={[styles.text,{color:COLOR.themeColour, fontSize:moderateScale(14)}]}>12-02-2021</Text>
                </View>
                <View style={styles.view}>
                    <Text style={styles.text}>Vendor Name:</Text>
                    <Text style={styles.text1}>abcdes</Text>
                </View>
                <View style={styles.view}>
                    <Text style={styles.text}>Address:</Text>
                    <Text style={styles.text1}>abcdes</Text>
                </View>
                <View style={styles.view}>
                    <Text style={styles.text}>Registration Number:</Text>
                    <Text style={styles.text1}>abcdes</Text>
                </View>
                <View style={styles.view}>
                    <Text style={styles.text}>SKU:</Text>
                    <Text style={styles.text1}>abcdes</Text>
                </View>
                <View style={styles.view}>
                    <Text style={styles.text}>Manufactured:</Text>
                    <Text style={styles.text1}>abcdes</Text>
                </View> 
                <View style={styles.view}>
                    <Text style={styles.text}>Warranty:</Text>
                    <Text style={styles.text1}>abcdes</Text>
                </View>
                <View style={styles.view}>
                    <Text style={styles.text}>Country of Origin:</Text>
                    <Text style={styles.text1}>abcdes</Text>
                </View>
                <View style={[styles.view,{marginTop:moderateScale(20)}]}>
                    <Text style={styles.text2}>Particulars</Text>
                    <Text style={styles.text2}>Amount(Rs)</Text>
                </View>
                <View style={styles.view}>
                    <Text style={styles.text}>Television</Text>
                    <Text style={[styles.text2,{textAlign:'left', width:'24%'}]}>19000</Text>
                </View>
                <View style={styles.view}>
                    <Text style={styles.text}>MRP@23000</Text>
                    
                </View>
                <View style={styles.view}>
                    <Text style={styles.text}>Discount@10%</Text>
                    <Text style={[styles.text,{textAlign:'left', width:'25%'}]}>SCGST@5%</Text>
                    <Text style={[styles.text2,{textAlign:'left', width:'24%'}]}>950</Text>
                </View>
                <View style={[styles.view,{borderBottomColor:COLOR.fontColourLight, borderBottomWidth:1, paddingBottom:moderateScale(10)}]}>
                    <Text style={styles.text}>(Rs.2300)</Text>
                    <Text style={[styles.text,{textAlign:'left'}]}>GST@5%</Text>
                    <Text style={[styles.text2,{textAlign:'left', width:'24%'}]}>950</Text>
                </View>
                <View style={styles.view}>
                    <Text style={styles.text2}>Total</Text>
                    <Text style={[styles.text2,{textAlign:'left', width:'24%'}]}>Rs.20700</Text>
                </View>

                <Text style={[styles.text,{marginTop:moderateScale(20)}]}>This is a e-receipt created by the dealer.
                This is meant for the convenience of the customer in order to view the details of the transaction
                </Text>

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
    view:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:moderateScale(10)
    },
    text:{
        fontFamily:FONT.primaryFontLight,
        color:COLOR.fontColourLight
    },
    text1:{
        fontFamily:FONT.primaryFont
    },
    text2:{
        fontFamily:FONT.primaryFont,
        fontSize:moderateScale(14)
    },
    first:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:moderateScale(10),
        marginBottom:moderateScale(20)
    },
    textt:{
        fontFamily:FONT.primaryFontLight,
        fontSize:moderateScale(14),
        color:COLOR.fontColourLight
    }



});

//make this component available to the app
export default ReceiptDetails
