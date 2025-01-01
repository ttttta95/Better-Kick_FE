import { StyleSheet, Text, View, TextInput,  TouchableOpacity } from 'react-native';
import Logo from '../assets/logo.svg';
import People from '../assets/peopleIcon.svg';
import Pawword from '../assets/passwordIcon.svg';
import Check from '../assets/check.svg';
import { IPContext, UserContext } from '../contexts';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function Login(){
    const navigation = useNavigation();
    const {IP} = useContext(IPContext);
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const { settingId } = useContext(UserContext);
    const postData = async () =>{
        try{
            const res = await fetch(`http://${IP}/user/login`, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    user_id:id,
                    password:pw
                })
            })

            if(res.ok){
                settingId(id);
                navigation.navigate('Main', { userId: id });
            }
            else{
                console.log("ㅗㅗ");
            }
        }catch(error){
            console.log(error);
        }
    }
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
                    <Pawword />
                    <TextInput
                    style={styles.input}
                        placeholder="비밀번호"
                        secureTextEntry={true}
                        onChangeText={setPw}
                        value={pw}
                        />
                </View>

                <View style={styles.ugi}>
                    <Check  />
                    <Text style={[{paddingLeft:10}]}>
                        로그인 상태 유지하기
                    </Text>
                    
                </View>
                
                <TouchableOpacity style={styles.Btn} onPress={postData}>
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

    ugi:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        width:280,
        marginBottom:20,
    },
    fn:{
        marginTop:20,
        width:260,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
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
        marginBottom:15,
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
        fontSize:24,
        fontWeight:'600',
        marginBottom:40,
    },
    Btn:{
        width:300,
        padding:10,
        borderRadius:8,
        backgroundColor:'#CA848A'
    },
    TextBtn:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'400',
        color:'white',
    },
    section:{
        display:'flex',
        alignItems:'center',
        height:380,
    }
})