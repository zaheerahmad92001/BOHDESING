import * as React from 'react';
import { Image, Linking, View } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { COLOR } from '../Constants/Color';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import { Icon } from 'native-base';
import TabBar from '../Components/TabBar';
import Profile from '../Screen/Profile';
import Request from '../Screen/Request';
import Favourite from '../Screen/Favourite';
import Cart from '../Screen/Cart';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const BottomTab = () => {
  return (
    <Tab.Navigator
      // tabBarVisible={false}
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
      //     let iconName;
      //     if (route.name === 'Home') {
      //       iconName = 'phone-alt';
      //       size = focused ? 25 : 20;
      //       color = focused ? '#FF65C3' : '#5C19E3';
      //     } else if (route.name === 'Shopping') {
      //       iconName = 'user-alt';
      //       size = focused ? 25 : 20;
      //       color = focused ? '#FF65C3' : '#5C19E3';
      //     } else if (route.name === 'Dining') {
      //       iconName = 'gift';
      //       size = focused ? 25 : 20;
      //       color = focused ? '#FF65C3' : '#5C19E3';
      //     } else if (route.name === 'DineWin') {
      //       iconName = 'rocketchat';
      //       size = focused ? 25 : 20;
      //       color = focused ? '#FF65C3' : '#5C19E3';
      //     }

      //     return <Icon name={iconName} type="FontAwesome5" style={{ color, fontSize: size }} />;
      //   },
      // })}

      tabBarOptions={{
        activeTintColor: COLOR.themeColour,
        showLabel: false
      }}

      tabBar={props => <TabBar {...props} />}

    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        initialParams={{ image: require('../Assets/home.png') }} 
      />
      <Tab.Screen 
        name="Request" 
        component={Request} 
        initialParams={{ image: require('../Assets/question.png') }}  
      />
      <Tab.Screen
        name="scan"
        component={Cart}
        initialParams={{ image: require('../Assets/cart.png') }}  
        // options={{
        //   tabBarIcon: ({ color, focused }) => (
        //     <View style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 1, padding: 5, position: 'absolute', top: -10, zIndex: 9999999 }}>
        //       <Icon
        //         name="home"
        //         type="Feather"
        //         style={{ fontSize: 23, color: '#A9A9A9' }}
        //       />
        //     </View>
        //   ),
        // }}
      />
      <Tab.Screen name="Favourite" component={Favourite} initialParams={{ image: require('../Assets/Iconfeather-heart.png') }}   />
      <Tab.Screen name="Profile" component={Profile} initialParams={{ image: require('../Assets/384174272.png') }}   />
    </Tab.Navigator>
  );
};

export default BottomTab;
