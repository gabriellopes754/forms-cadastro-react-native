import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput,Alert, ScrollView} from 'react-native';
import Checkbox from "expo-checkbox";

export default function App() {

  const [rg, setRg] =  React.useState('');
  const [nome, setNome] = React.useState('');
  const [idade, setIdade] =  React.useState('');
  const [celular, setCelular] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [endereco, setEndereco] = React.useState('');
  const [administracao, setadministracao] = React.useState(false);
  const [desenvolvimento, setdesenvolvimento] = React.useState(false);
  const [enfermagem, setenfermagem] = React.useState(false);

  const validacao = () => {
    if ((rg === '' || nome === '' || celular === '' || email === '' || endereco === '')) {
      Alert.alert('Preencha todos os campos obrigatórios');
    }else if (administracao == false && desenvolvimento == false && enfermagem == false){
      Alert.alert('Preenchimeto do curso obrigatório!')
    } else if (parseInt(idade) < 18) {
      Alert.alert('Usuário menor de idade', 'não é possível efetuar cadastro');
    } else {
        Alert.alert('Cadastro efetuado com sucesso');
    }};


  return (
    
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.field}>Formulário de Cadastro!</Text>
      <StatusBar style="auto" />

      <Text style={styles.field}>RG:</Text>
      <TextInput keyboardType='numeric' onChangeText = {setRg} value={rg} style={styles.textinho} />

      <Text style={styles.field}>NOME:</Text>
      <TextInput onChangeText = {setNome} value={nome} style={styles.textinho} />

      <Text style={styles.field}>Idade</Text>
      <TextInput keyboardType='numeric' onChangeText = {setIdade} value={idade} style={styles.textinho} />

       <Text style={styles.field}>Celular:</Text>
      <TextInput keyboardType='numeric' onChangeText = {setCelular} value={celular} style={styles.textinho} />

      <Text style={styles.field}>Endereço:</Text>
      <TextInput  onChangeText = {setEndereco} value={endereco} style={styles.textinho} /> 

      <Text style={styles.field}>E-mail:</Text>
      <TextInput  onChangeText = {setEmail} value={email} style={styles.textinho} />
      
      <Text style={styles.textocheck}>Selecione o curso desejado:</Text>
          <View style={styles.checkboxContainer}>
            <Checkbox value={administracao} onValueChange={setadministracao} color={administracao ? 'red' : undefined}style={{margin: 8}}/>
            <Text>Administração</Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox value={desenvolvimento} onValueChange={setdesenvolvimento} color={desenvolvimento ? 'red' : undefined}style={{margin: 8}}/>
            <Text>Desenvolvimento de Sistemas </Text>
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox value={enfermagem} onValueChange={setenfermagem} color={enfermagem ? 'red' : undefined} style={{margin: 8}}/>
            <Text>Enfermagem </Text>
          </View>




      <Button
        title="Validar"
        onPress= {validacao}
      />
  </ScrollView>
    </View>
    
  );  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
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
    width: '90%',
    height: 30,
    borderRadius:5,
    padding:0,
    marginTop:5,
  },

  textinho2: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 10,
      paddingHorizontal:0,
      width: '80%',
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textocheck: {
    fontSize: 18,
    marginTop: 5,
    color: "#000",
    margin: 8
  },

  });