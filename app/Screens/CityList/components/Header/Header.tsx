import React from "react"
import { Text, TextInput, TouchableOpacity } from "react-native"

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
          multiline={false}
          placeholder="Search city"
          style={styles.locationContainer} 
          onChangeText={onSearchValueChange}/>
      )}
      {isSearchActive ? (
        <TouchableOpacity 
          onPress={onToggleSearch} 
          style={styles.cancelButton}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      ) : (
        <IconButton 
          hitSlop={defaultHitSlop}
          buttonStyle={styles.cityListButton} 
          name={searchIcon} 
          style={styles.icon} 
          onPress={onToggleSearch}
        />
      )}
    </NavigationHeader>
  )
}

export const Header = React.memo(HeaderComponent)