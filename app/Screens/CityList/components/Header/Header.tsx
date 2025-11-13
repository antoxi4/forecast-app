import React from "react"
import { TextInput } from "react-native"

import { styles } from "./Header.styles"
import { defaultHitSlop } from "../../../../Styling"
import { IconButton, IconName } from "../../../../SharedComponents/Icon"
import { NavigationHeader } from "../../../../SharedComponents/NavigationHeader/NavigationHeader"

interface HeaderProps {
  isSearchActive?: boolean;
  onSearchValueChange?: (value: string) => void;
  onToggleSearch: () => void;
  onPressBack: () => void;
}
  
const HeaderComponent: React.FunctionComponent<HeaderProps> = ({ 
  isSearchActive, 
  onSearchValueChange,
  onToggleSearch,
  onPressBack, 
}: HeaderProps) => {
  const searchIcon = isSearchActive ? IconName.close : IconName.search

  return (
    <NavigationHeader 
      backButtonVisible={!isSearchActive} 
      disableBackButton={isSearchActive}
      onPressBack={onPressBack}
    >
      {isSearchActive && <TextInput style={styles.locationContainer} onChangeText={onSearchValueChange}/>}
      <IconButton 
        hitSlop={defaultHitSlop}
        buttonStyle={styles.cityListButton} 
        name={searchIcon} 
        style={styles.icon} 
        onPress={onToggleSearch}
      />
    </NavigationHeader>
  )
}

export const Header = React.memo(HeaderComponent)