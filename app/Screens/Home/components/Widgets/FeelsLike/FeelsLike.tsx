import { WidgetProps } from "../../WidgetsRenderer"
import { WidgetContainer } from "../WidgetContainer"
import { IconName } from "../../../../../Shared/components/Icon"

export const FeelsLikeWidget: React.FunctionComponent<WidgetProps> = () => {
  return (
    <WidgetContainer iconName={IconName.deviceThermostat} title="Feels Like" />
  )
}