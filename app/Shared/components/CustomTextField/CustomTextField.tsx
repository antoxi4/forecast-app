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
  value,
  style,
  containerStyle, 
  iconName,
  placeholder,
  placeholderStyle,
  isLoading,
  ...props
}: CustomTextFieldProps) => {
  const placeholderVisible = !value || value.length === 0

  const renderPlaceholder = (): React.ReactNode => {
    if (!placeholderVisible) {
      return null
    }
    return (
      <View style={styles.placeholderContainer}>
        <Text style={[ placeholderStyle ]}>{placeholder}</Text>
      </View>
    )
  }

  return (
    <View style={[ styles.container, containerStyle ]}>
      {isLoading 
        ? <ActivityIndicator style={styles.loadingIndicator} /> 
        : iconName && <Icon name={iconName} style={styles.icon} />
      }
      <View style={styles.inputContainer}>
        <TextInput  style={[ styles.textInput, style ]} value={value} {...props} />
        {renderPlaceholder()}
      </View>
    </View>
  )
}