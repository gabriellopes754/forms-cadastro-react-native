import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput,Alert} from 'react-native';
import Checkbox from "expo-checkbox";

export default function App() {

  const [rg, setRg] =  React.useState('');
  const [nome, setNome] = React.useState('');
  const [idade, setIdade] =  React.useState('');
  const [celular, setCelular] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [endereco, setEndereco] = React.useState('');
  const [curso, setCurso] = React.useState('');
  const [checkbox, setcheck] = React.useState('');



const validacao = () =>{
    if ((idade) < '18') {
      Alert.alert('Usuário menor de idade, não é possivel efetuar cadastro');
    }

  return (
    <View style={styles.container}>
      <Text>Formulário!</Text>
      <StatusBar style="auto" />

      <Text style={styles.field}>RG:</Text>
      <TextInput keyboardType='numeric' onChangeText = {setRg} value={rg} style={styles.textinho} />

      <Text style={styles.field}>NOME:</Text>
      <TextInput onChangeText = {setNome} value={nome} style={styles.textinho} />

      <Text style={styles.field}>idade</Text>
      <TextInput keyboardType='numeric' onChangeText = {setIdade} value={idade} style={styles.textinho} />

       <Text style={styles.field}>celular:</Text>
      <TextInput keyboardType='numeric' onChangeText = {setCelular} value={celular} style={styles.textinho} />

      <Text style={styles.field}>Endereço:</Text>
      <TextInput  onChangeText = {setEndereco} value={endereco} style={styles.textinho} /> 

      <Text style={styles.field}>E-mail:</Text>
      <TextInput  onChangeText = {setEmail} value={email} style={styles.textinho} /> 

      <Text style={styles.field}>Curso:</Text>
      <TextInput  onChangeText = {setCurso} value={curso} style={styles.textinho} /> 
{/* 
      <Text style={styles.textinho}>Selecione o curso desejado:</Text>
          <Text>Administração</Text>
          <Checkbox value={checkbox} onValueChange={setcheck} />
          <Text>Desenvolvimento de Sistemas</Text>
          <Checkbox value={checkbox} onValueChange={setcheck} />
          <Text>Enfermagem</Text>
          <Checkbox value={checkbox} onValueChange={setcheck} /> */}

      <Button
        title="Validar"
        onPress= {validacao}
      />
    </View>
  );  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(105,105,105)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    },
  field: {
    color:'#fff',
    fontSize: 25,
  },

  textinho: {
    backgroundColor: 'rgb(54,54,54)',
    width: '80%',
    borderRadius:10,
    padding:10,
    marginTop:10,
  },

  tex2: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 10,
      paddingHorizontal: 10,
      width: '80%',
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },

  });}