import React from 'react'; //all components sholud be in caps
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'; //text,view stylesheet are constant components, we use {}

// You can import from local files
//import AssetExample from './components/AssetExample';
//import Disha from './components/Disha';

export default class App1 extends React.Component {
  //making a class that is child of raect component
  constructor() {
    //to initialize values
    super(); //it is asking permission from react.component(parent) to make changes in this class(component)
    this.state = { color: 'red', like: 0 }; //here the brackets are for json;because here there are key:"value",
  }

  //inbuild function related to different stages of the lifecycle of component
  //1) mounting - constructor(), render, componentDidMount()
  //2) updating - render(), componentDidUpdate()
  //3) unmounting

  componentDidMount() {
    console.log('the component has mounted');
    console.log('color before the componet mounting = ', this.state.color);
    this.setState({ color: 'blue' }); //the {} is used cause the states contains JSON
    console.log('color after the componet mounted = ', this.state.color);
  }

  changecolor() {
    this.setState({ color: 'black' });
  }

  increaseLike() {
    this.setState({ like: this.state.like + 1 });
  }

  render() {
    return (
      <View style={styles.container}>
        {
          //view is a container as it is holding different components ;
        }
        <TouchableOpacity
          style={styles.textbox}
          onPress={() => {
            this.changecolor();
          }}>
          {
            //here we have to use the arrow function, and this function is changing the name of the color from blue to black.
          }
          <Text style={styles.text1}>This is revision class</Text>
        </TouchableOpacity>
        <Text>{this.state.color}</Text>

        <View>
          <TouchableOpacity
            onPress={() => {
              this.increaseLike();
            }}>
            <Image
              source={require('./assets/fishnet.png')}
              style={styles.netimage}
            />
          </TouchableOpacity>

          <Text>Like {this.state.like}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  textbox: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 30,
    backgroundColor: 'pink',
    borderStyle: 'dotted',
    borderWidth: 5,
    borderTopColor: 'aqua',
    borderBottomColor: 'purple',
    borderRightColor: 'blue',
    borderLeftColor: 'magenta',
  },

  text1: {
    fontSize: 30,
  },

  netimage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 10,
  },
});
