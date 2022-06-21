import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Animated from 'react-native-reanimated';

function HomeScreen({ navigation }) {
  return (
    <Animated.View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </Animated.View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <Animated.View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </Animated.View>
  );
}

const Drawer = createDrawerNavigator();

export default function Drawers() {
  return (
   
    
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
  
  );
}