import { Text } from "react-native"

import { styles } from "./FeelsLike.styles"
import { WidgetProps } from "../../WidgetsRenderer"
import { WidgetContainer } from "../WidgetContainer"
import { IconName } from "../../../../../Shared/components/Icon"

export const FeelsLikeWidget: React.FunctionComponent<WidgetProps> = ({ data }: WidgetProps) => {
  return (
    <WidgetContainer iconName={IconName.deviceThermostat} title="Feels Like">
      <Text style={styles.feelsLikeTemp}>{data?.feelLikeC?.toFixed(0) ?? '0'}°</Text>
      <Text style={styles.actualTemp}>Actual: {data?.currentTemperatureC?.toFixed(0) ?? '0'}°</Text>
    </WidgetContainer>
  )
}