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
const { height, width } = Dimensions.get('screen');




// create a component
const Product = () => {

    const [value, setValue] = React.useState("one")

    const[wish,setwish]=useState(false)


    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={COLOR.themeColour} />
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.image}>
                    <Icon name='arrowleft' type='AntDesign' style={styles.icon} />
                    <Image source={require('../../Assets/hp.png')} resizeMode='contain' style={styles.img} />
                </View>
                <View style={{ padding: moderateScale(20) }}>
                    <View style={styles.view}>
                        <View>
                            <Text style={styles.text}>Hp i7 TB Laptop</Text>
                            <Text style={styles.text1}>RAM 4 GB, I7 3rd Generation</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '18%', justifyContent: 'space-between' }}>
                            <Image source={require('../../Assets/comparison.png')} />
                            <Pressable onPress={() => setwish(true)}>
                                <Image source={require('../../Assets/Iconawesome-heart.png')}
                                    style={{ tintColor: wish == true ? 'red' : '#a9a9a9' }} />
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.view1}>
                        <Text style={styles.text2}>MRP:</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ textDecorationColor: 'red', textDecorationLine: 'line-through' }}> ₹ 2599</Text>
                            <Text style={{ color: COLOR.themeColour }}>15-22%</Text>
                        </View>
                    </View>
                    <View style={styles.view1}>
                        <Text style={styles.text2}>Net Price:</Text>
                        <Text>1800-2000</Text>
                    </View>
                    <View style={{ marginTop: moderateScale(10) }}>
                        <Text style={styles.text5}>Colors</Text>
                        <View style={styles.radio}>
                            <View style={styles.radio1}>
                                <Radio
                                    onPress={() => setValue('one')}
                                    selected={value == 'one'}
                                    colorScheme="green"
                                />
                                <Text style={styles.text5}>Black</Text>
                            </View>
                            <View style={styles.radio1}>
                                <Radio
                                    onPress={() => setValue('two')}
                                    selected={value == 'two'}
                                    colorScheme="green"
                                />
                                <Text style={styles.text5}>Blue</Text>
                            </View>
                            <View style={styles.radio1}>
                                <Radio
                                    onPress={() => setValue('three')}
                                    selected={value == 'three'}
                                />
                                <Text style={styles.text5}>Pink</Text>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.text5}>Processor</Text>
                        <View style={styles.radio}>
                            <View style={styles.radio1}>
                                <Radio
                                    onPress={() => setValue('one')}
                                    selected={value == 'one'}
                                />
                                <Text style={styles.text5}>1.2 GHz</Text>
                            </View>
                            <View style={styles.radio1}>
                                <Radio
                                    onPress={() => setValue('two')}
                                    selected={value == 'two'}
                                />
                                <Text style={styles.text5}>2.1 GHz</Text>
                            </View>
                            <View style={styles.radio1}>
                                <Radio
                                    onPress={() => setValue('three')}
                                    selected={value == 'three'}
                                />
                                <Text style={styles.text5}>1.7 GHz</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginBottom: moderateScale(10) }}>
                        <Text style={styles.text5}>Screen Size</Text>
                        <View style={styles.radio}>
                            <View style={styles.radio1}>
                                <Radio
                                    onPress={() => setValue('one')}
                                    selected={value == 'one'}
                                />
                                <Text style={styles.text5}>13'</Text>
                            </View>
                            <View style={styles.radio1}>
                                <Radio
                                    onPress={() => setValue('two')}
                                    selected={value == 'two'}
                                />
                                <Text style={styles.text5}>14'</Text>
                            </View>
                            <View style={styles.radio1}>
                                <Radio
                                    onPress={() => setValue('three')}
                                    selected={value == 'three'}
                                />
                                <Text style={styles.text5}>15'</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={[styles.text1], { fontSize: moderateScale(15) }}>Details</Text>
                    <Text style={styles.text2}>Hewlett-Packard is commonly known as HP (hp) was an American multinational technology company.
                        It is headquartered in California.
                        The company was founded in a one-car garage by Bill Hewlett and David Packard, so is the name of the company.
                        Initially, this company produced a line of electronic test equipment.
                        In 2015, HP was split into two separate companies- HP Inc. and Hewlett Packard Enterprise.
                        HP specializes in manufacturing and developing computing, networking hardware and more.
                        Majorly the product lines of HP include personal computing devices, storage devices, software, printers etc.
                        Hewlett-Packard’s first computer was HP 2116A, it was developed n 1966.
                        In 1972, HP released the HP 3000 general-purpose minicomputer.
                        HP Pavilion is one of the lines of personal computers produced by HP.
                        HP has another lineup as HP Spectre X360, Spectre Folio, Chromebook, Elitebook, Envy, Omen X and much more.
                        HP laptops have features like a backlit keyboard, sleek design, edge-to-edge glass, gaming, budget laptops, portable, best for students and much other variety for convenience, luxury, power and everything an ordinary user needs.
                    </Text>
                </View>
            </ScrollView>
            <Pressable style={styles.press} onPress={() => { Navigation.navigate('Dealers') }}>
                <Text style={styles.text4}>Dealer Near Me</Text>
            </Pressable>
        </View >
    );
};

// define your stylesBigbasket
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    img: {
        width: '100%',
        height: moderateScale(160),
    },
    press: {
        alignItems: 'center',
        borderRadius: moderateScale(5),
        padding: moderateScale(10),
        marginBottom: moderateScale(15),
        backgroundColor: COLOR.themeColour,
        marginHorizontal: moderateScale(20)
    },
    text4: {
        color: COLOR.white,
        fontFamily: FONT.primaryFontBold,
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        backgroundColor: COLOR.white,
        elevation: 2
    },
    text: {
        fontFamily: FONT.primaryFontBold,
        fontSize: moderateScale(15)
    },
    text1: {
        fontFamily: FONT.primaryFont
    },
    view1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: moderateScale(5)
    },
    text2: {
        color: COLOR.fontColourLight,
        fontFamily: FONT.primaryFontLight
    },
    radio: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
        paddingVertical: moderateScale(10)
    },
    radio1: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '25%',
        justifyContent: 'space-between'
    },
    text5: {
        fontFamily: FONT.primaryFontLight,
        color: COLOR.fontColour,
        fontSize: moderateScale(14)
    },
    icon: {
        position: 'absolute',
        top: moderateScale(10),
        left: moderateScale(10)
    }

});

//make this component available to the app
export default Product
