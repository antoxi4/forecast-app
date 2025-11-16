import React from "react"
import { ActivityIndicator, Text, TextInput, TextInputProps, View } from "react-native"
import { styles } from "./CustomTextField.styles"
import { Icon, IconName } from "../Icon"

export interface CustomTextFieldProps extends TextInputProps {
  isLoading?: boolean
  iconName?: IconName
  containerStyle?: View["props"]["style"]
  placeholderStyle?: Text["props"]["style"]
}

export const CustomTextField: React.FunctionComponent<CustomTextFieldProps> = ({ 
  containerStyle, 
  iconName,
  placeholder,
  value, 
  placeholderStyle,
  isLoading,
  ...props
}: CustomTextFieldProps) => {
  const placeholderVisible = !value || value.length === 0

  return (
    <View style={[ styles.container, containerStyle ]}>
      {isLoading 
        ? <ActivityIndicator style={styles.loadingIndicator} /> 
        : iconName && <Icon name={iconName} style={styles.icon} />
      }
      <View style={styles.inputContainer}>
        <TextInput {...props} value={value} />
        {placeholderVisible && <Text style={[ styles.placeholder, placeholderStyle ]}>{placeholder}</Text>}
      </View>
    </View>
  )
}