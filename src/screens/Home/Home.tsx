import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  Switch,
  Linking,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { getStyles } from "./styles";

export function Home() {
  const navigation = useNavigation<any>();
  const [isEnabled, setIsEnabled] = useState(false);

  const styles = getStyles(isEnabled);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  const openLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Não foi possível abrir o link: ${url}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.logoText}>DEV.SPOT</Text>
          <Text style={styles.logoIcon}>✦</Text>
        </View>
        <View style={styles.imageWrapper}>
          <View style={styles.imageFrame}>
            <Image
              source={require("../../assets/trio.png")}
              style={styles.profileImg}
            />
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>
            Eleve seu negócio digital a outro nível
            <Text style={styles.highlight}>
              {" "}
              com um desenvolvimento de qualidade!
            </Text>
          </Text>
          <Text style={styles.description}>
            Olá! Somos um trio de desenvolvedores da FATEC prontos para
            transformar ideias em interfaces funcionais e sistemas eficientes.
          </Text>

          <TouchableOpacity
            style={styles.mainButton}
            onPress={() =>
              navigation.navigate("SobreMim", { isLightMode: isEnabled })
            }
          >
            <Text style={styles.buttonText}>Sobre nós</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.outlineButton}
            onPress={() => Alert.alert("Entre em contato")}
          >
            <Text style={styles.outlineButtonText}>Entre em contato!</Text>
          </TouchableOpacity>
          <Text style={styles.sectionTitle}>Acesse nossas redes:</Text>

          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>
              {isEnabled ? "Modo Claro ativado" : "Modo Escuro ativado"}
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#0088aa" }}
              thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => openLink("https://github.com/JoseMGomes")}
          >
            <Text style={styles.socialText}>GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => openLink("https://www.linkedin.com/in/josemgomess")}
          >
            <Text style={styles.socialText}>Linkedin</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => openLink("https://www.instagram.com/gomess.ze/")}
          >
            <Text style={styles.socialText}>Instagram</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Desenvolvido por Trio FATEC</Text>
          <Text style={styles.footerSubText}>
            Projeto fictício sem fins comerciais.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
