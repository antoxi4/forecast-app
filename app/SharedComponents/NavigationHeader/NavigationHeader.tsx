import { styles } from "./NavigationHeader.styles"
import { IconButton, IconName } from "../Icon"
import { NavigationHeaderContainer } from "../NavigationHeaderContainer"

interface NavigationHeaderProps {
  children?: React.ReactNode;
  backButtonVisible?: boolean;
  disableBackButton?: boolean;
  onPressBack?: () => void;
}

export const NavigationHeader: React.FunctionComponent<NavigationHeaderProps> = ({ children, disableBackButton, backButtonVisible = true, onPressBack }: NavigationHeaderProps) => {
  const showBackButton = Boolean(backButtonVisible && onPressBack)
  const isBackButtonDisabled = !onPressBack || disableBackButton
  
  return (
    <NavigationHeaderContainer>
      {showBackButton && (
        <IconButton 
          name={IconName.arrowBackNew} 
          style={styles.icon} 
          disabled={isBackButtonDisabled}
          buttonStyle={styles.backButton} 
          onPress={onPressBack}
        />
      )}
      {children}
    </NavigationHeaderContainer>
  )
}