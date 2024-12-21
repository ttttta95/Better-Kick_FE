import { StyleSheet, Text, View, TextInput,  TouchableOpacity } from 'react-native';
import Logo from '../assets/logo.svg';
import People from '../assets/peopleIcon.svg';
import Pawword from '../assets/passwordIcon.svg';

import { useState } from 'react';

export default function Login(){
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    return(
        <View style={styles.container}>
            
            <Logo width={50} style={styles.logo}/>
            

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
                    <TextInput
                    style={styles.input}
                        placeholder="비밀번호"
                        onChangeText={setPw}
                        value={pw}
                        />
                </View>

                <Text style={styles.}>
                    로그인 상태 유지하기
                </Text>
                <TouchableOpacity style={styles.Btn}>
                <Text style={styles.TextBtn}>로그인</Text>
                </TouchableOpacity>
                <View style={styles.fn}>
                    <Text>아이디 찾기</Text>
                    <Text>비밀번호 재설정</Text>
                    <Text>회원가입</Text>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    fn:{
        display:'flex',
        flexDirection:'row'
    },
    logo:{
        position:'absolute',
        left:20,
        top:0
    },
    container:{
        flex: 1,
        position:'relative',
        backgroundColor:'#F8F5F1',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'

    },
    inputBox:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        maxWidth:300,
        paddingLeft:10,
        fontSize: 17.986,
        backgroundColor:'white',
        borderRadius:10,
        borderWidth: 1,         // 테두리 두께
        borderColor: 'black',   // 테두리 색상
        borderStyle: 'solid'
    },
    input:{
        width:280,
    },
    title:{
        textAlign:'center',
        fontSize:38,
        fontWeight:'600',
        marginBottom:10,
    },
    Btn:{
        width:150,
        padding:10,
        borderRadius:8,
        backgroundColor:'#CA848A',
        marginTop:20,
        alignSelf:'center',
    },
    TextBtn:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'400',
        color:'white',
    },
    section:{
        height:500,
        gap:20,
    }
})