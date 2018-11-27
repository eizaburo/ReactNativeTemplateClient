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

//redux
import { Provider } from 'react-redux';
import createStore from './createStore';
import { connect } from 'react-redux';

//persist
import { PersistGate } from 'redux-persist/integration/react';

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

//switch layout
class SwitchLayout extends React.Component {
    render() {
        let signedIn = false;
        const stored_access_token = this.props.state.userData.user.access_token;
        if(stored_access_token !== '' && stored_access_token !== undefined) signedIn = true;

        const SignedInContainer = createAppContainer(SignedIn);
        const SignedOutContainer = createAppContainer(SignedOut);

        if(signedIn){
            return(<SignedInContainer/>);
        }else{
            return(<SignedOutContainer/>);
        }

    }
}

const mapStateToProps = state => ({ state: state });
const SiwtchLayoutContainer = connect(mapStateToProps,null)(SwitchLayout);

//store & persistor
const { store, persistor } = createStore();

//App
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <SiwtchLayoutContainer />
                </PersistGate>
            </Provider>
        );
    }
}
