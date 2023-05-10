import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { View, StyleSheet, TouchableHighlight, SafeAreaView, Text, FlatList, Alert } from 'react-native';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import DocumentPicker from 'react-native-document-picker';
import ImagePicker from 'react-native-image-crop-picker';
import ListItem from './component/ListItem';

const underlayColorObj = {
    type: "#ffbf01"
}

export default function DocumentServer2() {

    const [getState, setState] = useState([]);

    //select docs from the files
    const selectDoc = async () => {
        try {

            const results = await DocumentPicker.pick({
                allowMultiSelection: true,
            });

            // console.log(results)
           
            // for (const res in results) {
            //     file_results.append({ name: res.name, size: res.size, id: uuidv4(res.name) })
            //     console.log(res)
            // }

            //handle add
            results.map(function (d) {
                setState(getState => [
                    ...getState,
                    {name: d.name, size: d.size, id: uuidv4(d.name)}
                ])
            })

        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log("User cancelled the upload", err);
            } else {
                console.log(err);
            }
        }
    }

    const handleDelete = (id) => {
        setState(
            currentFile=>{
                return currentFile.filter((file)=> file.id !== id);
            }
        );
    }

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: false,
          }).then(image => {
            //console.log(image.path);
            var image_name = /[^/]*$/.exec(image.path)[0];
            setState(getState => [
                ...getState,
                {name: image_name, size: image.size, id: uuidv4(image.path)}
            ])
          }).catch(e=>console.log("Camera cancelled"));
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <FlatList
                style={styles.flexListConatiner}
                data={getState}
                renderItem={({ item }) => <ListItem item={item} onDel={handleDelete} />}
                keyExtractor={item => item.id}
            />
            <View style={styles.buttons}>
                {/*Todo: if the selecDoc length is >5 disable the button or disable submit button until the length <=5*/}
                <TouchableHighlight
                    onPress={selectDoc} style={styles.button} underlayColor={underlayColorObj.type}>
                    <View>
                        <AntdesignIcon name="paperclip"
                            size={35}
                            color="#cccccc"
                        />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={takePhotoFromCamera} style={styles.button} underlayColor={underlayColorObj.type}>
                    <View>
                        <AntdesignIcon name="camera"
                            size={35}
                            color="#cccccc"
                        />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => alert('Do you really want to submit?')} style={styles.button} underlayColor={underlayColorObj.type}>
                    <View>
                        <AntdesignIcon name="clouduploado"
                            size={35}
                            color="#cccccc"
                        />
                    </View>
                </TouchableHighlight>
            </View>

            {/*<View>
            <Button title={'not pressed'} onPress={handleAdd} />
        </View>*/}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#FAFBFF',
        flex: 1,
    },

    title: {
        fontSize: 40,
        marginVertical: 20,
        paddingLeft: '5%',
    },

    flexListConatiner: {
        flex: 3,
    },

    footer: {
        flex: 0.3,
        backgroundColor: 'blue',
        marginBottom: '1%'
    },

    buttons: {
        flexDirection: 'row',
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffaf7a',
        marginBottom: 30,
    },
    button: {
        margin: 4,
        padding: 4,
        backgroundColor: 'orange',
        borderRadius: 20,
        flex: 1,
        alignItems: 'center'
    }
})