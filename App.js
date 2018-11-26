import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
    createSwitchNavigator,
    DrawerItems,
    createAppContainer
} from 'react-navigation';

//各screenの読み込み
import Home from './screens/Home';
import Profile from './screens/Profile';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

//Tab（ヘッダを表示するためstackを入れ子に）
const HomeTab = createBottomTabNavigator(
    {
        Home: { screen: createStackNavigator({ screen: Home }) },
        Profile: { screen: createStackNavigator({ screen: Profile }) }
    }
);

//SignedIn(Tab + Drawer)
const SignedIn = createDrawerNavigator(
    {
        Home: { screen: HomeTab }
    }
);

//SignedOut(Stack)
const SignedOut = createStackNavigator(
    {
        SignIn: { screen: SignIn },
        SignUp: { screen: SignUp }
    }
);

//Switch
const createRootNavigator = (signedIn = false) => {
    return createSwitchNavigator(
        {
            SignedIn: { screen: SignedIn },
            SignedOut: { screen: SignedOut }
        },
        {
            initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
        }
    );
}

//App
export default class App extends React.Component {
    render() {
        const Layout = createAppContainer(createRootNavigator(false));
        return (
            <Layout />
        );
    }
}
