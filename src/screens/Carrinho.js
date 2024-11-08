import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {Div, Title} from '../styles/carrinhoStyles'

export default function Carrinho({navigation}) {

  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [favorites, setFavorites] = useState([false, false, false, false, false, false]);
  

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    if (searchVisible) {
      setSearchText('');
      Keyboard.dismiss();
    } else {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 0);
    }
  };

  return (
    <View styles={styles.container}>
    <View style={styles.whiteBar} />
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Ionicons
      name= "reorder-two-outline"
      size={24} color="black" 
      style={styles.menuIcon} 
      />
    </TouchableOpacity>
    <View style={styles.topRightIcons}>
      <TouchableOpacity onPress={toggleSearch}>
        <Ionicons name="search" size={24} color="black" />
      </TouchableOpacity>
    </View>
    
    <Div styles = {styles.titleDiv}>
      <Title styles= {styles.title}>Carrinho</Title>
      <Text styles= {styles.cartItenCount}>(1000)</Text>
    </Div>
    
    </View>
  );
}

const styles = StyleSheet.create ({
 container: {
   flex: 1,
   width: '100%', 
   },
   
  topRightIcons: {
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    top: 50,
  },
   
   whiteBar: {
    height: 40,
    backgroundColor: '#fff',
  },

   menuIcon: {
    marginLeft: 10,
    marginTop: 10,
  },


});