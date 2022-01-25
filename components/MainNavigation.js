/*
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import HomeScreen from './components/HomeScreen';
import SearchScreen from './components/SearchScreen';
import CreatePost from './components/CreatePost';
import FevScreen from './components/FevScreen';
import ProfileScreen from './components/ProfileScreen';

const Tab = createBottomTabNavigator();
const MainNavigation = () => {
  return (
  <Tab.Navigator
  initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#f35d38',
        tabBarInactiveTintColor: "#D1D3D2",
        showLabel: false,
        tabBarShowLabel: false,
        tabBarStyle: { borderTopLeftRadius: 20,
            borderTopRightRadius: 20, backgroundColor: '#FBFCFE',}
      }}
  >
  <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
        headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
<Tab.Screen
        name="search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="upload"
        component={CreatePost}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="plus-square"  color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="fev"
        component={FevScreen}
        options={{
            headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" size={size} color={color} />
            
          ),
        }}
      />
       <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
            headerShown: false,
           
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />

  </Tab.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});




 */