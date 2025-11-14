import { StyleProp, ViewStyle } from "react-native"

import { styles } from "./NavigationHeader.styles"
import { IconButton, IconName } from "../Icon"
import { NavigationHeaderContainer } from "../NavigationHeaderContainer"

interface NavigationHeaderProps {
  containerStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  backButtonVisible?: boolean;
  disableBackButton?: boolean;
  onPressBack?: () => void;
}

export const NavigationHeader: React.FunctionComponent<NavigationHeaderProps> = ({ 
  children,
  containerStyle,
  disableBackButton,
  backButtonVisible = true,
  onPressBack,
}: NavigationHeaderProps) => {
  const showBackButton = Boolean(onPressBack && backButtonVisible)
  const isBackButtonDisabled = !onPressBack || disableBackButton
  
  return (
    <NavigationHeaderContainer style={containerStyle}>
      {showBackButton && (
        <IconButton 
          name={IconName.arrowBackNew} 
          style={[ styles.icon, backButtonVisible ? undefined : styles.invisibleIcon ]} 
          disabled={isBackButtonDisabled}
          buttonStyle={styles.backButton} 
          onPress={onPressBack}
        />
      )}
      {children}
    </NavigationHeaderContainer>
  )
}