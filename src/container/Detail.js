import React from 'react'
import { View, Text ,Image ,StyleSheet, ScrollView,TouchableOpacity} from 'react-native'
import Ukuran from '../Data/Ukuran.js'

const Detail = ({route,navigation}) => { 
    
    const data = route.params.data
    console.log(data);
    let uk = Ukuran
    
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.HeaderBG}>
                    <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.header}>
                        <Image style={{height:20,width:20}} source={{uri:'https://cdn1.iconfinder.com/data/icons/essentials-pack/96/left_arrow_back_previous_navigation-256.png'}} />
                    </TouchableOpacity>
                    <Image style={{height:'70%',width:'70%'}} source={require('../icon/downshifter-10-running-shoe-CrpbbD-removebg-preview.png')} />
                </View>
                <View style={styles.body}>
                    <View style={{height:35}}>
                        <Image style={{height:35,width:35}} source={{uri:'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/230_Nike_logo-256.png'}} />
                    </View>
                    <View style={styles.TextName}>
                        <Text style={{fontWeight:'bold',fontSize:30}}>Nike Air Max 97</Text>
                    </View>
                    <View style={styles.TextName}>
                        <Text style={{fontWeight:'bold',fontSize:20,marginRight:10}}>$</Text>
                        <Text style={{fontWeight:'bold',fontSize:20}}>299.000</Text>
                    </View>
                </View>
                <View style={styles.uk}>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>Size</Text>
                    <Text style={{fontWeight:'bold',color:'#a9a9'}}>Size Guide</Text>
                </View>
                <ScrollView horizontal style={{padding:20,paddingHorizontal:10}}>
                    <TouchableOpacity style={styles.noUk}>
                        <Text style={{fontSize:18,}}>40</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.noUk}>
                        <Text style={{fontSize:18,}}>41</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.noUk}>
                        <Text style={{fontSize:18,}}>41,5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.noUk}>
                        <Text style={{fontSize:20,}}>42</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.noUk}>
                        <Text style={{fontSize:20,}}>42,5</Text>
                    </TouchableOpacity>
                </ScrollView>
                <View style={styles.pactSize}>
                    <Text style={{fontWeight:'bold'}}>Description</Text>
                    <Image style={{height:30,width:30}} source={{uri:'https://cdn4.iconfinder.com/data/icons/navigation-40/24/chevron-up-256.png'}} />
                </View>
            </ScrollView>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.love}>
                    <Image style={styles.icon} source={{uri:'https://cdn0.iconfinder.com/data/icons/feather/96/heart-256.png'}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('MyBag')} style={styles.love1}>
                    <Text style={styles.text}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
    },
    header:{
        // borderWidth:1,
        height:50,
        alignItems:'flex-start',
        justifyContent:'center',
        paddingHorizontal:15,
        position:'absolute',
        left:8,
        top:10,
    },
    HeaderBG:{
        // borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        borderBottomEndRadius:30,
        borderBottomLeftRadius:30,
        height:200,
        backgroundColor:'#d3d3d3',
    },
    body:{
        height:170,
        // borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    TextName:{
        height:'40%',
        // borderWidth:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },
    uk:{
        height:20,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:10,
    },
    noUk:{
        height:70,
        width:70,
        // borderWidth:1,
        marginHorizontal:5,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        backgroundColor:'#d3d3d3',
    },
    pactSize:{
        height:20,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        // borderWidth:1,
        height:40,
        alignItems:'center',
    },
    bottom:{
        height:70,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        // paddingHorizontal:30
    },
    love:{
        height:50,
        width:55,
        borderWidth:1,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#a9a9a9',
        marginLeft:20,
    },
    icon:{
        height:20,
        width:20,
    },
    love1:{
        height:50,
        width:'70%',
        borderWidth:1,
        backgroundColor:'#000',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        marginRight:20,
    },
    text:{
        fontSize:15,
        color:'#FFFFFF',
    },
});