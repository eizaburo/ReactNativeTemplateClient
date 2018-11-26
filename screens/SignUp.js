import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, Card } from 'react-native-elements';
import { Formik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';

class SignUp extends React.Component {
    render() {
        return (
            <View style={{ paddingVertical: 20 }}>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        password: '',
                        passwordConfirm: ''
                    }}
                    onSubmit={values => this.handleSignUp(values)}
                    validationSchema={Yup.object().shape({
                        name: Yup
                            .string()
                            .min(4, '4文字以上です。')
                            .required('名前は必須です。'),
                        email: Yup
                            .string()
                            .email('emailの形式ではありません。')
                            .required('emailは必須です。'),
                        password: Yup
                            .string()
                            .min(4, '4文字以上です。')
                            .required('パスワードは必須です。'),
                        passwordConfirm: Yup
                            .string()
                            .required('パスワードは必須です。')
                            .oneOf([Yup.ref('password')], 'パスワードが一致しません。')
                    })}
                >
                    {
                        ({ handleSubmit, handleChange, values, errors, touched, handleBlur }) => (
                            <Card title='サインアップ'>
                                <FormLabel>名前</FormLabel>
                                <FormInput
                                    autoCapitalize='none'
                                    value={values.name}
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                />
                                {touched.name && <FormValidationMessage>{errors.name}</FormValidationMessage>}
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
                                <FormLabel>パスワード（確認）</FormLabel>
                                <FormInput
                                    autoCapitalize='none'
                                    value={values.passwordConfirm}
                                    onChangeText={handleChange('passwordConfirm')}
                                    onBlur={handleBlur('passwordConfirm')}
                                    secureTextEntry
                                />
                                {touched.passwordConfirm && <FormValidationMessage>{errors.passwordConfirm}</FormValidationMessage>}
                                <Button
                                    title='サインアップ'
                                    onPress={handleSubmit}
                                    buttonStyle={{ marginTop: 20 }}
                                    backgroundColor='#6666FF'
                                />
                            </Card>
                        )
                    }
                </Formik>
            </View>
        );
    }

    //サインアップボタン押したとき
    handleSignUp = () => {
        this.props.navigation.navigate('SignedIn')
    }
}

export default SignUp;