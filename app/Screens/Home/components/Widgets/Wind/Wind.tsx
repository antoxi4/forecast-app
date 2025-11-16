import { WidgetProps } from "../../WidgetsRenderer"
import { WidgetContainer } from "../WidgetContainer"
import { IconName } from "../../../../../Shared/components/Icon"
import { Text, View } from "react-native"
import { styles } from "./Wind.styles"
import { Divider } from "../../../../../Shared/components/Divider"

export const WindWidget: React.FunctionComponent<WidgetProps> = ({ data, fullWidth }: WidgetProps) => {
  return (
    <WidgetContainer iconName={IconName.air} title="Wind" disableHeightAdjustment={fullWidth}>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Wind Speed</Text>
        <Text style={styles.value}>{data.windSpeedKph} km/h</Text>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Gusts</Text>
        <Text style={styles.value}>{data.windGustKph} km/h</Text>
      </View>
      <Divider style={styles.divider} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Direction</Text>
        <Text style={styles.value}>{data.windDegree}° {data.windDirection}</Text>
      </View>
    </WidgetContainer>
  )
}