import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Curso Técnico Integrado em Informática Perfil:</Text>
      <Text style={styles.text}> Desenvolver programas de computador seguindo as especificações da lógica e das linguagens de programacação. É o que aprende o aluno do curso técnico em informática que, depois de formado, estará apto a instalar sistemas operacionais, aplicativos e periféricos, desenvolver aplicações com acesso a web e banco de dados, realizar manutenção de computadores e instalar redes em locais de pequeno porte.</Text>
     
      <Text style={styles.textTitle}>Duração:</Text>
      <Text style={styles.text}>Duração: 3 anos (6 semestres)</Text>
     
      <Text style={styles.textTitle}>Carga Horária:</Text>
      <Text style={styles.text}>3.380 horas</Text>
      
      <Text style={styles.textTitle}>Saiba mais em</Text>
      <Text style={styles.text}>https://www.ifms.edu.br/campi/campus-nova-andradina/cursos/integrado/informatica</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#96a178',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontFamily: 'Arial',
    color: 'white',
  },
  textTitle:{
    fontFamily: 'Arial',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  }
});
