import React, { Component } from 'react';
import { ScrollView, View, Button, StyleSheet } from 'react-native';
import { List, ListItem, Text, Card,  } from 'react-native-elements';

export default class DetailsScreen extends Component {
    static navigationOptions = {
        title: 'Details'
    }
    render() {
        const { navigation } = this.props;
        //Parse the params from the navigation
        const matches = JSON.parse(navigation.getParam('matches', 'No matches found'));

        return (
             <ScrollView>
               <Card style={styles.container}>
                   {
                       matches.map((match) => {
                       return <View key={match.num} style={styles.subContainer}>
                            {match.group && <View><Text>{match.group}</Text></View>}
                            <View>
                                <Text h3>{match.team1.name} vs {match.team2.name}</Text>
                            </View>
                            <View>
                                <Text h5>{match.date}</Text>
                            </View>
                            <View>
                                <Text h4>{match.score1} - {match.score2}</Text>
                            </View>
                            <View>
                                {match.goals1.length > 0 && match.goals1.map((goal, i2) => <View key={i2}>
                                                                                                <Text h5>{goal.name} - {goal.minute}</Text>
                                                                                            </View>)}
                                {match.goals2.length > 0 && match.goals2.map((goal, i3) => <View key={i3}>
                                                                                            <Text h5>{goal.name} - {goal.minute}</Text>
                                                                                          </View>)}

                            </View>

                        </View>
                       })
                   }
               </Card>
             </ScrollView> 
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    subComtainer: {
        flex: 1,
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#CCCCCC',
    }
})