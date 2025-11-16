import { Text, View, ViewProps } from "react-native"
import { styles } from "./WidgetContainer.styles"
import { IconName, Icon } from "../../../../../Shared/components/Icon"

interface WidgetContainerProps extends ViewProps {
  title: string
  iconName: IconName
  disableHeightAdjustment?: boolean
}

export const WidgetContainer: React.FunctionComponent<WidgetContainerProps> = ({ 
  title, 
  iconName, 
  style,
  children,
  disableHeightAdjustment = false,
  ...props 
}) => (
  <View {...props} style={[ styles.container, disableHeightAdjustment ? undefined : styles.containerWithoutHeightAdjustment, style ]}>
    <View style={styles.headerContainer}>
      <Icon style={styles.icon} name={iconName} />
      <Text style={styles.title}>{title}</Text>
    </View>
    {children}
  </View>
)