import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, Card } from 'react-native-elements';

class Forgot extends React.Component {
    render() {
        return (
            <View style={{ paddingVertical: 20 }}>
                <Card title='パスワード忘れ'>
                    <Button
                        title='リセットメールを送信'
                        onPress={() => this.handleForgot()}
                        buttonStyle={{ marginTop: 20 }}
                    />
                </Card>
            </View>
        );
    }

    //サインアウトボタン押したとき
    handleForgot = () => {
        alert('リセットメールを送信しました。')
    }
}

export default Forgot;