import React from 'react';
import {View ,Text,FlatList,Dimensions} from 'react-native';
import CarItem from '../CarItem'
import styles from './style';
import cars from './cars'
const CartList=(props)=>{
    return(
        <View style={styles.container}>
           <FlatList
           data={cars}
           renderItem={({item})=>
           <CarItem car={item}
           snapToAligment={'start'}
           decelerationRate={'fast'}
           snapToInterval={Dimensions.get('window').height}
           showsVerticalScrollIndicator={false}
           ></CarItem>}>
               
           </FlatList>
        </View>
    )
};

export default CartList;