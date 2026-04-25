import { StyleSheet } from 'react-native';

export const getStyles = (isLightMode: boolean) => {
  const bgColor = isLightMode ? '#ffffff' : '#050c17';
  const textColor = isLightMode ? '#050c17' : '#fff';
  const subTextColor = isLightMode ? '#555555' : '#a0a0a0';
  const accentColor = isLightMode ? '#0088aa' : '#00d1ff';
  const footerBg = isLightMode ? '#0088aa' : '#00d1ff';
  const footerText = isLightMode ? '#ffffff' : '#050c17';

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: bgColor,
    },
    scrollContent: {
      paddingBottom: 0,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 30,
    },
    logoText: {
      color: textColor,
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: 2,
    },
    logoIcon: {
      color: accentColor,
      fontSize: 20,
      marginLeft: 5,
    },
    backButton: {
      paddingHorizontal: 25,
      marginBottom: 15,
    },
    backButtonText: {
      color: accentColor,
      fontSize: 16,
      fontWeight: '600',
    },
    mainTitle: {
      color: textColor,
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 30,
    },
    profileSection: {
      paddingHorizontal: 25,
      marginBottom: 50,
      alignItems: 'center',
    },
    imageContainer: {
      borderWidth: 2,
      borderColor: accentColor,
      borderRadius: 15,
      padding: 5,
      marginBottom: 20,
    },
    profileImage: {
      width: 220,
      height: 220,
      borderRadius: 10,
      backgroundColor: isLightMode ? '#f0f0f0' : '#1a222f',
    },
    nameTitle: {
      color: textColor,
      fontSize: 24,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      marginBottom: 12,
    },
    bioText: {
      color: subTextColor,
      fontSize: 15,
      lineHeight: 24,
      textAlign: 'justify',
    },
    footer: {
      backgroundColor: footerBg,
      padding: 20,
      alignItems: 'center',
      marginTop: 10,
    },
    footerText: {
      color: footerText,
      fontWeight: 'bold',
      fontSize: 14,
    },
    footerSubText: {
      color: footerText,
      fontSize: 12,
    },
  });
};