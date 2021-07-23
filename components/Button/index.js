import React from 'react';
import { View, Pressable, Text } from 'react-native';
import styles from './style'
const Button = (props) => {

    const type=props.type;
    const bgcolor=type==='primary'? '#171A20CC' :'#FFFFFFA6';
    const Textcolor=type==='primary'? '#FFFFFFA6' :'#171A20CC';
    const content=props.content;
    const onPress=props.onPress;
    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button,{backgroundColor:bgcolor}]}
                onPress={() =>onPress()}
            >
                <Text style={[styles.text ,{color:Textcolor}]}>{content}</Text>
            </Pressable>

        </View>
    );
};

export default Button;