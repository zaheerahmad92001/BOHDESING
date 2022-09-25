 import React,{useEffect} from 'react';
 import {NavigationContainer} from '@react-navigation/native';
 import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';

 import Navigation from './App/Service/Navigation';
 import {Card, Root} from 'native-base';
 import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ShadowPropTypesIOS,
} from 'react-native';
import Login from './App/Screen/Auth/Login';
import Home from './App/Screen/Home';
import Catagory from './App/Screen/Catagory';
import Product from './App/Screen/Product';
import Receipt from './App/Screen/Receipt';
import Warranty from './App/Screen/Warranty';
import Registry from './App/Screen/Registry';
import Launches from './App/Screen/Launches';
import Compare from './App/Screen/Compare';
import ReceiptDetails from './App/Screen/Receipt/ReceiptDetails';
import WarrantyDetails from './App/Screen/Warranty/WarrantyDetails';
import ServiceRequest from './App/Screen/ServiceRequest';
import Company from './App/Screen/Company';
import DrawerNav from './App/Navigation/Drawer';
import Maps from './App/Screen/Maps';
import Notification from './App/Screen/Notification';
import SignUp from './App/Screen/Auth/Register';
import Reset from './App/Screen/Auth/ResetPassword';
import Profile from './App/Screen/Profile';
import Request from './App/Screen/Request';
import Favourite from './App/Screen/Favourite';
import Settings from './App/Screen/Settings';
import Privacy from './App/Screen/PrivacyPolicy';
import SplashScreen from 'react-native-splash-screen';
import Terms from './App/Screen/TermsConditions';
import Wishlist from './App/Screen/Wishlist';
import Dealers from './App/Screen/Dealers';
import Cart from './App/Screen/Cart';
 const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <Root>
      <NavigationContainer ref={r => Navigation.setTopLevelNavigator(r)}>
        <Stack.Navigator
          initialRouteName="Login"
          headerMode="none"
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            gestureDirection: 'horizontal',
            ...TransitionPresets.SlideFromRightIOS,
          }}>
          {
            <>
              
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Home" component={DrawerNav} />
              <Stack.Screen name="Catagory" component={Catagory} />
              <Stack.Screen name="Product" component={Product} />
              <Stack.Screen name="Receipt" component={Receipt} />
              <Stack.Screen name="Warranty" component={Warranty} />
              <Stack.Screen name="Registry" component={Registry} />
              <Stack.Screen name="Launches" component={Launches} />
              <Stack.Screen name="Compare" component={Compare} />
              <Stack.Screen name="ReceiptDetails" component={ReceiptDetails} />
              <Stack.Screen name="WarrantyDetails" component={WarrantyDetails} />
              <Stack.Screen name="ServiceRequest" component={ServiceRequest} />
              <Stack.Screen name="Company" component={Company} />
              <Stack.Screen name="Maps" component={Maps} />
              <Stack.Screen name="Notification" component={Notification} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="Reset" component={Reset} />
              <Stack.Screen name="Request" component={Request} />
              <Stack.Screen name="Favourite" component={Favourite} />
              <Stack.Screen name="Settings" component={Settings} />
              <Stack.Screen name="Privacy" component={Privacy} />
              <Stack.Screen name="Terms" component={Terms} />
              <Stack.Screen name="Wishlist" component={Wishlist} />
              <Stack.Screen name="Dealers" component={Dealers} />
              <Stack.Screen name="Cart" component={Cart} />
              {/* <Stack.Screen name="Profile" component={Profile} /> */}
            </>
          }
        </Stack.Navigator>
      </NavigationContainer>
    </Root>
  );
};
 
 export default App;
 
