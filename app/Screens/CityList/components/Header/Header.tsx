import React from "react"
import { LayoutAnimation } from "react-native"

import { styles } from "./Header.styles"
import { defaultHitSlop } from "../../../../Styling"
import { IconButton, IconName } from "../../../../SharedComponents/Icon"
import { NavigationHeader } from "../../../../SharedComponents/NavigationHeader/NavigationHeader"

interface HeaderProps {
  onPressBack: () => void;
}
  
const HeaderComponent: React.FunctionComponent<HeaderProps> = ({ onPressBack }: HeaderProps) => {
  const [ isSearchActive, setIsSearchActive ] = React.useState(false)

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive)
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
  }

  return (
    <NavigationHeader 
      backButtonVisible={!isSearchActive} 
      disableBackButton={isSearchActive}
      onPressBack={onPressBack}
    >
      {/* <View style={styles.locationContainer} /> */}
      <IconButton 
        hitSlop={defaultHitSlop}
        buttonStyle={styles.cityListButton} 
        name={IconName.search} 
        style={styles.icon} 
        onPress={toggleSearch}
      />
    </NavigationHeader>
  )
}

export const Header = React.memo(HeaderComponent)