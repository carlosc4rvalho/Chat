import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Button } from 'react-native';

export default function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([
    { sender: 'other', text: 'Oi! Como você está?' },
    { sender: 'user', text: 'Estou bem, obrigado!' },
  ]);

  const sendMessage = () => {
    if (message.trim() === '') return;
    setChat([...chat, { sender: 'user', text: message }]);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chat</Text>
      <View style={styles.chatContainer}>
        {chat.map((message, index) => (
          <ChatMessage key={index} sender={message.sender}>
            {message.text}
          </ChatMessage>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={text => setMessage(text)}
          placeholder="Digite sua mensagem..."
        />
        <Button title="Enviar" onPress={sendMessage} color="#841584" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function ChatMessage({ sender, children }) {
  return (
    <View style={[
      styles.messageContainer,
      sender === 'user' ? styles.userMessage : styles.otherMessage
    ]}>
      <Text style={styles.messageText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#841584',
  },
  chatContainer: {
    flex: 1,
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    height: 40,
  },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: '#EAEAEA',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  }
});
