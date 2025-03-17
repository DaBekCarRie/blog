import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { Context } from "../Context/BlogContext";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  useEffect(()=>{
    getBlogPosts()

    const listener = navigation.addListener('didFocus',()=>{
      getBlogPosts()
    })
    // clear when indexscreen complety close
    return () => {
      listener.remove()
    }
    
  },[])

  return (
    <View>

      {/* <Button title="Add Post" onPress={()=>addBlogPost()}/> */}
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <TouchableOpacity onPress={() => navigation.navigate('Show', {id:item.id})}>
             <View style={styles.row}>
            <Text style={styles.title}>{item.title} - {item.id}</Text>
            <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
            <AntDesign name="delete" style={styles.Icon}/>
            </TouchableOpacity>
          </View>
          </TouchableOpacity>
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={()=>navigation.navigate('Create')}>
                <Feather name="plus" size={30}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical: 20,
        borderColor:'gray',
        borderTopWidth:1,
        paddingHorizontal: 10
    },
    title:{
        fontSize:18
    },
    Icon:{
        fontSize: 24
    }
})

export default IndexScreen;
