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
        product: 'Hp i7 TB Laptop',
        ram: 'RAM 4 GB',
        gen: 'I7 3rd Generation',
        prevprice:'2599',
        discount:'15-22%',
        netprice:'1800-2000',
        img: require('../../Assets/logo.png'),
        img2: require('../../Assets/hp1.png')
    },
    {
        product: 'Hp i7 TB Laptop',
        ram: 'RAM 4 GB',
        gen: 'I7 3rd Generation',
        prevprice:'2599',
        discount:'15-22%',
        netprice:'1800-2000',
        img: require('../../Assets/logo.png'),
        img2: require('../../Assets/hp1.png')
    },
    {
        product: 'Hp i7 TB Laptop',
        ram: 'RAM 4 GB',
        gen: 'I7 3rd Generation',
        prevprice:'2599',
        discount:'15-22%',
        netprice:'1800-2000',
        img: require('../../Assets/logo.png'),
        img2: require('../../Assets/hp1.png')
    },
    {
        product: 'Hp i7 TB Laptop',
        ram: 'RAM 4 GB',
        gen: 'I7 3rd Generation',
        prevprice:'2599',
        discount:'15-22%',
        netprice:'1800-2000',
        img: require('../../Assets/logo.png'),
        img2: require('../../Assets/hp1.png')
    },
    {
        product: 'Hp i7 TB Laptop',
        ram: 'RAM 4 GB',
        gen: 'I7 3rd Generation',
        prevprice:'2599',
        discount:'15-22%',
        netprice:'1800-2000',
        img: require('../../Assets/logo.png'),
        img2: require('../../Assets/hp1.png')
    },
    {
        product: 'Hp i7 TB Laptop',
        ram: 'RAM 4 GB',
        gen: 'I7 3rd Generation',
        prevprice:'2599',
        discount:'15-22%',
        netprice:'1800-2000',
        img: require('../../Assets/logo.png'),
        img2: require('../../Assets/hp1.png')
    },
    {
        product: 'Hp i7 TB Laptop',
        ram: 'RAM 4 GB',
        gen: 'I7 3rd Generation',
        prevprice:'2599',
        discount:'15-22%',
        netprice:'1800-2000',
        img: require('../../Assets/logo.png'),
        img2: require('../../Assets/hp1.png')
    },
    {
        product: 'Hp i7 TB Laptop',
        ram: 'RAM 4 GB',
        gen: 'I7 3rd Generation',
        prevprice:'2599',
        discount:'15-22%',
        netprice:'1800-2000',
        img: require('../../Assets/logo.png'),
        img2: require('../../Assets/hp1.png')
    },
    {
        product: 'Hp i7 TB Laptop',
        ram: 'RAM 4 GB',
        gen: 'I7 3rd Generation',
        prevprice:'2599',
        discount:'15-22%',
        netprice:'1800-2000',
        img: require('../../Assets/logo.png'),
        img2: require('../../Assets/hp1.png')
    },
];


// create a component
const Wishlist = () => {

    const[wish,setwish]=useState(false)


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
            <View style={{ marginHorizontal: moderateScale(15), flex: 1 }}>

                <FlatList
                    style={{ backgroundColor: '#fff' }}
                    data={data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => {
                        return (

                            <Pressable style={{ marginVertical: moderateScale(5) }} onPress={() => { Navigation.navigate('Product') }}>
                                <View style={styles.view1}>
                                    <View >
                                        <Image
                                            source={item.img}
                                            style={{ height: moderateScale(50), width: moderateScale(50), marginBottom: moderateScale(10) }}
                                        />
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Image
                                                source={item.img2}
                                                style={{ height: moderateScale(15), width: moderateScale(15) }}
                                            />
                                            <Image
                                                source={item.img2}
                                                style={{ height: moderateScale(15), width: moderateScale(15) }}
                                            />
                                            <Image
                                                source={item.img2}
                                                style={{
                                                    height: moderateScale(15),
                                                    width: moderateScale(15)
                                                }}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ marginLeft: moderateScale(20) }}>
                                        <View style={styles.view2}>
                                            <View>
                                                <Text
                                                    style={[styles.text, {
                                                        color: COLOR.fontColour,
                                                        fontSize: moderateScale(14),
                                                        marginBottom: moderateScale(5)
                                                    }]}
                                                >{item.product}</Text>
                                                <Text style={[styles.text, { color: COLOR.fontColour, marginBottom: moderateScale(5) }]}>{item.ram}, {item.gen}</Text>
                                            </View>
                                            <View style={styles.view3}>
                                                
                                                <Pressable onPress={()=>setwish(true)}>
                                                <Image source={require('../../Assets/Iconawesome-heart.png')} 
                                                style={{tintColor:wish == true ? '#a9a9a9' : 'red'}}/>
                                                </Pressable>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', marginBottom: moderateScale(5) }}>
                                            <Text style={styles.text}>MRP:</Text>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={[styles.text, { textDecorationLine: 'line-through', textDecorationColor: 'red', color: COLOR.fontColour }]}> ₹ {item.prevprice}</Text>
                                                <Text style={[styles.text, { color: COLOR.themeColour }]}>{item.discount}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.view2}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={styles.text}>Net Price:</Text>
                                                <Text style={[styles.text, { color: COLOR.fontColour }]}>{item.netprice}</Text>
                                            </View>
                                            {/* <View >
                                                <Text style={[styles.text, { color: COLOR.themeColour, textDecorationLine: 'underline' }]}>View Details</Text>
                                            </View> */}
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
    view2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },
    // view3: {
    //     flexDirection: 'row',
    //     width: '24%',
    //     justifyContent: 'space-between'
    // }


});

//make this component available to the app
export default Wishlist
