import React, { Component } from 'react';
//import element from react-native 
import { Text, View, Button, ScrollView, ActivityIndicator,StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';
// //import axios to communicate with api
// import axios from 'axios';

export default class HomeScreen extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            data: []
        }
    }
    static navigationOptions = {
        title: 'Home'
    }
    componentDidMount() {
        return fetch('https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json').then(res => res.json()).then(resJson => {
            console.log(resJson);   
        this.setState({data: resJson.rounds, isLoading: false});
        }).catch(err => console.log('Get World Cup Rounds Error-----------', err));
    }
    render() {
        const { isLoading, data } = this.state;
        if(isLoading) {
            return <View style={styles.activity}>
                        <ActivityIndicator />
                    </View>
        } else {
            return (
                <ScrollView style={styles.container}>
                    <List>
                        {data.length ? data.map((match, i) =><ListItem key={i} style={styles.item}
                                                            title={match.name}
                                                            leftIcon={{name: 'soccer-ball-o', type: 'font-awesome'}}
                                                            onPress={() => this.props.navigation.push('Details', {
                                                                matches: JSON.stringify(match.matches)
                                                            })} /> ) : null}
                    </List>
                    <Text>Home</Text>
                    <Button 
                        title="Go To Details"
                        onPress={() => this.props.navigation.navigate('Details')}
                    />
                </ScrollView>
            );
        }
    }
}

//Create the styles for the component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    },
    activity: {
        flex: 1,
        padding: 20
    }
})