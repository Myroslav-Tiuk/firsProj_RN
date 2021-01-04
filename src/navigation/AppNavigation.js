import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainTabScreen from './MainTabScreenNav';

// import Icon from 'react-native-vector-icons'

// import { THEME } from '../theme'
// import MainScreen from '../screens/MainScreen'
// import PostScreen from '../screens/PostScreen';
// import MainTabScreen from './MainTabScreenNav';
// import AboutScreen from '../screens/AboutScreen';




const MainStack = createStackNavigator();
const AboutStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


// const MainStackScreen = ({ navigation }) => {
//     return (
//         <MainStack.Navigator screenOptions={{
//             headerStyle: {
//                 backgroundColor: THEME.MAIN_COLOR
//             },
//             headerTintColor: '#fff',
//         }}>
//             <MainStack.Screen name="Main" component={MainScreen} options={{
//                 title: 'MainScreen',
//             }} />
//             <MainStack.Screen name="Post" component={PostScreen} />

//         </MainStack.Navigator>
//     )
// };

// const AboutStackScreen = ({ navigation }) => {
//     return (
//         <AboutStack.Navigator screenOptions={{
//             headerStyle: {
//                 backgroundColor: THEME.MAIN_COLOR
//             },
//             headerTintColor: '#fff'
//         }}>
//             <AboutStack.Screen name="About" component={AboutScreen} />


//         </AboutStack.Navigator>
//     )
// };



function AppNavigation({ route }) {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Main" component={MainTabScreen} />
                {/* <Drawer.Screen name="About" component={AboutStackScreen} /> */}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
export default AppNavigation;


