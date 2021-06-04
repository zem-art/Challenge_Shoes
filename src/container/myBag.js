import React from 'react'
import { StyleSheet, Text, View,ScrollView , Image,TouchableOpacity} from 'react-native'

const MyBag = ({route,navigation}) => {
    const data = route.params.goTo
    console.log(data);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.inHeader}>
                    <Image style={{height:10,width:25}} source={require('../icon/line-More.png')} />
                </TouchableOpacity>
                    <View style={styles.inHeader}>
                        <Image style={styles.icon} source={{uri : 'https://cdn1.iconfinder.com/data/icons/feather-2/24/search-256.png'}} />
                        <Image style={styles.icon} source={{uri : 'https://cdn2.iconfinder.com/data/icons/lightly-icons/30/controls-240.png'}} />          
                    <View style={styles.tree}>
                        <Text style={styles.text}>3</Text>
                    </View>
                </View>
            </View>
            <View style={styles.PathTitle}>
                <Text style={{fontSize:30,fontWeight:'bold'}}>My Bag</Text>
            </View>
            <ScrollView style={{padding:20,}}>
                <View style={styles.pathItem}>
                    <View style={styles.image}>
                        <Image style={{height:'70%',width:'70%'}} source={{uri : data.image}} />
                    </View>
                    <View style={styles.pathKet}>
                        <Text style={{fontWeight:'bold',fontSize:17}}>{data.name}</Text>
                        <View style={styles.pathPrice}>
                        <View style={{flexDirection:'row'}}>
                           <Text>$</Text>
                           <Text> {data.price}</Text>
                        </View>
                           <Text style={{color:'#a9a9a9'}}>x1</Text>
                        </View>
                    </View>
                </View>
                <View style={{height:30,}}></View>
            </ScrollView>
            <View style={styles.bottom}>
                <View style={styles.pactBottom}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'#a9a9a9'}}>Total</Text>
                    <Text style={{fontWeight:'bold',fontSize:20,color:'#000000'}}>$ {data.price}</Text>
                </View>
                <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={styles.bottomB}>
                    <Text style={{color:'#ffffff',fontSize:15,}}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MyBag

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffff',
    },
    header:{
        // borderWidth:1,
        height:'10%',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
    },
    inHeader:{
        width:'50%',
        // borderWidth:1,
        height:50,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:20,
    },
    icon:{
        height:20,
        width:20,
    },
    tree:{
        height:30,
        width:30,
        borderRadius:50,
        // borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000'
    },
    text:{
        color:'#fff'
    },
    PathTitle:{
        height:60,
        // borderWidth:1,
        alignItems:'flex-start',
        paddingLeft:20,
        justifyContent:'center',
    },
    image:{
        height:'70%',
        width:'40%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#d3d3d3',
        borderRadius:20,
    },
    pathItem:{
        // borderWidth:1,
        height:100,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:15,
    },
    pathKet:{
        // borderWidth:1,
        // alignItems:'center',
        justifyContent:'center',
        width:'60%',
        height:75,
        marginLeft:10,
        paddingLeft:5
    },
    pathPrice:{
        height:40,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'90%',
        // borderWidth:1,
    },
    pactBottom:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:50,
        // borderWidth:1,
        marginTop:10,
        width:'100%',
        marginBottom:15,
        paddingHorizontal:20,
    },
    bottom:{
        height:'25%',
        padding:10,
        // borderWidth:1,
        alignItems:'center',
    },
    bottomB:{
        alignItems:'center',
        justifyContent:'center',
        // borderWidth:1,
        borderRadius:35,
        height:50,
        backgroundColor:'#000000',
        width:'90%',
    },
})
