import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, Card } from 'react-native-elements';

class SignUp extends React.Component {
    render() {
        return (
            <View style={{ paddingVertical: 20 }}>
                <Card title='サインアップ'>
                    <FormLabel>名前</FormLabel>
                    <FormInput />
                    <FormValidationMessage>error</FormValidationMessage>
                    <FormLabel>Email</FormLabel>
                    <FormInput />
                    <FormValidationMessage>error</FormValidationMessage>
                    <FormLabel>パスワード</FormLabel>
                    <FormInput />
                    <FormValidationMessage>error</FormValidationMessage>
                    <FormLabel>パスワード（確認）</FormLabel>
                    <FormInput />
                    <FormValidationMessage>error</FormValidationMessage>
                    <Button
                        title='サインアップ'
                        onPress={() => this.handleSignUp()}
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor='#6666FF'
                    />
                </Card>
            </View>
        );
    }

    //サインアップボタン押したとき
    handleSignUp = () => {
        this.props.navigation.navigate('SignedIn')
    }
}

export default SignUp;