import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Logo from '../assets/logo.svg';
import People from '../assets/peopleIcon.svg';
import Pawword from '../assets/passwordIcon.svg';
import {IPContext} from '../contexts';
import { UserContext } from '../contexts';

import { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function Signup() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const navigation = useNavigation();
    const {IP} = useContext(IPContext);
    const {setUserId} = useContext(UserContext);

    const postData = async () => {
        try{
            const res = await fetch(`http://${IP}/user/signup`, {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    user_id:id,
                    password:pw,
                    name:name,
                    number:tel
                })
            })
            if(res.ok){
                navigation.navigate('Survay', { userId: id });
            }
            else{
                console.log(res.status);
            }
        }catch(error){
            console.log(error);
        }
    }
    return (
        <View style={styles.container}>

            <Logo width={50} style={styles.logo} />

            <View style={styles.section}>
                <Text style={styles.title}>Better Kick</Text>
                <View style={styles.inputBox}>
                    <People />
                    <TextInput
                        style={styles.input}
                        placeholder="아이디"
                        onChangeText={setId}
                        value={id}
                    />
                </View>

                <View style={styles.inputBox}>
                    <Pawword />
                    <TextInput
                        type={'password'}
                        style={styles.input}
                        placeholder="비밀번호"
                        onChangeText={setPw}
                        value={pw}
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="이름"
                        onChangeText={setName}
                        value={name}
                    />
                </View>

                <View style={styles.inputBox}>
                    <TextInput
                        style={styles.input}
                        placeholder="전화번호(010-0000-0000)"
                        onChangeText={setTel}
                        value={tel}
                    />
                </View>

                <TouchableOpacity style={styles.Btn} onPress={postData}>
                    <Text style={styles.TextBtn}>다음으로</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    fn: {
        display: 'flex',
        flexDirection: 'row'
    },
    logo: {
        position: 'absolute',
        left: 20,
        top: 0
    },
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#F8F5F1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    inputBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: 300,
        paddingLeft: 10,
        fontSize: 17.986,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 45,
        borderWidth: 1,         // 테두리 두께
        borderColor: 'black',   // 테두리 색상
        borderStyle: 'solid',
    },
    input: {
        width: 280,
    },
    title: {
        textAlign: 'center',
        fontSize: 38,
        fontWeight: '600',
        marginBottom: 10,
        marginTop: 20,
    },
    Btn: {
        width: 150, // 버튼의 너비를 반으로 줄임
        padding: 10, // 버튼의 패딩을 반으로 줄임
        borderRadius: 8,
        backgroundColor: '#CA848A',
        marginTop: 20,
        alignSelf: 'center' // 버튼을 중앙에 배치
    },
    TextBtn: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '400',
        color: 'white',
    },
    section: {
        height: 500,
        gap: 20,
    }
});