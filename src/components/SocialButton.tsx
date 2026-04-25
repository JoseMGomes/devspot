import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface SocialButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle: object;
  textStyle: object;
}

export function SocialButton({ title, onPress, buttonStyle, textStyle }: SocialButtonProps) {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}