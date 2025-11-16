import { memo } from "react"
import { View } from "react-native"

import { styles } from "./WidgetsRenderer.styles"
import { UseActiveCityWeather } from "../../hooks/useActiveCityWeather"

export interface WidgetProps {
  fullWidth?: boolean
  data: UseActiveCityWeather
}

export type WidgetComponent = React.FunctionComponent<WidgetProps>

export type WidgetsConfiguration = Array<WidgetComponent | WidgetComponent[]>

export interface WidgetsRendererProps extends WidgetProps {
  configuration: WidgetsConfiguration;
}

export const WidgetsRendererComponent: React.FunctionComponent<WidgetsRendererProps> = ({ data, configuration }) => {
  const renderWidgetsRow = (widgets: WidgetComponent | WidgetComponent[], rowIndex: number): React.ReactNode => {
    if (Array.isArray(widgets)) {
      
      return (
        <View key={`widgets-row-${ rowIndex }`} style={[ styles.splittedRow ]}>
          {widgets.map((WidgetComponent, widgetIndex) => (
            <WidgetComponent data={data} key={`widget-${ widgetIndex }-row-${ rowIndex }`} />
          ))}
        </View>
      )
    } else {
      const WidgetComponent = widgets

      return (
        <WidgetComponent data={data} key={`widgets-row-${ rowIndex }`} fullWidth={true} />
      )
    }
  }

  return (
    <View style={styles.container}>
      {configuration.map((widgetsRow, rowIndex) => renderWidgetsRow(widgetsRow, rowIndex))}
    </View>
  )
}

export const WidgetsRenderer = memo(WidgetsRendererComponent)