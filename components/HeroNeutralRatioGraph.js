import { ResponsiveLine } from '@nivo/line';
import heroNeutralRatio from '../constants/heroNeutralRatio.json';

export default function HeroRatioGraph() {
  return (
    <ResponsiveLine
      markers={[
        {
          axis: 'y',
          value: 0.5,
          legend: '50%',
        },
      ]}
      colors={{ scheme: 'nivo' }}
      enableSlices="x"
      data={heroNeutralRatio}
      isInteractive
      animate
      margin={{ top: 50, right: 130, bottom: 50, left: 110 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.5f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 75,
        legend: 'year',
        legendOffset: 45,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'ratio of good+neutral to total characters',
        legendOffset: -55,
        legendPosition: 'middle',
      }}
      pointSize={10}
      pointBorderWidth={2}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}
