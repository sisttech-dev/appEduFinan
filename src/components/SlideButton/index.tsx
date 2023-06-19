import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SlideButtonProps {
  label: string;
}

export function SlideButton({ label }: SlideButtonProps) {
  const [selected, setSelected] = useState(false);

  function handlePress() {
    setSelected(!selected);
  }

  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width:400,
        borderBottomWidth: 3,
        borderBottomColor: 'black',
      }}
      onPress={handlePress}
    >
      <Ionicons
        name={selected ? 'checkmark-circle' : 'ellipse-outline'}
        color={selected ? '#FF4673' : 'black'}
        size={24}
        style={{ marginRight: 10 }}
      />
      <Text style={{ color: selected ? '#FF4673' : 'black' }}>{label}</Text>
    </TouchableOpacity>
  );
}
