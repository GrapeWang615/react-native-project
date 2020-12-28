import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const instructions = '我是业务2，我读取了业务1设置的全局变量，表明多个业务包是运行在同一个js环境中';

type Props = {};
export default class App2 extends Component<Props> {
    render() {
      let buz1GlobalParam = global.buz1Param;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>{'欢迎来到业务2的世界！ 冒号后面是业务1的变量:'+buz1GlobalParam}</Text>
	              <Image source={require('./imgs/index2.jpg')}/>
                <Text style={styles.instructions}>业务2的文字内容</Text>
                <Text style={styles.instructions}>{instructions}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});