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
import { Card, Icon } from 'native-base';
import Navigation from '../../Service/Navigation';
import Header from '../../Components/Header';
import { COLOR } from '../../Constants/Color';
import { FONT } from '../../Constants/Font';
import Slider from '../../Components/Slider';
const { height, width } = Dimensions.get('screen');

// create a component
const Home = () => {



    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={COLOR.themeColour} />
            <Header />
            <View style={{
                marginVertical:moderateScale(10)
            }}>
                <Card style={styles.card}>
                    <Icon
                        name='location-pin'
                        type='Entypo'
                        style={{
                            color:COLOR.themeColour
                        }}
                    />
                    <TextInput placeholder='Park Street, Kolkata' placeholderTextColor={COLOR.fontColourLight} style={styles.input} />
                </Card>
                <Card style={styles.card}>
                    <Image
                        source={require('../../Assets/Iconfeather-search.png')}
                        style={{ marginLeft: moderateScale(5) }}
                    />
                    <TextInput placeholder='Search by name' placeholderTextColor={COLOR.fontColourLight} style={styles.input} />
                </Card>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Slider />
                <View style={styles.view}>
                    <Pressable style={styles.view0} onPress={() => { Navigation.navigate('Receipt') }}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/receipt.png')}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>Receipt</Text>
                    </Pressable>
                    <Pressable style={styles.view0} onPress={() => { Navigation.navigate('Warranty') }}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/guarantee.png')}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>Warranties</Text>
                    </Pressable>
                    <View style={styles.view0}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/return.png')}
                                style={[styles.img, { marginLeft: moderateScale(3) }]}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>Return</Text>
                    </View>
                    <View style={styles.view0}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/contract.png')}
                                style={[styles.img, { marginLeft: moderateScale(5) }]}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>Contracts</Text>
                    </View>
                    <View style={styles.view0}>
                        <View style={styles.view1}>
                            <Image
                                source={require('../../Assets/Iconawesome-question.png')}
                                style={styles.img}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text}>New</Text>
                    </View>
                </View>

                <View style={styles.vieww}>
                    <Pressable style={styles.view0} onPress={() => { Navigation.navigate('Launches') }}>
                        <View style={styles.view2}>
                            <Image
                                source={require('../../Assets/speed.png')}
                                resizeMode='contain'
                                style={styles.imgg}
                            />
                        </View>
                        <Text style={styles.text}>New Launches</Text>
                    </Pressable>
                    <View style={styles.view0}>
                        <Pressable onPress={() => { Navigation.navigate('Catagory') }} >
                            <View style={styles.view2}>
                                <Image
                                    source={require('../../Assets/Group1716.png')}
                                    resizeMode='contain'
                                    style={styles.imgg}
                                />
                            </View>
                            <Text style={styles.text}  >Dealers Near Me</Text>
                        </Pressable>
                    </View>
                    <Pressable style={styles.view0} onPress={() => { Navigation.navigate('Catagory') }}>
                        {/* <Pressable onPress={() => { Navigation.navigate('Catagory') }} > */}
                        <View style={styles.view2}>
                            <Image
                                source={require('../../Assets/quality.png')}
                                resizeMode='contain'
                                style={styles.imgg}
                            />
                        </View>

                        <Text style={styles.text} allowFontScaling={false}>Top Recomendation</Text>
                        {/* </Pressable> */}
                    </Pressable>
                </View>
                <View style={styles.view3}>
                    <Pressable style={[styles.press, { backgroundColor: '#F9F6EF' }]}>
                        <Image
                            source={require('../../Assets/shipping.png')}

                        />
                        <Text style={{ color: '#AE7323', fontFamily: FONT.primaryFont }}>Product Registry</Text>
                    </Pressable>
                    <Pressable style={[styles.press, { backgroundColor: '#E0F0F0' }]} onPress={() => { Navigation.navigate('Registry') }}>
                        <Image
                            source={require('../../Assets/18-brandchampion.png')}

                        />
                        <Text style={{ color: COLOR.themeColour, fontFamily: FONT.primaryFont }}>BOH Registry</Text>
                    </Pressable>
                </View>
                <View style={styles.view3}>
                    <Pressable style={[styles.press, { backgroundColor: '#FFFBF8' }]} onPress={() => { Navigation.navigate('Compare') }}>
                        <Image
                            source={require('../../Assets/comparison.png')}
                            style={{ tintColor: '#F7A664' }}
                        />
                        <Text style={{ color: '#F7A664', fontFamily: FONT.primaryFont }}>Compare</Text>
                    </Pressable>
                    <Pressable style={[styles.press, { backgroundColor: '#EAEAEA' }]} onPress={() => { Navigation.navigate('Registry') }}>
                        <Image
                            source={require('../../Assets/clipboard.png')}

                        />
                        <Text style={{ color: COLOR.fontColour, fontFamily: FONT.primaryFont }}>Dealer Registry</Text>
                    </Pressable>
                </View>
                <View style={styles.view4}>
                    <Text style={{ color: COLOR.fontColour, fontFamily: FONT.primaryFontBold }}>Top Performers</Text>
                    <Text style={{ color: COLOR.themeColour, fontFamily: FONT.primaryFont }}>View All</Text>
                </View>
                <View style={styles.view5}>
                    <Image
                        source={require('../../Assets/Iconfeather-tv.png')}
                        style={{ marginRight: moderateScale(10) }}
                    />
                    <Text style={styles.text1}>Television</Text>
                </View>
                <View style={styles.vieww1}>
                    <View style={styles.viewww}>
                        <Pressable style={styles.v} onPress={() => { Navigation.navigate('Product') }}>
                            <Image
                                source={require('../../Assets/Iconfeather-tv.png')}
                                style={styles.image}
                                resizeMode='contain'

                            />
                        </Pressable>
                        <Text style={styles.text1} numberOfLines={2}>Sony Bravia 42 inch LED</Text>
                    </View>
                    <View style={styles.viewww}>
                        <View style={styles.v}>
                            <Image
                                source={require('../../Assets/Iconfeather-tv.png')}
                                style={styles.image}
                                resizeMode='contain'

                            />
                        </View>
                        <Text style={styles.text1} numberOfLines={2}>TLC Bravia 42 inch LED</Text>
                    </View>
                    <View style={styles.viewww}>
                        <View style={styles.v}>
                            <Image
                                source={require('../../Assets/Iconfeather-tv.png')}
                                style={styles.image}
                                resizeMode='contain'

                            />
                        </View>
                        <Text style={styles.text1} numberOfLines={2}>HP Bravia 42 inch LED</Text>
                    </View>
                </View>


                <View style={styles.view5}>
                    <Image
                        source={require('../../Assets/laptop.png')}
                        style={{ height: moderateScale(22), width: moderateScale(22), marginRight: moderateScale(10) }}
                        resizeMode='contain'
                    />
                    <Text style={styles.text1}>Laptop</Text>
                </View>
                <View style={styles.vieww1}>
                    <View style={styles.viewww}>
                        <Pressable style={styles.v} onPress={() => { Navigation.navigate('Product') }}>
                            <Image
                                source={require('../../Assets/laptop.png')}
                                style={styles.image}
                                resizeMode='contain'
                            />
                        </Pressable>
                        <Text style={styles.text1} numberOfLines={2}>Sony Bravia 42 inch LED</Text>
                    </View>
                    <View style={styles.viewww}>
                        <View style={styles.v}>
                            <Image
                                source={require('../../Assets/laptop.png')}
                                style={styles.image}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text1} numberOfLines={2}>TLC Bravia 42 inch LED</Text>
                    </View>
                    <View style={styles.viewww}>
                        <View style={styles.v}>
                            <Image
                                source={require('../../Assets/laptop.png')}
                                style={styles.image}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text1} numberOfLines={2}>HP Bravia 42 inch LED</Text>
                    </View>
                </View>



                <View style={styles.view5}>
                    <Image
                        source={require('../../Assets/motorcycle.png')}
                        style={{ height: moderateScale(22), width: moderateScale(22), marginRight: moderateScale(10) }}
                        resizeMode='contain'
                    />
                    <Text style={styles.text1}>Bike</Text>
                </View>
                <View style={styles.vieww1}>
                    <View style={styles.viewww}>
                        <Pressable style={styles.v} onPress={() => { Navigation.navigate('Product') }}>
                            <Image
                                source={require('../../Assets/Iconfeather-tv.png')}
                                style={styles.image}
                                resizeMode='contain'
                            />
                        </Pressable>
                        <Text style={styles.text1} numberOfLines={2}>Sony Bravia 42 inch LED</Text>
                    </View>
                    <View style={styles.viewww}>
                        <View style={styles.v}>
                            <Image
                                source={require('../../Assets/Iconfeather-tv.png')}
                                style={styles.image}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text1} numberOfLines={2}>TLC Bravia 42 inch LED</Text>
                    </View>
                    <View style={styles.viewww}>
                        <View style={styles.v}>
                            <Image
                                source={require('../../Assets/Iconfeather-tv.png')}
                                style={styles.image}
                                resizeMode='contain'
                            />
                        </View>
                        <Text style={styles.text1} numberOfLines={2}>HP Bravia 42 inch LED</Text>
                    </View>
                </View>

            </ScrollView>
        </View >
    );
};

// define your stylesBigbasket
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginBottom: moderateScale(40)
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: moderateScale(5),
        paddingHorizontal: moderateScale(5),
        // marginTop: moderateScale(15),
        // marginBottom: moderateScale(15),
        // marginVertical:moderateScale(15),
        width: '90%',
        height: moderateScale(40),
        alignSelf: 'center'
    },
    input: {

        width: '90%',
        color: COLOR.fontColour
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    view1: {

        // borderColor:'black',
        // borderWidth:1,
        padding: moderateScale(22),
        justifyContent: 'center',
        alignItems: 'center',
        height: moderateScale(30),
        width: moderateScale(30),
        borderRadius: moderateScale(30),
        backgroundColor: COLOR.white,
        elevation: 2
    },
    text: {
        textAlign: 'center',
        fontFamily: FONT.primaryFontLight,
        color: COLOR.fontColour,
        fontSize: 12
    },
    view0: {
        alignItems: 'center',
        flex: 1,
        // borderWidth: 1
    },
    vieww: {
        height: 110,
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: moderateScale(30)
    },
    view2: {

        // borderColor:'black',
        // borderWidth:1,
        padding: moderateScale(35),
        justifyContent: 'center',
        alignItems: 'center',
        height: moderateScale(60),
        width: moderateScale(60),
        borderRadius: moderateScale(35),
        backgroundColor: COLOR.white,
        elevation: 2
    },
    press: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: moderateScale(15),
        alignItems: 'center',
        width: '45%'
    },
    view3: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: moderateScale(12)
    },
    view4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(15),
        marginBottom: moderateScale(10),
        marginTop: moderateScale(30)
    },
    view5: {
        flexDirection: 'row',
        paddingHorizontal: moderateScale(15),
        backgroundColor: '#FFFCF5',
        paddingVertical: moderateScale(3),
        alignItems: 'center'
    },
    viewww: {
        width: '24%',
        alignItems: 'center'

    },
    text1: {
        fontFamily: FONT.primaryFontLight,
        fontSize: moderateScale(11)
    },
    vieww1: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: moderateScale(15),
        marginBottom: moderateScale(25),
    },
    v: {
        backgroundColor: COLOR.white,
        elevation: 2,
        padding: moderateScale(5),
        paddingHorizontal: moderateScale(25),
    },
    image: {
        height: moderateScale(50),
        width: moderateScale(30)
    },
    img: {
        // height: moderateScale(22),
        // width: moderateScale(22),

    },
    imgg: {
        // height: moderateScale(35),
        // width: moderateScale(35),
    }

});

//make this component available to the app
export default Home
