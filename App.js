import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import 'react-native-gesture-handler';
// other imports
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';

import Home from './screens/Home';
import SplashScreen from './screens/Splash';
import UserInfo from './components/UserInfo';

const Drawer = createDrawerNavigator();
const SPLASH_SCREEN_TIMEOUT = 2000;

GoogleSignin.configure({
  // client ID of type WEB for your server (needed to verify user ID and offline access)
  webClientId:'243030243995-8vns9rio7h8hudp02e104oull89unmdg.apps.googleusercontent.com',
});

function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const App = () => {
  const [showSplash, setSplashStatus] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    isSignedIn();
    setTimeout(() => {
      setSplashStatus(false);
    }, SPLASH_SCREEN_TIMEOUT);
  }, [isSignedIn]);

  const isSignedIn = useCallback(async () => {
    const isUserSignedIn = await GoogleSignin.isSignedIn();
    if (isUserSignedIn) {
      await getCurrentUserInfo();
    }
  }, []);

  const getCurrentUserInfo = async () => {
    try {
      const userConfig = await GoogleSignin.signInSilently();
      setUserInfo(userConfig.user);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
      } else {
        // some other error
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUserInfo(null); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  const CustomDrawerContent = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <UserInfo user={props.user} />
        <DrawerItemList {...props} />
        <DrawerItem label="Your Orders" />
        <DrawerItem label="Help Centre" />
        <Button
          title="Sign out"
          onPress={() => {
            signOut();
          }}
        />
      </DrawerContentScrollView>
    );
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userConfig = await GoogleSignin.signIn();
      setUserInfo(userConfig.user);
    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  if (showSplash) {
    return <SplashScreen />;
  }

  if (userInfo) {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => (
            <CustomDrawerContent {...props} user={userInfo} />
          )}
          edgeWidth={150}
          drawerType="slide">
          <Drawer.Screen name="home" component={Home} />
          <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </View>
  );
};

export default App;
