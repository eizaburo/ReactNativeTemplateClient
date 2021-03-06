import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, Card } from 'react-native-elements';
import { Formik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';

class Forgot extends React.Component {
    render() {
        return (
            <View style={{ paddingVertical: 20 }}>
                <ScrollView>
                    <Formik
                        initialValues={{
                            email: ''
                        }}
                        onSubmit={(values) => this.handleForgot(values)}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().email('emailの形式で入力して下さい。').required('emailは必須です。'),
                        })}
                    >
                        {
                            ({ handleSubmit, handleChange, values, errors, touched, handleBlur }) => (
                                <Card title='パスワード忘れ'>
                                    <FormLabel>Email</FormLabel>
                                    <FormInput
                                        autoCapitalize='none'
                                        value={values.email}
                                        onChangeText={handleChange('email')}
                                    />
                                    {touched.email && <FormValidationMessage>{errors.email}</FormValidationMessage>}
                                    <Button
                                        title='リセットメールを送信'
                                        onPress={handleSubmit}
                                        buttonStyle={{ marginTop: 20 }}
                                    />
                                </Card>
                            )
                        }
                    </Formik>
                </ScrollView>
            </View>
        );
    }

    //サインアウトボタン押したとき
    handleForgot = () => {
        alert('リセットメールを送信しました。')
    }
}

export default Forgot;