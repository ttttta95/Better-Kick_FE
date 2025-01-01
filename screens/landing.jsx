import { StyleSheet, Text, View, TextInput,  TouchableOpacity, } from 'react-native';
import Logo from '../assets/logo.svg';
import OrSVG from '../assets/or.svg';
import { useNavigation } from '@react-navigation/native';

export default function Landing(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.Wrap}>
            <Text style={styles.Title1}>당신의 스트레스 없는 나날을 위해</Text>
            <Text style={styles.Title2}>Better Kick</Text>
                <View>
                    <Logo width={150}/>
                </View>
            </View>
            <View style={styles.unBox}>

            </View>
            <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('Login')} activeOpacity={0.9}>
                <Text style={styles.TextBtn}>로그인</Text>
            </TouchableOpacity>
            <OrSVG  width={320} style={styles.pad}/>
            <TouchableOpacity style={styles.Btn2} onPress={() => navigation.navigate('Signup')} activeOpacity={0.9}>
                <Text style={styles.TextBtn2}>회원가입</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    pad:{
        marginTop:15,
        marginBottom:15,
    },
    unBox:{
        height:120,
    },  
    container:{
        flex: 1,
        width:'100vw',
        height:'100vh',
        position:'relative',
        backgroundColor:'#F8F5F1',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    Wrap:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    Title1:{
        marginTop:60,
        width:350,
        color:'#CA848A',
        fontSize:24,
        fontWeight:'700'
    },
    Title2:{
        width:180,
        color:'#CA848A',
        fontSize:36,
        fontWeight:'700'
    },
    Btn:{
        padding:10,
        paddingLeft:80,
        paddingRight:80,
        borderRadius:8,
        backgroundColor:'#CA848A'
    },
    TextBtn:{
        fontSize:20,
        fontWeight:'400',
        color:'white',
    },
    Btn2:{
        padding:10,
        paddingLeft:70,
        paddingRight:70,
        borderRadius:8,
        borderWidth: 2,         // 테두리 두께
        borderColor: '#CA848A',   // 테두리 색상
        borderStyle: 'solid',
    },
    TextBtn2:{
        fontSize:20,
        fontWeight:'400',
        color:'#CA848A',
    }
})