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
import DropDownPicker from 'react-native-dropdown-picker';
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
        prevprice: '2599',
        discount: '15-22%',
        netprice: '1800-2000',
        img: require('../../Assets/logo.png'),
        img2: require('../../Assets/hp1.png'),
        date: 'Sun 24 Oct'
    },


];

// create a component
const Cart = () => {



    const [payment, setpayment] = useState('');


    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={COLOR.themeColour} />
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Card style={{
                    padding: moderateScale(15)
                }}>
                    <Text style={[styles.text1, { fontFamily: FONT.primaryFontBold }]}>Rajiv Pathak</Text>
                    <Text style={styles.text1}>RD Colony, Pushpak Apartment, Hooghly, West Bengal, PIN-719365</Text>
                    <Text style={styles.text1}>894657350</Text>

                    <Pressable style={styles.press}>
                        <Text style={[styles.text1, { color: COLOR.white, fontFamily: FONT.primaryFont }]}>Change Address</Text>
                    </Pressable>
                </Card>
                <FlatList
                    style={{}}
                    data={data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => {
                        return (

                            <Card style={{
                                marginVertical: moderateScale(5),
                                padding: moderateScale(20),
                                height: moderateScale(185)
                            }} onPress={() => { Navigation.navigate('Product') }}>
                                <View style={styles.view1}>
                                    <View style={{

                                        width: '25%',
                                    }}>
                                        <Image
                                            source={item.img2}
                                            style={{ height: moderateScale(80), width: moderateScale(80), marginBottom: moderateScale(10), alignSelf: 'center' }}
                                            resizeMode='contain'
                                        />

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

                                        </View>
                                    </View>
                                    <View style={{

                                        width: '25%'
                                    }}>
                                        <DropDownPicker
                                            items={[

                                                { label: 'One', value: 'One' },
                                                { label: 'Two', value: 'Two' },
                                                { label: 'Three', value: 'Three' },


                                            ]}
                                            defaultValue={payment}
                                            containerStyle={{ height: 40, width: '100%', zIndex: 99999999999 }}
                                            style={{ backgroundColor: '#fafafa' }}
                                            placeholder="Qty"
                                            placeholderStyle={{ color: '#000' }}

                                            itemStyle={{
                                                justifyContent: 'flex-start'
                                            }}
                                            arrowColor='#000'
                                            dropDownStyle={{ backgroundColor: '#fafafa', width: '100%', }}
                                            onChangeItem={item => setpayment(item.value)}
                                            style={{}}
                                        />
                                    </View>

                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                    <Text style={[styles.text1, { fontFamily: FONT.primaryFontBold }]}>Delivery by {item.date} </Text>
                                    <View >
                                        <Text style={[styles.text, { color: 'red', textDecorationLine: 'underline' }]}>REMOVE</Text>
                                    </View>
                                </View>
                            </Card>

                        );
                    }}
                />
                <Card >
                    
                        <View style={styles.view0}>
                            <Text style={styles.textt}>Particulars</Text>
                            <Text style={styles.textt}>Amount(Rs)</Text>
                        </View>
                        <View style={styles.view0}>
                            <Text style={styles.text0}>HP Laptop</Text>
                            <Text style={[styles.textt, { textAlign: 'left', width: '24%' }]}>19000</Text>
                        </View>
                        <View style={styles.view0}>
                            <Text style={styles.text}>MRP@23000</Text>

                        </View>
                        <View style={styles.view0}>
                            <Text style={styles.text0}>Discount@10%</Text>
                            <Text style={[styles.text0, { textAlign: 'left', width: '25%' }]}>SCGST@5%</Text>
                            <Text style={[styles.textt, { textAlign: 'left', width: '24%' }]}>950</Text>
                        </View>
                        <View style={[styles.view0, { borderBottomColor: COLOR.fontColourLight, borderBottomWidth: 1, paddingBottom: moderateScale(10) }]}>
                            <Text style={styles.text0}>(Rs.2300)</Text>
                            <Text style={[styles.text0, { textAlign: 'left' }]}>GST@5%</Text>
                            <Text style={[styles.textt, { textAlign: 'left', width: '24%' }]}>950</Text>
                        </View>
                        <View style={styles.view0}>
                            <Text style={styles.textt}>Total</Text>
                            <Text style={[styles.textt, { textAlign: 'left', width: '24%' }]}>Rs.20700</Text>
                        </View>
                   
                </Card>
                <View style={{
                    paddingBottom:moderateScale(100),
                    backgroundColor:COLOR.white
                }}>
                    <Pressable style={styles.press}>
                        <Text style={[styles.text1, { color: COLOR.white, fontFamily: FONT.primaryFont }]}>Continue</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View >
    );
};

// define your stylesBigbasket
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
    },
    press: {
        backgroundColor: COLOR.themeColour,
        alignItems: 'center',
        marginHorizontal: moderateScale(20),
        padding: moderateScale(8),
        marginTop: moderateScale(20)
    },
    text1: {
        fontFamily: FONT.primaryFontLight,
        color: COLOR.fontColour
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
        color: COLOR.fontColour
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
        marginBottom: moderateScale(20),
        alignItems: 'center',
        // padding: moderateScale(10),
        backgroundColor: COLOR.white,
        // elevation: 3,
        width: '98%',
        alignSelf: 'center',
        zIndex: 999999
    },
    view2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },
    view0: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        padding: moderateScale(15)

    },
    text0: {
        fontFamily: FONT.primaryFontLight,
        color: COLOR.fontColourLight
    },

    textt: {
        fontFamily: FONT.primaryFont,
        fontSize: moderateScale(14)
    },


});

//make this component available to the app
export default Cart
