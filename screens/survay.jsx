import { StyleSheet, Text, View, TextInput,  TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../assets/logo.svg';
import { useState, useContext } from 'react';
import { IPContext } from '../contexts.js';

export default function Survay({ route }){
    const { userId } = route.params; // 전달된 데이터 추출
    const navigation = useNavigation();
    const {IP} = useContext(IPContext);
    const [age, setAge] = useState('');
    const [cause, setCause] = useState('');
    const [way, setWay] = useState('');
    const [MBTI, setMBTI] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([
        {"name" : "운동" ,"status": false},
        {"name" : "게임","status": false},
        {"name" : "독서","status": false},
        {"name" : "영화","status": false},
        {"name" : "댄스","status": false},
        {"name" : "자연","status": false},
        {"name" : "명상","status": false},
        {"name" : "여행","status": false},
        {"name" : "DIY","status": false},
        {"name" : "요리","status": false},
        {"name" : "사진촬영","status": false},
        {"name" : "음악","status": false},
        {"name" : "드라마","status": false},

    ])
    const postData = async ()=>{
        if(loading) return ;
        console.log(userId);
        let string = '';
        data.filter((item)=>{
            if (item.status) {
                string+=item.name + ",";
            }
        })
        console.log(string);
        try{
            const res = await fetch(`http://${IP}/user/survay`, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    user_id:userId,
                    method:way,
                    age:age,
                    cause:cause,
                    tendency:string,
                    MBTI:MBTI
                })
            })
            console.log(res.status);
            if(res.ok){
                navigation.navigate('Login');
            }
            else{
                console.log(res.status);
            }
            setLoading(false);
        }catch(error){
            console.log(error);
        }
    }
    return(
        <View style={styles.container}>
            <Logo width={50} style={styles.logo}/>
            <View style={styles.unBox}></View>
            <View style={styles.section}>
                <View style={styles.box}>
                    <Text style={styles.title}>1. 사용자의 나이는?</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="나이를 입력해주세요"
                        onChangeText={setAge}
                        value={age}
                        />
                </View>
                <View style={styles.box}>
                    <Text  style={styles.title}>2. 사용자의 스트레스 원인은?</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="스트레스원인을 입력해주세요"
                        onChangeText={setCause}
                        value={cause}
                        />
                </View>
                <View style={styles.box}>
                    <Text  style={styles.title}>3. 사용자가 가진 스트레스 해소 방법은?</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="스트레스 해소방법을 입력해주세요"
                        onChangeText={setWay}
                        value={way}
                        />
                </View>
                <View style={styles.box}>
                    <Text  style={styles.title}>4. 사용자의 MBTI는?</Text>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="MBTI를 입력해주세요"
                        onChangeText={setMBTI}
                        value={MBTI}
                        />
                </View>
                <View style={styles.box}>
                    <Text style={styles.title}>5. 사용자의 스트레스 해소 성향은?</Text>
                    <View style={styles.dataBox}>
                        {data.map((item, index)=>{
                            return(
                                <TouchableOpacity key={index} style={item.status ? styles.trBox : styles.fsBox} 
                                onPress={() => {
                                    setData((prevData) =>
                                      prevData.map((prevItem, i) =>
                                        i === index ? { ...prevItem, status: !prevItem.status } : prevItem
                                      )
                                    );
                                  }}>
                                    <Text style={item.status ? styles.tr : styles.fs}>{item.name}</Text>
                                </TouchableOpacity>
                            )
                        })}
                        
                    </View>
                </View>
                <TouchableOpacity style={styles.Btn} onPress={()=>{
                    {loading ? null : 
                        postData();
                        setLoading(!loading);
                    }
        
                    }}>
                    <Text style={styles.TextBtn}>회원가입</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    section:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    Btn:{
        width:220,
        padding:5,
        borderRadius:8,
        backgroundColor:'#CA848A'
    },
    TextBtn:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'400',
        color:'white',
    },
    unBox:{
        height:80
    },
    dataBox:{
        width:300,
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around'
    },
    trBox:{
        width:70,
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:'#CA848A',
        borderRadius:40,
        marginBottom:10,
        borderWidth: 1,         // 테두리 두께
        borderColor: '#CA848A',   // 테두리 색상
        borderStyle: 'solid',
    },
    tr:{
        textAlign:'center',
        color:'white',
        fontWeight:'600'
    },
    fsBox:{
        width:70,
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:'white',
        borderWidth: 1,         // 테두리 두께
        borderColor: '#CA848A',   // 테두리 색상
        borderStyle: 'solid',
        borderRadius:40,
        marginBottom:10,
    },
    fs:{
        textAlign:'center',
        color:'#CA848A',
        fontWeight:'600'
    },
    box:{
        marginBottom:10,
    },
    inputBox:{
        marginBottom:5,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        width:300,
        paddingLeft:10,
        fontSize: 16,
        backgroundColor:'white',
        borderRadius:10,
        borderWidth: 1,         // 테두리 두께
        borderColor: 'black',   // 테두리 색상
        borderStyle: 'solid'
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
    title:{
        fontSize:16,
        fontWeight:'600',
        color:'#CA848A',
        marginBottom:10,
    },
})