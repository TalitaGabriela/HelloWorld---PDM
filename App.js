import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <h1 style={styles.text}>Curso Técnico Integrado em Informática Perfil:</h1>
      <p style={styles.text}>Desenvolver programas de computador seguindo as especificações da lógica e das linguagens de programacação. É o que aprende o aluno do curso técnico em informática que, depois de formado, estará apto a instalar sistemas operacionais, aplicativos e periféricos, desenvolver aplicações com acesso a web e banco de dados, realizar manutenção de computadores e instalar redes em locais de pequeno porte.</p>
      
      <h1 style={styles.text}>Duração:</h1>
      <p style={styles.text}>3 anos(6 semestres)</p>

      <h1 style={styles.text}>Carga Horária:</h1>
      <p style={styles.text}>3.380 horas</p>

      <h1 style={styles.text}>Saiba mais em:</h1>
      <p style={styles.text}>https://www.ifms.edu.br/campi/campus-nova-andradina/cursos/integrado/informatica</p>
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
  }
});
