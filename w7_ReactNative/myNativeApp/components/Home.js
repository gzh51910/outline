import React from 'react';

import {View,Text,TextInput,Button,Picker } from 'react-native'

import {Header} from 'react-native-elements'

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            username:'laoxie'
        }

        this.changeUsername = this.changeUsername.bind(this);
    }
    changeUsername(e){
        this.setState({
            username:e.target.value
        })
    }
    render(){
        let {username} = this.state;
        let fontSize = 16;
        for(let i=1;i<=6;i++){
            if(this.props['h'+i] === true){
                fontSize = 30-i*2
            }
        }
        return (
            <View>
                <Text style={{fontSize}}>Props:{this.props.h1}</Text>
                <Text>Home组件：</Text>
                <Text>UserName: {username}</Text>
                <TextInput value={username} onChange={this.changeUsername}/>
                <Button title="提交"/>


                <Picker
                selectedValue={this.state.language}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})
                }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
        )
    }
}

export default Home;