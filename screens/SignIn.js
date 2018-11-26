import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, Card } from 'react-native-elements';

class SignIn extends React.Component {
    render() {
        return (
            <View style={{ paddingVertical: 20 }}>
                <Card title='サインイン'>
                    <FormLabel>Email</FormLabel>
                    <FormInput />
                    <FormValidationMessage>error</FormValidationMessage>
                    <FormLabel>パスワード</FormLabel>
                    <FormInput />
                    <FormValidationMessage>error</FormValidationMessage>
                    <Button
                        title='サインイン'
                        onPress={() => this.handleSignIn()}
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor='#03A9F4'
                    />
                    <Button
                        title='パスワード忘れ'
                        onPress={() => this.handleForgot()}
                        buttonStyle={{ marginTop: 30 }}
                    />
                </Card>
                <Card title='サインアップ'>
                    <Button
                        title='サインアップ'
                        onPress={() => this.handleSignUp()}
                        buttonStyle={{ marginTop: 0 }}
                        backgroundColor='#6666FF'
                    />
                </Card>
            </View>
        );
    }

    //サインインボタン押したとき
    handleSignIn = () => {
        this.props.navigation.navigate('SignedIn')
    }

    //サインアップボタン押したとき
    handleSignUp = () => {
        this.props.navigation.navigate('SignUp')
    }

    //Forgotボタン押したとき
    handleForgot = () => {
        this.props.navigation.navigate('Forgot')
    }
}

export default SignIn;