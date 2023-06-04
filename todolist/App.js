import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, Text, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [buttons, setButtons] = useState([]);

  const handleAddButtonPress = () => {
    setButtons([...buttons, { text: '', isChecked: false }]);
  };

  const handleButtonPress = (index) => {
    console.log('버튼이 눌렸습니다. 인덱스:', index);
  };

  const handleTextChange = (text, index) => {
    const newButtons = [...buttons];
    newButtons[index].text = text;
    setButtons(newButtons);
  };

  const handleCheckboxPress = (index) => {
    const newButtons = [...buttons];
    newButtons[index].isChecked = !newButtons[index].isChecked;
    setButtons(newButtons);
  };

  const handleDeleteButton = (index) => {
    const newButtons = [...buttons];
    newButtons.splice(index, 1);
    setButtons(newButtons);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}> To-Do List </Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAddButtonPress}
      >
        <Text style={styles.addButtonText}> + </Text>
      </TouchableOpacity>

      <ScrollView style={styles.scrollView}>
        <View style={styles.buttonContainer}>
          {buttons.map((button, index) => (
            <View style={styles.buttonRow} key={index}>
              <TouchableOpacity
                style={styles.checkbox}
                onPress={() => handleCheckboxPress(index)}
              >
                {button.isChecked ? (
                  <AntDesign name="checkcircle" size={32} color="#C5CBD4" />
                ) : (
                  <AntDesign name="checkcircleo" size={32} color="#424242" />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, button.isChecked && styles.disabledButton]}
                onPress={() => handleButtonPress(index)}
                disabled={button.isChecked}
              >
                <View style={styles.buttonContent}>
                  <Text style={[styles.buttonText, button.isChecked && styles.disabledButtonText]}>
                  {button.text}</Text>
                </View>
                {!button.isChecked && (
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => handleTextChange(text, index)}
                    value={button.text}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteButton(index)}
              >
                <AntDesign name="close" size={24} color="red" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleText: {
    position: 'absolute',
    top: 70,
    left: 40,
    fontSize: 40,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#C5CBD4',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    position: 'absolute',
    top: 75,
    right: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 20,
  },
  scrollView: {
    flex: 1,
    width: '100%',
    marginTop: 160,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginBottom: 20,
  },
  deleteButton: {
    marginLeft: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#3E4957',
    padding: 25,
    borderRadius: 15,
    marginLeft: 15,
    marginBottom: 20,
    width: 250,
    height: 75,
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: '#C5CBD4',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  disabledButtonText: {
    color: 'white',
    fontSize: 20,
    textDecorationLine: 'line-through',
    textDecorationColor: '#8E9195',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    color: 'white',
    fontSize: 20,
    opacity: 0,
  },
});
