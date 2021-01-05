import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { THEME } from '../theme'
import MainTabScreen from './MainTabScreenNav';
import AboutScreen from '../screens/AboutScreen'
import CreateScreen from '../screens/CreateScreen'

const Drawer = createDrawerNavigator();


const AboutStack = createStackNavigator();
const CreateStack = createStackNavigator();


const AboutStackScreen = ({ navigation }) => {
    return (
        <AboutStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: THEME.MAIN_COLOR
            },
            headerTintColor: '#fff',
        }}>
            <AboutStack.Screen name="About" component={AboutScreen} options={{
                title: 'AboutScreen',
            }} />
        </AboutStack.Navigator>
    )
};

const CreateStackScreen = ({ navigation }) => {
    return (
        <CreateStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#d02860'
            },
            headerTintColor: '#fff'
        }}>
            <CreateStack.Screen name="Create" component={CreateScreen} options={{
                title: "Create"
            }} />


        </CreateStack.Navigator>
    )
};


function AppNavigation({ route }) {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Main" component={MainTabScreen} options={{
                drawerLabel: 'Main Page',
                drawerIcon: () =>  (
                <Ionicons name='layers-outline' size={25}/>
                ),
                
                }}/>
                <Drawer.Screen name="About" component={AboutStackScreen} options={{
                drawerLabel: 'About App',
                drawerIcon: () =>  (
                    <Ionicons name='cube-outline' size={25}/>
                    )
                }} />
                <Drawer.Screen name="Create" component={CreateStackScreen} options={{
                drawerLabel: 'Create Post',
                drawerIcon: () =>  (
                    <Ionicons name='create-outline' size={25}/>
                    )
                }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
export default AppNavigation;


