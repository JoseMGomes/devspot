import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getStyles } from './styles';

const Integrante = ({ nome, bio, imageSource, styles }: any) => (
  <View style={styles.profileSection}>
    <View style={styles.imageContainer}>
      <Image source={imageSource} style={styles.profileImage} />
    </View>
    <Text style={styles.nameTitle}>{nome}</Text>
    <Text style={styles.bioText}>{bio}</Text>
  </View>
);

export function SobreMim() {
  const navigation = useNavigation();
  const route = useRoute<any>();

  const isLightMode = route.params?.isLightMode ?? false;
  const styles = getStyles(isLightMode);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.logoText}>DEV.SPOT</Text>
          <Text style={styles.logoIcon}>✦</Text>
        </View>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Voltar para Home</Text>
        </TouchableOpacity>
        <Text style={styles.mainTitle}>Sobre nós</Text>
        

        <Integrante 
          nome="José Lucas"
          bio="Sou o José Lucas, desenvolvedor de 23 anos, moro em Itu - SP e estou no meu último ano de Análise e Desenvolvimento de Sistemas pela Fatec. Estou direcionando minha carreira para a área de tecnologia, focado em construir sistemas eficientes e com forte interesse no desenvolvimento moderno de aplicações. Tenho atuado principalmente com o ecossistema mobile, utilizando React Native e Expo, além de buscar aprimoramento constante no desenvolvimento back-end utilizando Next.js. Já colaborei na criação de aplicações reais, focando no desenvolvimento da frente mobile de sistemas de gestão e em plataformas de eventos institucionais. Para agregar à arquitetura dos projetos, também possuo uma base forte em segurança da informação, com certificações em Cybersegurança pela Cisco. No dia a dia, sou um profissional extremamente comunicativo e sociável, o que facilita a criação de boas conexões e o trabalho em equipe. Acredito que o bom relacionamento interpessoal e a troca de conhecimentos são essenciais para um ambiente produtivo. Estou sempre disposto a aprender, enfrentar novos desafios e entregar resultados consistentes na área de desenvolvimento."
          imageSource={require('../../assets/jose.jpg')} 
          styles={styles}
        />

        <Integrante 
          nome="Guilherme"
          bio="Sou o Guilherme, desenvolvedor full stack de 21 anos, moro em São Paulo e atualmente estou no último semestre de Análise e Desenvolvimento de Sistemas pela Fatec. Atuo profissionalmente desde o final de 2024, utilizando tecnologias como Next.js, NestJS, TypeScript, Prisma e Docker no desenvolvimento de aplicações modernas, performáticas e bem estruturadas. Tenho facilidade em atuar tanto no backend quanto no frontend, construindo soluções completas com foco em organização, clareza e eficiência. Valorizo código limpo, boas práticas de desenvolvimento e arquitetura bem definida, sempre buscando entregar sistemas consistentes e escaláveis. Trabalho muito bem em equipe, com boa comunicação e colaboração no dia a dia, contribuindo para um ambiente produtivo e alinhado. Acredito que o desenvolvimento vai além do código, envolvendo responsabilidade, troca de conhecimento e foco em resultado. Estou em constante evolução como desenvolvedor, buscando aprender mais, aprimorar minhas habilidades e construir soluções cada vez melhores, com o objetivo de crescer profissionalmente e gerar impacto real através da tecnologia."
          imageSource={require('../../assets/guilherme.png')} 
          styles={styles}
        />

        <Integrante 
          nome="Leonardo F Araujo"
          bio="Sou Leonardo F Araujo, desenvolvedor em aprendizado, focado em Deep Learning e Machine Learning, utilizando Python para construir soluções de backend e trabalhar com dados. Tenho explorado o desenvolvimento de APIs, manipulação de dados e criação de modelos, sempre buscando entender melhor boas práticas de código e estrutura de sistemas. Estou constantemente estudando novas tecnologias e aprimorando minhas habilidades, com o objetivo de criar soluções eficientes e evoluir na área de inteligência artificial. Se você tem uma ideia, vamos conversar."
          imageSource={require('../../assets/leo.jpg')} 
          styles={styles}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Desenvolvido por Trio FATEC</Text>
          <Text style={styles.footerSubText}>Projeto fictício sem fins comerciais.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}