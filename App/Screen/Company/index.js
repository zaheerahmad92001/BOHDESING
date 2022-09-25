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
const Company = () => {

    const[laptop, setlaptop]=useState(false)
    const[ac, setac]=useState(true)
    const[frig, setfrig]=useState(false)
    const[tv, settv]=useState(false)

    const[laptop1, setlaptop1]=useState(false)
    const[ac1, setac1]=useState(false)
    const[frig1, setfrig1]=useState(false)
    const[tv1, settv1]=useState(false)


    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={COLOR.themeColour} />
            <Header />
            <View style={{ padding: moderateScale(15) }}>
                <Item style={styles.view}>
                    <View>
                        <Image source={require('../../Assets/OnePlus.png')}
                            style={{ height: moderateScale(50), width: '150%', marginLeft: moderateScale(-6) }}
                            resizeMode='stretch' />
                        <Text style={styles.text}>www.oneplus.com</Text>
                    </View>
                    <Text style={[styles.text, { textDecorationLine: 'underline', color: COLOR.themeColour }]}>One Plus E-showroom</Text>
                </Item>

                <View style={styles.view1}>
                    <Text style={styles.text}>Brand: </Text>
                    <Text style={styles.text1}>OnePlus</Text>
                </View>
                <View style={styles.view1}>
                    <Text style={styles.text}>Company: </Text>
                    <Text style={styles.text1}>Zhuh zain Pvt ltd</Text>
                </View>
                <View style={styles.view1}>
                    <Text style={styles.text}>Turnover (Global): </Text>
                    <Text style={styles.text1}>$240 million</Text>
                </View>
                <View style={styles.view1}>
                    <Text style={styles.text}>Country of Origin: </Text>
                    <Text style={styles.text1}>South Korea</Text>
                </View>
                <View style={styles.view1}>
                    <Text style={styles.text}>No.of Dealer in India: </Text>
                    <Text style={styles.text1}>2200</Text>
                </View>
                <Text style={{ fontFamily: FONT.primaryFontBold, marginBottom:moderateScale(20) }}>Products</Text>

                <View style={styles.view2}>
                    <Pressable style={[styles.press,{backgroundColor: laptop? COLOR.themeColour:COLOR.fontColourLight}]} 
                    onPress={()=>{setlaptop(true), setlaptop1(false)
                    setac(false),setac1(false),setfrig(false),setfrig1(false),settv(false),settv1(false)}}>

                        <Text style={[styles.textt,{width:moderateScale(70)}]} >Laptops</Text>
                    </Pressable>
                    <Pressable style={[styles.press,{backgroundColor: ac? COLOR.themeColour:COLOR.fontColourLight}]}  
                    onPress={()=>{setlaptop(false), setlaptop1(false)
                    setac(true),setac1(false),setfrig(false),setfrig1(false),settv(false),settv1(false)}}>
                        
                        <Text style={[styles.textt,{width:moderateScale(40)}]}>AC</Text>
                    </Pressable>
                    <Pressable style={[styles.press,{backgroundColor: frig? COLOR.themeColour:COLOR.fontColourLight}]}
                     onPress={()=>{setlaptop(false), setlaptop1(false)
                        setac(false),setac1(false),setfrig(true),setfrig1(false),settv(false),settv1(false)}}>
                        
                        <Text style={[styles.textt,{width:moderateScale(60)}]}>Frig</Text>
                    </Pressable>
                    <Pressable style={[styles.press,{backgroundColor: tv? COLOR.themeColour:COLOR.fontColourLight}]}  
                    onPress={()=>{setlaptop(false), setlaptop1(false)
                    setac(false),setac1(false),setfrig(false),setfrig1(false),settv(true),settv1(false)}}>

                        <Text style={[styles.textt,{width:moderateScale(40)}]}>TV</Text>
                    </Pressable>
                </View>

                <View style={[styles.view2,{marginBottom:moderateScale(15)}]}>
                    
                   
                    
                    <Pressable style={[styles.press,{backgroundColor: tv1? COLOR.themeColour:COLOR.fontColourLight}]}  
                    onPress={()=>{setlaptop(false), setlaptop1(false)
                    setac(false),setac1(false),setfrig(false),setfrig1(false),settv(false),settv1(true)}}>

                        <Text style={[styles.textt,{width:moderateScale(40)}]}>TV</Text>
                    </Pressable>


                    <Pressable style={[styles.press,{backgroundColor: frig1? COLOR.themeColour:COLOR.fontColourLight}]}
                     onPress={()=>{setlaptop(false), setlaptop1(false)
                        setac(false),setac1(false),setfrig(false),setfrig1(true),settv(false),settv1(false)}}>
                        
                        <Text style={[styles.textt,{width:moderateScale(60)}]}>Frig</Text>
                    </Pressable>

                    <Pressable style={[styles.press,{backgroundColor: ac1? COLOR.themeColour:COLOR.fontColourLight}]}  
                    onPress={()=>{setlaptop(false), setlaptop1(false)
                    setac(false),setac1(true),setfrig(false),setfrig1(false),settv(false),settv1(false)}}>
                        
                        <Text style={[styles.textt,{width:moderateScale(40)}]}>AC</Text>
                    </Pressable>


                    <Pressable style={[styles.press,{backgroundColor: laptop1? COLOR.themeColour:COLOR.fontColourLight}]} 
                    onPress={()=>{setlaptop(false), setlaptop1(true)
                    setac(false),setac1(false),setfrig(false),setfrig1(false),settv(false),settv1(false)}}>

                        <Text style={[styles.textt,{width:moderateScale(70)}]} >Laptops</Text>
                    </Pressable>

                    
                </View>

                <Slider />



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
        alignItems: 'center',
        paddingBottom: moderateScale(10),
        marginBottom: moderateScale(50)
    },
    view1: {
        flexDirection: 'row',
        marginBottom: moderateScale(20)
    },
    text: {
        fontFamily: FONT.primaryFont
    },
    text1: {
        fontFamily: FONT.primaryFontLight
    },
    view2:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:moderateScale(10)
    },
    textt:{
        color:COLOR.white,
        textAlign:'center'
       
    },
    press:{
        backgroundColor:COLOR.themeColour,
        padding:moderateScale(10),
        borderRadius:moderateScale(20)
    }




});

//make this component available to the app
export default Company
