import { StyleSheet, Text, View, TextInput,  TouchableOpacity } from 'react-native';
import HomeRed from '../../assets/home_Red.svg';
import HomeBlack from '../../assets/home_Black.svg';
import PeopleRed from '../../assets/people_Red.svg';
import PeopleBlack from '../../assets/people_Black.svg';
import StorageRed from '../../assets/storage_Red.svg';
import StorageBlack from '../../assets/storage_Black.svg';
import { useNavigation } from '@react-navigation/native';

export default function Footer(props){ 
    const navigation = useNavigation('');
    return( 
        <View style={styles.constainer}>
            <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Mypage')} activeOpacity={0.9}>
                {props.people ? <PeopleRed /> : <PeopleBlack />}
                <Text style={props.people ? styles.select : styles.nomal}>my page</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Main')} activeOpacity={0.9}>
                {props.home ? <HomeRed /> : <HomeBlack/>}
                <Text style={props.home ? styles.select : styles.nomal}>home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Storage')} activeOpacity={0.9}>
                {props.storage ? <StorageRed /> : <StorageBlack />}
                <Text style={props.storage ? styles.select : styles.nomal}>storage</Text>
            </TouchableOpacity>
        </View>  
    )
}

const styles = StyleSheet.create({
    constainer:{
        position:'absolute',
        bottom:20,
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    box:{
        display:'flex',
        flexDirection:"column",
        justifyContent:'center',
        alignItems:'center',
    },
    select:{
        color:'#CA848A'
    },
    nomal:{
        color:'#757575'
    }
})