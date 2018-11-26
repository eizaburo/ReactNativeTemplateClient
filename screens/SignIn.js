import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, Card } from 'react-native-elements';
import { Formik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';

class SignIn extends React.Component {
    render() {
        return (
            <View style={{ paddingVertical: 20 }}>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={values => this.handleSignIn(values)}
                    validationSchema={Yup.object().shape({
                        email: Yup
                            .string()
                            .email('emailの形式で入力して下さい。')
                            .required('emailは必須です。'),
                        password: Yup
                            .string()
                            .min(4, '4文字以上で入力してください。')
                            .required('パスワードは必須です。'),
                    })}
                >
                    {
                        ({ handleSubmit, handleChange, values, errors, touched, handleBlur }) => (
                            <Card title='サインイン'>
                                <FormLabel>Email</FormLabel>
                                <FormInput
                                    autoCapitalize='none'
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                />
                                {touched.email && <FormValidationMessage>{errors.email}</FormValidationMessage>}
                                <FormLabel>パスワード</FormLabel>
                                <FormInput
                                    autoCapitalize='none'
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    secureTextEntry
                                />
                                {touched.password && <FormValidationMessage>{errors.password}</FormValidationMessage>}
                                <Button
                                    title='サインイン'
                                    onPress={handleSubmit}
                                    buttonStyle={{ marginTop: 20 }}
                                    backgroundColor='#03A9F4'
                                />
                                <Button
                                    title='パスワード忘れ'
                                    onPress={() => this.handleForgot()}
                                    buttonStyle={{ marginTop: 30 }}
                                />
                            </Card>
                        )
                    }
                </Formik>
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
    handleSignIn = (values) => {
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