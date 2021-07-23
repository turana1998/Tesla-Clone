import React from 'react';
import {View,Text,ImageBackground} from 'react-native';
import styles from './style';
import Button from '../Button/index'
const CarItem=(props)=>{
    const{name,line,image,line2}=props.car;
    return(
        <View style={styles.carContainer}>
        <ImageBackground
          source={image}
          style={styles.image}/>
          <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{line}{'   '}
              <Text style={styles.subtitle2}>{line2}</Text>
            </Text>
          </View>
          <View style={styles.buttonContainer}>
          <Button type="primary" 
          content={"Custom order"}
          onPress={()=>{
              console.warn("Custom order")
          }}></Button>
          
          <Button type="secondry" 
          content={"Existing order"}
          onPress={()=>{
              console.warn("Existing order")
          }}></Button>
          </View>
         
      </View>
    );
};

export default CarItem;