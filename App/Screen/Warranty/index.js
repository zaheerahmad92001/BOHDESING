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
        shop: 'Shivashakti Enterprise Vender ID: 121354561',
        product: 'Sony 22XTY 42" LED TV',
        id: 'Transaction ID: 124546',
        date: '22 Aug, 2021',
        price: '$3223',
        days:'240',
        img:require('../../Assets/logo.png')
    },
    {
        shop: 'Shivashakti Enterprise Vender ID: 121354561',
        product: 'Sony 22XTY 42" LED TV',
        id: 'Transaction ID: 124546',
        date: '22 Aug, 2021',
        price: '$3223',
        days:'240',
        img:require('../../Assets/logo.png')
    },
    {
        shop: 'Shivashakti Enterprise Vender ID: 121354561',
        product: 'Sony 22XTY 42" LED TV',
        id: 'Transaction ID: 124546',
        date: '22 Aug, 2021',
        price: '$3223',
        days:'240',
        img:require('../../Assets/logo.png')
    },
    {
        shop: 'Shivashakti Enterprise Vender ID: 121354561',
        product: 'Sony 22XTY 42" LED TV',
        id: 'Transaction ID: 124546',
        date: '22 Aug, 2021',
        price: '$3223',
        days:'240',
        img:require('../../Assets/logo.png')
    },
    {
        shop: 'Shivashakti Enterprise Vender ID: 121354561',
        product: 'Sony 22XTY 42" LED TV',
        id: 'Transaction ID: 124546',
        date: '22 Aug, 2021',
        price: '$3223',
        days:'240',
        img:require('../../Assets/logo.png')
    },
    {
        shop: 'Shivashakti Enterprise Vender ID: 121354561',
        product: 'Sony 22XTY 42" LED TV',
        id: 'Transaction ID: 124546',
        date: '22 Aug, 2021',
        price: '$3223',
        days:'240',
        img:require('../../Assets/logo.png')
    },
];


// create a component
const Warranty = () => {

    


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
                <Text style={{fontSize:moderateScale(15)}}>Warranty</Text>
                <FlatList
                    style={{ backgroundColor: '#fff' }}
                    data={data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => {
                        return (

                            <Pressable style={{marginVertical:moderateScale(10)}} onPress={() => { Navigation.navigate('WarrantyDetails') }}>
                                <View style={styles.view1}>
                                    <Text style={styles.text}>{item.shop}</Text>
                                </View>
                                <View style={styles.view2}>
                                    <View style={styles.view3}>
                                    <Image
                                        source={item.img}
                                        style={{height:moderateScale(45), width:moderateScale(45)}}
                                    />
                                    </View>
                                    <View style={{paddingLeft:moderateScale(15)}}>
                                        <Text style={styles.text}>{item.product} </Text>
                                        <Text style={styles.text}>{item.id} </Text>
                                        <Text style={styles.text}>{item.date} </Text>
                                        <Text style={styles.text}>{item.price} </Text>
                                    </View>
                                    <View style={styles.view4}>
                                        <Text  style={styles.text1}>Expires in</Text>
                                        <Text  style={[styles.text1,{fontFamily:FONT.primaryFontBold, fontSize:moderateScale(15)}]}>{item.days}</Text>
                                        <Text  style={styles.text1}>Days</Text>
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
    view1:{ 
        backgroundColor: COLOR.flatlistColour, 
        padding:moderateScale(10), 
        padding: moderateScale(10), 
        marginBottom:moderateScale(2) 
    },
    view2:{
        flexDirection:'row', 
        alignItems:'center',
        backgroundColor:COLOR.flatlistColour,  
        padding:moderateScale(10), 
        paddingVertical:moderateScale(15)
    },
    view3:{ 
        padding:moderateScale(10), 
        borderRightColor:COLOR.white , 
        borderRightWidth:2
    },
    view4:{
        width:'25%', 
        alignItems:'center', 
        paddingBottom:moderateScale(12), 
        paddingLeft:moderateScale(10)
    },
    text:{
        fontFamily:FONT.primaryFontLight
    },
    text1:{
        fontFamily:FONT.primaryFontLight,
        color:COLOR.themeColour,
        fontSize:moderateScale(14)
    }

});

//make this component available to the app
export default Warranty
