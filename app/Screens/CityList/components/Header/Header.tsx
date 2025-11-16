import React from "react"
import { TextInput } from "react-native"

import { styles } from "./Header.styles"
import { defaultHitSlop } from "../../../../Styling"
import { IconName, IconButton } from "../../../../Shared/components/Icon"
import { NavigationHeader } from "../../../../Shared/components/NavigationHeader"

interface HeaderProps {
  textInputRef?: React.RefObject<TextInput | null>;
  isSearchActive?: boolean;
  onLayout?: () => void;
  onSearchValueChange?: (value: string) => void;
  onToggleSearch: () => void;
  onPressBack: () => void;
}
  
const HeaderComponent: React.FunctionComponent<HeaderProps> = ({ 
  textInputRef,
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
      {isSearchActive && (
        <TextInput 
          autoFocus 
          ref={textInputRef}
          style={styles.locationContainer} 
          onChangeText={onSearchValueChange}/>
      )}
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