import React, { useState, useCallback } from 'react';
import { SafeAreaView, KeyboardAvoidingView, View, TextInput, TouchableOpacity, FlatList, Text, StyleSheet } from 'react-native';
import StatusBar from '../components/StatusBar';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = () => {
    const [readyToSend, setReadyToSend] = useState(false);
    const [text, setText] = useState('');
    const [Messages, setMessages] = useState([
        { type: 'sent', message: 'Sure! Yes', time: '9:30AM' },
        { type: 'sent', message: 'But I dont know about timing :(', time: '9:40AM' },
        { type: 'recieved', message: 'Did you talk to Peter about yesterday?\nThe meeting was not good and Shreya\nsaying something in between.', time: '9:40AM' },
        { type: 'recieved', message: 'The meeting was supposed to\n end on time but.', time: '9:40AM' },
        { type: 'recieved', message: '🤨😞', time: '9:40AM' },
        { type: 'sent', message: 'Yeah I know Sorry :(', time: '9:40AM' },
        { type: 'recieved', message: 'What Sorry 🤬', time: '9:40AM' },
        { type: 'sent', message: 'Ohh!', time: '9:40AM' },
        { type: 'sent', message: '😞', time: '9:40AM' }
    ]);

    const inputHandler = (value) => {
        if (value.length > 0) {
            setReadyToSend(true)
        }
        else {
            setReadyToSend(false);
        }
        setText(value);

    }

    const keyExtractor = (item, index) => {
        return index;
    }
    const renderItem = useCallback(({ item }) => {
        const isSent = item.type === 'sent';

        // Check if the message contains multiple lines
        const hasMultipleLines = item.message.includes('\n');

        return (
            <View style={[{ flexDirection: isSent ? 'row-reverse' : 'row'},styles.itemConatiner]}>
                <View style={[{
                    backgroundColor: isSent ? '#E4FFDF' : 'white',
                    borderTopLeftRadius: !isSent ? 0 : 16,
                    borderTopRightRadius: isSent ? 0 : 16,}
                    ,styles.itemInnerContainer
                ]}>
                    <View style={{ flexDirection: hasMultipleLines ? 'column' : 'row' }}>
                        <Text style={styles.message}>{item.message}</Text>
                        <Text style={[{ textAlign: hasMultipleLines ? 'right' : 'left' },styles.time]}>{item.time}</Text>
                    </View>
                </View>
            </View>

        )
    }, []);
    return (
        <SafeAreaView style={styles.mainConatiner}>
            <StatusBar />
            <KeyboardAvoidingView behavior='' style={{ flex: 1 }}>
                <FlatList
                    maxToRenderPerBatch={10}
                    removeClippedSubviews={false}
                    data={Messages}
                    updateCellsBatchingPeriod={50}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    windowSize={21}
                    initialNumToRender={10}
                />
                <View style={styles.bottomContainer}>
                    <View style={styles.bottomLeftConatiner}>
                        <MaterialIcons style={{ marginRight: 5 }} name="emoji-emotions" size={24} color='#9C9B9B' />
                        <TextInput
                            onChangeText={inputHandler}
                            placeholderTextColor="#9C9B9B"
                            style={styles.input} placeholder="Message..." />
                        <View style={styles.inputRightConatiner}>
                            <MaterialCommunityIcon name="attachment" size={24} color="#9C9B9B" />
                            <MaterialCommunityIcon name="camera-outline" size={24} color="#9C9B9B" />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.bottomRightContainer}>
                        {!readyToSend ?
                            (<FontAwesome name="microphone" size={20} />)
                            :
                            (<MaterialCommunityIcon name="send" size={20} />)
                        }


                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Home;

const styles=StyleSheet.create({
    itemConatiner:{ 
        alignItems: 'center', 
        marginBottom: 10,
        marginTop:10 
    },
    itemInnerContainer:{
        marginHorizontal: 16,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 16,
        maxWidth: '75%',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16
    },
    message:{ lineHeight: 18, fontSize: 14, color: 'black' },
    time:{ fontSize: 10, color: '#9C9B9B', marginLeft: 15, textAlignVertical: 'bottom'},
    mainConatiner:{ flex: 1, backgroundColor: '#EEEEEE' },
    bottomContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
        justifyContent: 'space-around'
    },
    bottomLeftConatiner:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#dddd',
        backgroundColor: 'white',
        height: 50,
        width: '83%',
        borderRadius: 100,
        paddingLeft: 12,
        paddingRight: 15
    },
    input:{
        fontSize: 12,
        fontWeight: '400',
        color: 'black',
        flex: 1,
        height: 40,
        borderColor: '#dddd',
        borderRadius: 20,
        paddingHorizontal: 10,
    },
    inputRightConatiner:{ flexDirection: 'row', alignItems: 'center', gap: 12 },
    bottomRightContainer:{
        backgroundColor: '#38D15A',
        width: 40,
        height: 40,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }

})