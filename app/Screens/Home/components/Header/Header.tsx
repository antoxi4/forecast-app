import React from "react"
import { Text, View } from "react-native"

import { styles } from "./Header.styles"
import { defaultHitSlop } from "../../../../Styling"
import { Icon, IconName, IconButton } from "../../../../Shared/components/Icon"
import { NavigationHeaderContainer } from "../../../../Shared/components/NavigationHeaderContainer"

interface HeaderProps {
  cityName?: string;
  country?: string;
  date?: Date;
  onCityListPress?: () => void;
}
  
const HeaderComponent: React.FunctionComponent<HeaderProps> = ({ cityName, country, date, onCityListPress }: HeaderProps) => {
  const formattedLocation = cityName && country ? `${ cityName }, ${ country }` : ''
  const formattedDate = date ? date.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  }) : ''


  return (
    <NavigationHeaderContainer style={styles.header}>
      <Icon name={IconName.locationOn} style={styles.icon} />
      <View style={styles.locationContainer}>
        <Text style={styles.city} numberOfLines={1}>{formattedLocation}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <IconButton 
        name={IconName.listView} 
        style={styles.icon} 
        buttonStyle={styles.cityListButton} 
        hitSlop={defaultHitSlop}
        onPress={onCityListPress}
      />
    </NavigationHeaderContainer>
  )
}

export const Header = React.memo(HeaderComponent)