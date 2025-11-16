import { WidgetProps } from "../../WidgetsRenderer"
import { WidgetContainer } from "../WidgetContainer"
import { IconName } from "../../../../../Shared/components/Icon"

export const UVIndexWidget: React.FunctionComponent<WidgetProps> = () => {
  return (
    <WidgetContainer iconName={IconName.lightMode} title="UV Index" />
  )
}