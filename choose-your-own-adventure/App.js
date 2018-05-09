import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const throwUp = {
  "story": "Jeff threw up. The End!",
}

const creepyHouse = {
  "story": "Jeff got eaten by a robot.",
}

const salmonella = {
  "story": "Jeff got salmonella and died.",
}


const run = {
  "story": "The pancake was delicious. Jeff then went for a long run in the woods",
  "option1Text": "Take some Tums",
  "option2Text": "Throw up and go eat the pancakes",
  "option1NextCase": salmon,
  "option2NextCase": salmon,
}

const salmon = {
  "story": "The salmon gave him an upset stomach",
  "option1Text": "Take some Tums",
  "option2Text": "Throw up and go eat the pancakes",
  "option1NextCase": salmonella,
  "option2NextCase": throwUp,
}

const pancake = {
  "story": "The pancake was delicious. Jeff then went for a long run in the woods",
  "option1Text": "Run past the creepy house",
  "option2Text": "Run to the ice cream store",
  "option1NextCase": creepyHouse,
  "option2NextCase": salmonella,
}

const beginning = {
  "story": "Jeff found himself in front of a spread of amazing breakfast foods.",
  "option1Text": "Eat the Pancake",
  "option2Text": "Eat the smoked salmon",
  "option1NextCase": pancake,
  "option2NextCase": salmon,
}

export default class App extends React.Component {
  state = {
    currentPage: beginning
  }

  onSelectOption = (optionNumber) => {
    if (optionNumber === 1) {
      const nextOption = this.state.currentPage.option1NextCase
      this.setState({ currentPage: nextOption })
    }

    if (optionNumber === 2) {
      const nextOption = this.state.currentPage.option2NextCase
      this.setState({ currentPage: nextOption })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.currentPage.story}</Text>
        { this.state.currentPage.option1NextCase && 
          <Button title={this.state.currentPage.option1Text} onPress={() => this.onSelectOption(1)} />
        }
        { this.state.currentPage.option2NextCase &&
          <Button title={this.state.currentPage.option2Text} onPress={() => this.onSelectOption(2)} />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
