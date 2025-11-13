import React from "react"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { styles } from "./Header.styles"
import { defaultHitSlop } from "../../../../Styling"
import { Icon, IconButton, IconName } from "../../../../SharedComponents/Icon"

interface HeaderProps {
  cityName?: string;
  country?: string;
  dateString?: string;
}
  
const HeaderComponent: React.FunctionComponent<HeaderProps> = ({ cityName, country, dateString = '' }: HeaderProps) => {
  const formattedDate = new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  })
  return (
    <SafeAreaView style={styles.header}>
      <Icon name={IconName.locationOn} style={styles.icon} />
      <View style={styles.locationContainer}>
        <Text style={styles.city} numberOfLines={1}>{cityName}, {country}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
      <IconButton 
        hitSlop={defaultHitSlop}
        buttonStyle={styles.cityListButton} 
        name={IconName.listView} 
        style={styles.icon} 
      />
    </SafeAreaView>
  )
}

export const Header = React.memo(HeaderComponent)