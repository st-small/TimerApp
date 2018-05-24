import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import moment from 'moment'

const DATA = {
  timer: 1234567,
  laps: [12345, 2345, 34567, 98765],
}

function Timer({ interval }) {
  const duration = moment.duration(interval)
  const centiseconds = Math.floor(duration.milliseconds() / 10)
  return <Text style={styles.timer}>
    {duration.minutes()}:{duration.seconds()},{centiseconds}</Text>
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer interval={DATA.timer}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    alignItems: 'center',
    paddingTop: 130,
  },
  timer: {
    color: '#FFFFFF',
    fontSize: 76,
    fontWeight: '200',
  }
})
