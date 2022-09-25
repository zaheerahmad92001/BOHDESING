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
// import Slider from '../../Components/Slider';
import Slider2 from '../../Components/Slider2';
const { height, width } = Dimensions.get('screen');

const data = [
    {
        model: 'Hp i7 TB Laptop',
        rating: '4.7',
        chip: 'Pentium Gold',
        ram: 'RAM 4GB, I7th',
        gen: '3rd Generation',
        graphics: 'AMD Graphic Card',
        screen: '15" Screen',
        price: '₹2599',
        offer: '1800-2000',

        value: 1
    },
    {
        value: null
    },
    {
        value: null
    },
    {
        value: null
    },

];


// create a component
const Compare = () => {


    const [show, setshow] = useState(false)

    return (

        <View style={styles.container}>
            <StatusBar backgroundColor={COLOR.themeColour} />
            <Header />

            <View style={{ marginHorizontal: moderateScale(15) }}>
                <View style={styles.view}>
                    <Text style={styles.text1}>Compare Box: Laptop</Text>
                    <Pressable onPress={() => setshow(!show)}>
                        {!show ?
                            <Text style={styles.text}>Compare images</Text> :
                            <Text style={styles.text}>Back to features</Text>
                        }
                    </Pressable>
                </View>
            </View>
            <FlatList
                style={{ backgroundColor: '#fff' }}
                data={data}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => {
                    return (

                        <View style={{ width: width / 2.25, alignItems: 'center', marginBottom: moderateScale(6), marginLeft: moderateScale(12) }}>
                            <Card style={styles.card}>
                                {
                                    item.value != null ?

                                        <View >
                                            {!show ?
                                                <View>
                                                    <Text style={styles.text3}>{item.model} </Text>
                                                    <Text style={styles.text1}>
                                                        <Image source={require('../../Assets/Iconawesome-star.png')}

                                                        />
                                                        ({item.rating})</Text>
                                                    <Item style={styles.item}><Text style={styles.text1}>{item.chip}</Text></Item>
                                                    <Item style={styles.item}><Text style={styles.text1}>{item.ram}</Text></Item>
                                                    <Item style={styles.item}><Text style={styles.text1}>{item.gen}</Text></Item>
                                                    <Item style={styles.item}><Text style={styles.text1}>{item.graphics}</Text></Item>
                                                    <Item style={styles.item}><Text style={styles.text1}>{item.screen}</Text></Item>
                                                    <Item style={styles.view1}>
                                                        <Text style={[styles.text1, { color: COLOR.fontColourLight }]}>MRP:</Text>
                                                        <Text style={[styles.text3, { textDecorationLine: 'line-through' }]}>{item.price}</Text>
                                                    </Item>
                                                    <View style={styles.view1}>
                                                        <Text style={[styles.text1, { color: COLOR.fontColourLight }]}>Now:</Text>
                                                        <Text style={styles.text3}>{item.offer}</Text>
                                                    </View>
                                                    <View style={styles.view1}>
                                                        <Text style={styles.text}>Remove</Text>
                                                        <Text style={styles.text}>View Deals</Text>
                                                    </View>
                                                </View> :
                                                <View>
                                                    {/* <Image
                                                        source={require('../../Assets/hp1.png')}
                                                        style={{ height: moderateScale(100), width: '100%' }}
                                                    /> */}
                                                    <Slider2/>
                                                    <View style={{ marginVertical: moderateScale(15) }}>
                                                        <Text style={styles.text3}>{item.model} </Text>
                                                        <Text style={styles.text1}>{item.chip}</Text>
                                                    </View>
                                                    
                                                    
                                                </View>


                                            }

                                        </View> :
                                        <View style={styles.vieww}>
                                            <Image source={require('../../Assets/Iconionic-ios-add.png')}
                                                style={{ marginBottom: moderateScale(10) }}
                                            />
                                            <Text style={styles.text}>Add a laptop to compare</Text>
                                        </View>
                                }


                            </Card>
                        </View>

                    );
                }}
            />

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
        marginVertical: moderateScale(15)
    },
    card: {
        height: moderateScale(270),
        width: '96%',
        padding: moderateScale(15)
    },
    view1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: moderateScale(5)
    },
    text: {
        fontFamily: FONT.primaryFontLight,
        color: COLOR.themeColour,
        textAlign: 'center'
    },
    vieww: {
        alignItems: 'center',
        justifyContent: 'center',
        height: moderateScale(240)
    },
    text1: {
        fontFamily: FONT.primaryFontLight,
        marginBottom: moderateScale(5)
    },
    text3: {
        fontFamily: FONT.primaryFont,
        marginBottom: moderateScale(5)
    },
    item: {
        marginBottom: moderateScale(2)
    },
    img:{
        flexDirection:'row', 
        justifyContent:"space-between"
    }
    


});

//make this component available to the app
export default Compare
