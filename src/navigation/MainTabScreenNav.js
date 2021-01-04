import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { THEME } from '../theme'
import MainScreen from '../screens/MainScreen'
import PostScreen from '../screens/PostScreen';
import AboutScreen from '../screens/AboutScreen';
import BookedScreen from '../screens/BookedScreen';


const MainStack = createStackNavigator();
const BookedStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const MainTabScreen = () => {
    return (
        <Tab.Navigator
            
            activeColor="#f0edf6"
            shifting={true}
            // inactiveColor="#3e2465"
            barStyle={{ backgroundColor: THEME.MAIN_COLOR }}
        >
            <Tab.Screen
                name="MainStackScreen"
                component={MainStackScreen}
                options={{

                    tabBarLabel: 'Post',
                    tabBarColor: THEME.MAIN_COLOR,
                    tabBarLabel: 'All',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="folder-open-sharp" color={color} size={26} />
                    ),
                }}
            />

            {/* <Tab.Screen
                name="AboutScreen"
                component={AboutStackScreen}
                options={{
                    tabBarLabel: null,
                    tabBarIcon: ({ color }) => (
                        <IconFontAwesome name="angellist" color={color} size={26} />
                    ),
                }}
            /> */}
            <Tab.Screen
                name="BookedScreen"
                component={BookedStackScreen}
                options={{
                    tabBarLabel: 'Booked',
                    tabBarColor: '#d02860',
                    tabBarLabel: 'Selected',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="star-sharp" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTabScreen;

const MainStackScreen = ({ navigation }) => {
    return (
        <MainStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: THEME.MAIN_COLOR
            },
            headerTintColor: '#fff',
        }}>
            <MainStack.Screen name="Main" component={MainScreen} options={{
                title: 'MainScreen',
            }} />
            <MainStack.Screen name="Post" component={PostScreen} />

        </MainStack.Navigator>
    )
};

const BookedStackScreen = ({ navigation }) => {
    return (
        <BookedStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#d02860'
            },
            headerTintColor: '#fff'
        }}>
            <BookedStack.Screen name="Booked" component={BookedScreen} options={{
                title: "Selected"
            }} />


        </BookedStack.Navigator>
    )
};

