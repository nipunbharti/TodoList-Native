import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  AsyncStorage,
  Button,
  TextInput,
  Keyboard,
  Platform
} from "react-native";

const isAndroid = Platform.OS == "android";
const viewPadding = 10;

export default class TodoList extends Component {
  state = {
    tasks: [],
    text: ""
  };

  changeTextHandler = text => {
    this.setState({ text: text });
  };

  addTask = () => {
    // let notEmpty = this.state.text.trim().length > 0;
    // if (notEmpty) {
    //   this.setState(
    //   	prevState => {
  		//     let { tasks, text } = prevState;
  		//     tasks = [...tasks, text];
  		//     return{
  		//     	tasks: tasks,
  		//     	text: ""
  		//     }
    //   	}
    //   )
    // }
    console.log("Add task!");
  };

  deleteTask = i => {
    // this.setState(
    //   prevState => {
    //   	let tasks = [...prevState.tasks];
    //   	tasks = [...tasks.slice(0,i),...tasks.slice(i+1)];
    //   	return{
    //   		tasks: tasks,
    //   	}
    //   }
    // );
    console.log("Delete task");
  };

  componentDidMount() {
    // Keyboard.addListener(
    //   isAndroid ? "keyboardDidShow" : "keyboardWillShow",
    //   e => this.setState({ viewPadding: e.endCoordinates.height + viewPadding })
    // );

    // Keyboard.addListener(
    //   isAndroid ? "keyboardDidHide" : "keyboardWillHide",
    //   () => this.setState({ viewPadding: viewPadding })
    // );
  }

  render() {
    return (
      <View
        style={[styles.container, { paddingBottom: this.state.viewPadding }]}
      >
        <FlatList
          style={styles.list}
          data={this.state.tasks}
          renderItem={
          	({ item, index }) =>
      		    <View>
	              <View style={styles.listItemCont}>
	                <Text style={styles.listItem}>
	                  {item}
	                </Text>
	                {/* <Button title="X" onPress={() => this.deleteTask(index)} /> */} 
	                <Button title="X" />
	              </View>
	              <View style={styles.hr} />
	            </View>
        	}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={this.changeTextHandler}
          onSubmitEditing={this.addTask}
          value={this.state.text}
          placeholder="Add Tasks"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: viewPadding,
    paddingTop: 20
  },
  list: {
    width: "100%"
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18
  },
  hr: {
    height: 1,
    backgroundColor: "gray"
  },
  listItemCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textInput: {
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: "gray",
    borderWidth: isAndroid ? 0 : 1,
    width: "100%"
  }
});

AppRegistry.registerComponent("TodoList", () => TodoList);
