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
const WarrantyDetails = () => {




    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={COLOR.themeColour} />
            <Header />
            <View style={{ padding: moderateScale(15) }}>
                <View style={styles.first}>
                    <Pressable onPress={() => { Navigation.navigate('ReceiptDetails')}}>
                    <Text style={styles.textt}>Receipt</Text>
                    </Pressable>
                    <Text style={[styles.textt, { color: COLOR.themeColour, borderBottomWidth: 2, borderBottomColor: COLOR.themeColour }]}>Warranty</Text>
                    <Text style={styles.textt}>Exchange</Text>
                    <Text style={styles.textt}>Contracts</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'flex-end' }}>
                    <Text>Export  </Text>
                    <Image
                        source={require('../../Assets/Iconawesome-file-pdf.png')}

                    />
                </View>
                <View style={[styles.view, { marginBottom: moderateScale(15),marginTop:moderateScale(5) }]}>
                    <View style={{ borderRightColor:COLOR.fontColourLight,borderRightWidth:1, width:'50%'}}>
                        <Image
                            source={require('../../Assets/logo.png')}
                            style={{ height: moderateScale(45), width: moderateScale(45),marginBottom:moderateScale(10) }}
                        />
                        <Text style={[styles.text, {  marginBottom:moderateScale(5) }]}>MAVPAAD ENTERPRISE</Text>
                        <Text style={[styles.text, {   }]}>BOH ID: <Text style={{textDecorationLine:'underline'}}>454156</Text></Text>
                    </View>
                    <View >
                        <Image
                            source={require('../../Assets/Image2.png')}
                            style={{ height: moderateScale(45), width: moderateScale(120),marginBottom:moderateScale(10) }}
                        />
                        <Text style={[styles.text, {  marginBottom:moderateScale(5) }]}>MAVPAAD ENTERPRISE</Text>
                        <Text style={[styles.text, {   }]}>Vendor ID: <Text style={{textDecorationLine:'underline'}}>1454.156</Text></Text>
                    </View>
                </View>
                <View style={styles.view1}>
                    <Text style={styles.text2}>E-receipt Reference no:</Text>
                    <Text style={styles.text}>12345354</Text>
                </View>
                <View style={styles.view1}>
                    <Text style={styles.text2}>Vender Name:</Text>
                    <Text style={styles.text}>12345354</Text>
                </View>
                <View style={styles.view1}>
                    <Text style={styles.text2}>Warranty Type:</Text>
                    <Text style={styles.text}>12345354</Text>
                </View>
                <View style={styles.view1}>
                    <Text style={styles.text2}>Warranty Expieration:</Text>
                    <Text style={styles.text}>12345354</Text>
                </View>
                <View style={styles.view1}>
                    <View>
                    <Text style={styles.text2}>Extended warranty: N/A</Text>
                    <Text style={[styles.text,{ marginBottom:moderateScale(10)}]}>12345354</Text>
                    <Text style={styles.text2}>Applied No:</Text>
                    <Text style={[styles.text,{ marginBottom:moderateScale(10)}]}>12345354</Text>
                    <Text style={styles.text2}>Amount Paid:</Text>
                    <Text style={[styles.text,{ marginBottom:moderateScale(10)}]}>12345354</Text>
                    <Text style={styles.text2}>Warranty Type:</Text>
                    <Text style={[styles.text,{ }]}>12345354</Text>
                    </View>
                    <View style={styles.view2}>
                        <Text style={[styles.textt, { color: COLOR.themeColour, fontSize:moderateScale(12)}]}>
                            Apply for extended warranty on or before January 06
                        </Text>
                    </View>
                </View>
                <Text style={[styles.text,{textDecorationLine:'underline', fontSize:moderateScale(14), marginBottom:moderateScale(5)}]}>Brand Warranty <Text style={[styles.textt, { color: COLOR.themeColour}]}>term</Text> and <Text style={[styles.textt, { color: COLOR.themeColour}]}>conditions</Text></Text>
                <Text style={[styles.text,{textDecorationLine:'underline', fontSize:moderateScale(14)}]}>Vendor Warranty <Text style={[styles.textt, { color: COLOR.themeColour}]}>term</Text> and <Text style={[styles.textt, { color: COLOR.themeColour}]}>conditions</Text></Text>
                <View style={styles.view1}>
                    <Pressable onPress={()=>{Navigation.navigate('ServiceRequest')}}
                     style={[styles.press,{backgroundColor:COLOR.themeColour}]}><Text style={{color:COLOR.white}}>Service request</Text></Pressable>
                    <Pressable style={styles.press}><Text style={{color:COLOR.themeColour}}>Request call Back</Text></Pressable>
                </View>
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
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: moderateScale(10),
        borderBottomColor:COLOR.fontColourLight,
        borderBottomWidth:1,
        paddingBottom:moderateScale(15)
    },
    text: {
        fontFamily: FONT.primaryFontLight,
        color: COLOR.fontColour
    },
    view1:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:moderateScale(10)
    },
    text2:{
        fontFamily: FONT.primaryFontLight,
        color: COLOR.fontColourLight
    },
    view2:{
        borderColor:COLOR.themeColour,
        borderWidth:2,
        borderRadius:moderateScale(5),
        width:'40%',
        height:moderateScale(100),
        padding:moderateScale(10),
        justifyContent:'center'
    },
    press:{
        borderRadius:moderateScale(5),
        borderColor:COLOR.themeColour,
        borderWidth:1,
        width:'46%',
        height:moderateScale(40),
        justifyContent:'center',
        alignItems:'center',
        marginTop:moderateScale(15)
    },



    first: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: moderateScale(10),
        marginBottom: moderateScale(20)
    },
    textt: {
        fontFamily: FONT.primaryFontLight,
        fontSize: moderateScale(14),
        color: COLOR.fontColourLight
    }




});

//make this component available to the app
export default WarrantyDetails
