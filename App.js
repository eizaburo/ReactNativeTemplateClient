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

//auth
import { isSignIn } from './auth';

//各screenの読み込み
import Home from './screens/Home';
import Profile from './screens/Profile';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Forgot from './screens/Forgot';

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
        SignUp: { screen: SignUp },
        Forgot: { screen: Forgot }
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

    //ローカルステート管理
    state = {
        signedIn: false,
        checkSignIn: false,
    }

    componentDidMount() {
        //サインインの状態を取得
        isSignIn()
            .then(res => {
                this.setState({
                    signedIn: res.signedIn,
                    checkSignIn: true
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        //サインインの情報を取得
        const { checkSignIn, signedIn } = this.state;
        //チェックが終わってない場合は何も返さない
        if(!checkSignIn) return null;
        //サインインの状態によりSwitch
        const Layout = createAppContainer(createRootNavigator(signedIn));
        return (
            <Layout />
        );
    }
}
