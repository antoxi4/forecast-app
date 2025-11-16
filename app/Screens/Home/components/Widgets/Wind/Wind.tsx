import { WidgetProps } from "../../WidgetsRenderer"
import { WidgetContainer } from "../WidgetContainer"
import { IconName } from "../../../../../Shared/components/Icon"

export const WindWidget: React.FunctionComponent<WidgetProps> = ({ fullWidth }: WidgetProps) => {
  return (
    <WidgetContainer iconName={IconName.air} title="Wind" disableHeightAdjustment={fullWidth} />
  )
}