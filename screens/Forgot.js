import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, Card } from 'react-native-elements';
import { Formik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';

//axios
import axios from 'axios';

//laravel
import * as Laravel from '../laravel';

class Forgot extends React.Component {

    state = {
        spinner: false,
    }

    render() {
        return (
            <View style={{ paddingVertical: 20 }}>
                <Formik
                    initialValues={{
                        email: ''
                    }}
                    onSubmit={(values) => this.handleForgot(values)}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email('emailの形式で入力して下さい。')
                            .required('emailは必須です。')
                            .test('mail_exist', 'メールが存在しません。', async (value) => {
                                const res = await axios.post(Laravel.ISMAILEXIST_URL, { email: value });
                                if (res.data.exist == true) {
                                    return true;
                                } else {
                                    return false;
                                }
                            }),
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
                                {(touched.email && errors.email) && <FormValidationMessage>{errors.email}</FormValidationMessage>}
                                <Button
                                    title='リセットメールを送信'
                                    onPress={handleSubmit}
                                    buttonStyle={{ marginTop: 20 }}
                                    loading={this.state.spinner}
                                />
                            </Card>
                        )
                    }
                </Formik>
            </View>
        );
    }

    //サインアウトボタン押したとき
    handleForgot = async (values) => {

        //spinner表示
        this.setState({ spinner: true });

        try {
            //リセットメール送信をキック
            const reset = await axios.post(Laravel.PASSWORDREST_URL, { email: values.email });

            //spinner停止
            this.setState({ spinner: false });

            alert('メールを送信しました。');
        } catch (error) {
            this.setState({ spinner: false });
            //spinner停止
            alert('メール送信に失敗しました。');
            console.log(error);
        }
    }
}

export default Forgot;