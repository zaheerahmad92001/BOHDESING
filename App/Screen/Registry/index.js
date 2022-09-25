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
        company: 'Hp Pvt Ltd',
        found:'Founder: 1992',
        id: 'BOH ID: 2001028',
        img: require('../../Assets/logo.png'),
        category:'12'
    },
    {
        company: 'Hp Pvt Ltd',
        found:'Founder: 1992',
        id: 'BOH ID: 2001028',
        img: require('../../Assets/logo.png'),
        category:'12'
    },
    {
        company: 'Hp Pvt Ltd',
        found:'Founder: 1992',
        id: 'BOH ID: 2001028',
        img: require('../../Assets/logo.png'),
        category:'12'
    },
    {
        company: 'Hp Pvt Ltd',
        found:'Founder: 1992',
        id: 'BOH ID: 2001028',
        img: require('../../Assets/logo.png'),
        category:'12'
    },
    {
        company: 'Hp Pvt Ltd',
        found:'Founder: 1992',
        id: 'BOH ID: 2001028',
        img: require('../../Assets/logo.png'),
        category:'12'
    },
    {
        company: 'Hp Pvt Ltd',
        found:'Founder: 1992',
        id: 'BOH ID: 2001028',
        img: require('../../Assets/logo.png'),
        category:'12'
    },
    {
        company: 'Hp Pvt Ltd',
        found:'Founder: 1992',
        id: 'BOH ID: 2001028',
        img: require('../../Assets/logo.png'),
        category:'12'
    },
    {
        company: 'Hp Pvt Ltd',
        found:'Founder: 1992',
        id: 'BOH ID: 2001028',
        img: require('../../Assets/logo.png'),
        category:'12'
    },
    {
        company: 'Hp Pvt Ltd',
        found:'Founder: 1992',
        id: 'BOH ID: 2001028',
        img: require('../../Assets/logo.png'),
        category:'12'
    },
];


// create a component
const Registry = () => {




    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={COLOR.themeColour} />
            <Header />
            <View style={styles.view}>
                <Card style={styles.card}>
                    <Image
                        source={require('../../Assets/Iconfeather-search.png')}
                        style={{marginLeft:moderateScale(5)}}
                    />
                    <TextInput placeholder='Search by name' placeholderTextColor={COLOR.fontColourLight} style={styles.input} />
                </Card>
                <View style={styles.img}>
                    <Image
                        source={require('../../Assets/Iconmaterial-filter-list.png')}

                    />
                </View>
            </View>
            <View style={{ marginHorizontal: moderateScale(15), flex:1 }}>

                <FlatList
                    style={{ backgroundColor: '#fff' }}
                    data={data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => {
                        return (

                            <Pressable style={{marginVertical:moderateScale(5)}} onPress={()=>{Navigation.navigate('Company')}}>
                                <View style={styles.view1}>
                                    <View style={{}}>
                                        <Image
                                            source={item.img}
                                            style={{ height: moderateScale(45), width: moderateScale(45) }}
                                        />
                                    </View>
                                    <View style={{ width:'50%'}}>
                                        <Text style={[styles.text,{color:COLOR.fontColour, fontSize:moderateScale(14)}]}>{item.company} </Text>
                                        <Text style={styles.text}>{item.id} </Text>
                                        <Text style={styles.text}>{item.found} </Text>
                                    </View>
                                    <View style={{alignItems:'center'}}>
                                        <Text style={[styles.text,{color:COLOR.themeColour, fontFamily:FONT.primaryFontBold, fontSize:moderateScale(20)}]}>{item.category} </Text>
                                        <Text style={[styles.text,{color:COLOR.themeColour}]}>Categories</Text>
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
        flex:1,
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
    text:{
        fontFamily:FONT.primaryFontLight,
        fontSize:moderateScale(11),
        color:COLOR.fontColourLight
    },
    view1:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center', 
        padding:moderateScale(20), 
        backgroundColor:COLOR.white, 
        elevation:3, 
        width:'98%', 
        alignSelf:'center'
    }


});

//make this component available to the app
export default Registry
