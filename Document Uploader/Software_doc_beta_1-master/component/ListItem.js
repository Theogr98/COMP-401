import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'

const ListItem = (props) => {
    const {name, id} = props.item;

    const handleDelete = () => {
        // setPressed(!pressed);
         props.onDel(id);
     }

    return (
        <View style={styles.itemContainer}>
                <View style={styles.item}>
                    <Text style={styles.itemTitle}>{name}</Text>
                </View>
                <View>
                    <Button title={'X'} style={styles.button_normal} onPress={handleDelete} />
                </View>
        </View>
    );
};

export default ListItem;

const styles = StyleSheet.create({
    itemContainer:{
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 15,
    },
    item:{
        width:'85%',
        height: 70,
        backgroundColor:'white',
        borderRadius:10,
        marginVertical:10,
        justifyContent:'center',
        paddingLeft:10,
        //style for ios
        shadowOpacity: 0.01, 
        shadowOffset:{
            width:0,
            height:20,
        },
        shadowRadius:10,
        //shadow for android
        elevation:4,
    },
    itemTitle:{
        fontSize: 16,
    },
    button_normal:{
        height: 30,
        width: 20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'orange',
    },
});