import { StyleSheet, Text, View, TextInput,  TouchableOpacity, Image } from 'react-native';
import Footer from './component/footer';
import Logo from '../assets/logo.svg';
import { useEffect, useContext, useState } from 'react';
import { IPContext } from '../contexts';

export default function Storage({route}){
    const {id} = route.params
    const {IP} = useContext(IPContext);
    const [data, setData] = useState('');
    const dum = [
        {
            "solution_id" : 1,
            "title" : "차마시기",
            "content" : "본 연구의 목적은 환경적으로나 시기적으로 스트레스가 많은 보호관찰 청소년들에게 스트레스 감소에 적합한 차문화 프로그램을 개발하여 그 효과성을 검증하고자 한다. 프로그램 실시 사전과 사후에 스트레스 척도 점수의 차이를 평가하여 그 효과성을 검증하였다. 연구결과, 스트레스 척도 점수는 스트레스 점수 평균은 77.7(SD 3.53)이었고, 프로그램 참여 후 스트레스 점수 평균은 74.9(SD 3.23)으로 나타나 프로그램 참여 전과 참여 후의 스트레스 점수 수준은 유의한 차이가 나는 것으로 확인되었다. 즉, 차문화치료 프로그램에 참여한 보호관찰 청소년들의 스트레스 정도는 통계적으로 유의하게 감소된 것으로 나타났다. 그러므로 차문화 프로그램은 보호관찰 청소년들이 가지는 다양한 힘듦으로 나타나는 스트레스 감소에 효과적이라는 것이 밝혀졌으므로, 향후 차문화 프로그램을 지속적으로 실행하여서 보호관찰 청소년들의 정서적 안정과 스트레스 감소에 도움을 주고 가족 내 관계소통을 증진시키는데 기여하기를 바란다.",
            "src" : require("../assets/drink_small.png")
        },
        {
            "solution_id" : 2,
            "title" : "스퀴시",
            "content" : "스퀴시란 부드러운 폴리우레탄폼 등의 소재로 만들어진 장난감이다. 감촉이 부드럽고 말랑해 한 손으로 주무르는 방식으로 사용한다. 영단어로 '으깨다'를 의미하는 'squish'에서 유래했다.조서은 가천대 길병원 정신건강의학과 교수는 '화가 났을 때 어깨나 팔다리를 주무르면 근육이 이완되면서 긴장도를 완화할 수 있다. 스트레스볼도 마찬가지'라며 '부드러운 물건을 반복적으로 손에 쥐었다 놓는 운동으로 손가락의 신경을 자극하면서 고민거리나 정신적 스트레스로부터 주의를 분산시키는 환기 효과도 기대해볼 수 있다'고 설명했다.스퀴시를 손에 쥐어 손을 바쁘게 놀려 흡연을 대신할 수 있다.",
            "src" : require("../assets/sqc_small.png")
        },
        {
            "solution_id" : 3,
            "title" : "견과류, 다크초콜릿 먹기",
            "content" : "일반적으로 스트레스를 받으면 무의식적으로 더 많은 음식을 먹게 된다. 이때 스트레스 해소 식품을 섭취하는 것이 도움이 된다.미국의 여성생활 잡지 ‘위민스 헬스’(Women's Health)는 ‘스트레스 해소 음식 7가지’를 공개했다.스트레스 해소 식품 첫 번째는 아몬드가 들어가 있는 다크 초콜릿이다. 다크 초콜릿은 스트레스 호르몬 수치 감소에 효과적이며, 혈압을 떨어뜨리는 효능이 있다. 또한 에너지를 주는 단백질과 몸에 좋은 단일불포화지방도 풍부하다. 우울증 완화 효과가 있는 아몬드와 함께 섭취하면 궁합이 좋다.견과류 역시 스트레스 해소 식품이다. 호두, 피스타치오 등의 견과류에는 섬유질과 항산화제, 불포화지방산이 많이 함유하고 있어 혈압을 낮추는 데 탁월하다. 특히 호두에 들어있는 오메가-3 지방산은 우울증을 완화시키는 효능이 있어 주목받고 있다. 또한 캐슈넛와 아몬드에 들어가 있는 성분인 셀레늄은 기분을 좋게 만든다.",
            "src":require("../assets/cocoa_small.png")
        },
        {
            "solution_id" : 4,
            "title" : "웃음요가",
            "content" : "하루 10분에서 15분만 웃어도 최대 40칼로리의 열량까지 소모할 수 있어 웃음 요가를 통해 운동 효과도 기대'웃음 요가'를 통해 스트레스를 풀면 생산성과업무 창의력을 동시에 상승 및 스트레스 해소 가능\n억지로라도 '하하하' 소리를 내며 웃는 동작을반복하고, 리드미컬한 박수와 심호흡을결합합니다. 상상 속 상황을 연기하며 웃음을유도하고, 이를 진짜 웃음으로 이어가세요.",
            "src":require("../assets/yoga_small.png")
        },
        {
            "solution_id" : 5,
            "title" : "우드카빙",
            "content" : "재단의 사회공헌활동인 우드카빙은 참가자의안정감과 스트레스 해소에 효과적인 매력을 살려 지역의 청소년 정서 지원과 관련 종사자의 소진예방 등을 목적으로 진행됐다.안정감과 정서 지원을 제공하여 스트레스 해소에 효과적이다\n목재를 선택한 후 스케치를 그리고 조각칼로천천히 깎아 형태를 만듭니다. 안전 장비를착용하고 방향에 주의하며 세부 작업으로마무리하세요.",
            "src":require("../assets/wood_small.png")
        },
        {
            "solution_id" : 6,
            "title" : "나무목욕",
            "content" : "산림치유 프로그램은 걷기, 명상, 운동, 초실감기술을 활용한 가상 체험 등 다양한 활동 으로구성 되어 있으며 참여 하는 활동에 따라 다양한 치유 효과가 있는 것으로 나타났다. 산림 치유효과가 가장 뛰어난 활동은 숲 속 걷기로 우울증과 불안증세 완화에 효과를 보였으며 숲속을 걷거나 앉아서 풍경을 바라 보는 활동 만으로도 체내염증 반응을 완화하고 스트레스 지수를 낮추는효과가 있는 것으로 나타났다.\n숲속에서 천천히 걸으며 나무와 자연의 소리를느끼고, 깊게 숨을 들이마십니다. 자연과교감하며 휴식을 취하고 스트레스를 해소하세요.",
            "src":require("../assets/porest_small.png")
        },
    ]
    useEffect(()=>{
        getData();
    }, [])
    const getData = async ()=>{
        console.log(id);
        try{
            const res = await fetch(`http://${IP}/record/${id}`, {
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                } 
            })
            const j = await res.json();
            if(res.ok){
                setData(j);
            }
        }catch(error){
            console.log(error);
        }
        
    }
    return (
        <View style={styles.container}>
            <Logo width={50} style={styles.logo}/>
            <View style={styles.wrap}>
                {data.result?.map((item, index) => {
                    // `dum`에서 해당 `solution_id`와 일치하는 데이터를 찾음
                    const matchedData = dum.find(d => d.solution_id === item.solution_id);
    
                    return matchedData ? (
                        <View key={index} style={styles.section}>
                            <Text style={styles.title}>{matchedData.title}</Text>
                            <Image source={matchedData.src} />
                            <TouchableOpacity style={styles.btn}>
                                <Text>상세 보기</Text>
                            </TouchableOpacity>
                        </View>
                    ) : null;
                })}
            </View>
            <Footer people={false} home={false} storage={true} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        position:'relative',
        backgroundColor:'#F8F5F1',
    },
    logo:{
        position:'absolute',
        left:20,
        top:-30
    },
    title:{
        color:"#CA848A",
        fontWeight:'600',
        marginBottom:10
    },
    section:{
        width:'100%',
        backgroundColor:'white',
        borderRadius:10,
        padding:20,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        shadowColor: '#000', // 그림자 색상
        shadowOffset: { width: 0, height: 0 }, // X: 0, Y: 0
        shadowOpacity: 0.1, // 그림자 투명도 (10%로 설정)
        shadowRadius: 10, // 강도 (Blur 효과)
        elevation: 10, // 안드로이드에서 그림자 효과를 적용하려면 elevation 필요
        marginBottom:20
    },
    btn:{
        marginTop:10,
        borderWidth: 2,         // 테두리 두께
        borderColor: 'black',   // 테두리 색상
        borderStyle: 'solid',
        padding:10,
        borderRadius:10
    },
    wrap:{
        position:'absolute',
        top:110,
        left:16
    }
})