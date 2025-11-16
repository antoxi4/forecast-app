import { Text } from "react-native"

import { styles } from "./UVIndex.styles"
import { WidgetProps } from "../../WidgetsRenderer"
import { WidgetContainer } from "../WidgetContainer"
import { IconName } from "../../../../../Shared/components/Icon"
import { useUVIndexDescription } from "../../../../../Shared/hooks/useUVIndexDescription"

export const UVIndexWidget: React.FunctionComponent<WidgetProps> = ({ data }: WidgetProps) => {
  const description = useUVIndexDescription(data?.uvIndex ?? 0)

  return (
    <WidgetContainer iconName={IconName.lightMode} title="UV Index">
      <Text style={styles.uvIndex}>{data?.uvIndex ?? '0'}</Text>
      <Text style={styles.description}>{description}</Text>
    </WidgetContainer>
  )
}