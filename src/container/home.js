import React from 'react'
import { ScrollView, StyleSheet, Text, View , Image,TouchableOpacity} from 'react-native'
import Data from '../Data/Data.js'

const Home = ({navigation}) => {
  
  let data = Data

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.inHeader}></View>
        <View style={styles.inHeader}>
          <Image style={styles.icon} source={{uri : 'https://cdn1.iconfinder.com/data/icons/feather-2/24/search-256.png'}} />
          <Image style={styles.icon} source={{uri : 'https://cdn2.iconfinder.com/data/icons/lightly-icons/30/controls-240.png'}} />          
          <View style={styles.tree}>
          <Text style={styles.text}>3</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomHeader}>
        <Text style={styles.Title}>Shoes</Text>
        <View style={styles.sortd}>
          <Text style={styles.sor}>Sort by</Text>
          <View>
            <Image style={styles.icon} source={{uri:'https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_expand_more_48px-256.png'}} />
          </View>
        </View>
      </View>
      <ScrollView style={styles.scroll}>
      {data.map((dummy)=> (
        <TouchableOpacity onPress={()=> navigation.navigate('Detail' , {data: dummy})} style={styles.body}>
          <View style={styles.pathLove}>
          <Image style={styles.icon} source={{uri:'https://cdn0.iconfinder.com/data/icons/feather/96/heart-256.png'}} />
          </View>
          <View style={styles.inBody}>
            <Image style={{height:'100%',width:'70%'}} source={{uri : dummy.image}} />
          </View>
          <View style={styles.pathPrice}>
            <Text style={{fontWeight:'bold', fontSize:15}}>{dummy.name}</Text>
            <View style={{flexDirection:'row', marginTop:5}}>
                <Text >$</Text>
                <Text>{dummy.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
        <View style={{height:30,}}></View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFFFFF',
  },
  header:{
    // borderWidth:1,
    height:'10%',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
  },
  bottomHeader:{
    height:'15%',
    // borderWidth:1,
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
    padding:20,
  },
  icon:{
    height:20,
    width:20,
  },
  text:{
    color:'#fff'
  },
  pathPrice:{
    width:'100%',
    // borderWidth:1,
    alignItems:'center',
    height:50
  },
  pathLove:{
    height:40,
    // borderWidth:1,
    alignItems:'flex-end',
    justifyContent:'center',
    position:'absolute',
    right:15,
    top:10,
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
  inBody:{
    // borderWidth:1,
    height:130,
    alignItems:'center',
    justifyContent:'center',
  },
  body:{
    height:200,
    // borderWidth:1,
    borderRadius:20,
    backgroundColor:'#d3d3d3',
    marginVertical:10,
    padding:10,
  },
  scroll:{
    padding:10,
  },
  sortd:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
    // borderWidth:1,
    height:50,
    width:100,
  },
  sor:{
    fontWeight:'bold',
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
  Title:{
    fontWeight:'bold',
    fontSize:30,
  },
})

