import {View, Button, StyleSheet } from 'react-native'

const Generator = (props) =>{
  return (
    <View style = {styles.addItem} >
      <Button
        title = "+"
        onPress = {() => props.add()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  addItem: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    //backgroundColor: '#ecf0f1',
    //padding: 8,
  },
});

export default Generator