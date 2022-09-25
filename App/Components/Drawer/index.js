import { Icon } from 'native-base';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView, Dimensions } from 'react-native';

import { COLOR } from '../../Constants/Color';
import Navigation from '../../Service/Navigation';
import { moderateScale, verticalScale } from '../PixelRatio';
const { height, width } = Dimensions.get('screen');

const DrawerContent = () => {
  return (
    <View style={styles.container}>



      <Pressable style={styles.view}  onPress={() => { Navigation.navigate('Profile') }}>
        <Image source={require('../../Assets/384174272.png')} 
        style={{ 
          height: moderateScale(50), 
          width: moderateScale(50), 
          borderRadius: moderateScale(35), 
          marginRight:moderateScale(10) }} />
        <View>
          <Text style={styles.text}>SJDRS4UV</Text>

          <Text style={styles.text}>Level 4</Text>

        </View>
      </Pressable>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.SectionBody}>

          <Pressable
            style={styles.menuitem}
            onPress={() => { Navigation.navigate('Home') }}>
            <Icon
              name="home"
              type="MaterialCommunityIcons"
              style={styles.iconstyle}

            />
            <Text style={styles.sectionHeadingStyle}>Home</Text>
          </Pressable>

          <Pressable
            style={styles.menuitem}
            onPress={() => { Navigation.navigate('Wishlist') }}>
            <Icon
              name="heart"
              type="MaterialCommunityIcons"
              style={styles.iconstyle}

            />
            <Text style={styles.sectionHeadingStyle}>My Wishlist</Text>
          </Pressable>


          <Pressable
            style={styles.menuitem}
            onPress={() => Navigation.navigate('Settings')}>
              <Icon
              name="settings"
              type="Feather"
              style={styles.iconstyle}

            />
            <Text style={styles.sectionHeadingStyle}>Settings</Text>
          </Pressable>

          <Pressable
            style={styles.menuitem}
            onPress={() => Navigation.navigate('Privacy')}>
              <Icon
              name="settings"
              type="Feather"
              style={styles.iconstyle}

            />
            <Text style={styles.sectionHeadingStyle}>Privacy Policy</Text>
          </Pressable>

          <Pressable
            style={styles.menuitem}
            onPress={() => Navigation.navigate('Terms')}>
              <Icon
              name="settings"
              type="Feather"
              style={styles.iconstyle}

            />
            <Text style={styles.sectionHeadingStyle}>Terms and Conditions</Text>
          </Pressable>

          <Pressable
            style={styles.menuitem}
            onPress={() => Navigation.navigate('Login')}>
              <Icon
              name="logout"
              type="MaterialCommunityIcons"
              style={styles.iconstyle}

            />
            <Text style={styles.sectionHeadingStyle}>Logout</Text>
          </Pressable>




        </View>
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionHeadingStyle: {
    color: COLOR.themeColour,
    padding: moderateScale(12),
    fontSize: moderateScale(14),
    paddingLeft: moderateScale(20),
    paddingVertical: moderateScale(20)
  },

  view: {
    borderBottomWidth: 3,
    borderColor: '#fff',
    flexDirection: 'row',
    backgroundColor: COLOR.themeColour,
    padding: moderateScale(10),
    alignItems: 'center'
  },
  SectionBody: {
    paddingTop: moderateScale(10)
  },
  text: {
    color: '#fff'
  },
  menuitem:{
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:moderateScale(10)
  }



});


export default DrawerContent;

