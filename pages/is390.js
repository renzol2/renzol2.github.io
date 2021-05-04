import { Box, Center, Heading } from '@chakra-ui/layout';
import { ResponsiveLine } from '@nivo/line';
import racialDiversity from '../constants/racialDiversity.json';

export default function IS390() {
  return (
    <Box w="100%">
      <Heading textAlign="center" fontWeight="hairline" p="2%">
        The State of Asian Superheroes in Comics
      </Heading>
      <Center h="60vh">
        <ResponsiveLine
          enableSlices="x"
          data={racialDiversity}
          isInteractive
          useMesh
          animate
          margin={{ top: 50, right: 110, bottom: 50, left: 80 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
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
            legend: 'racial diversity score',
            legendOffset: -55,
            legendPosition: 'middle',
          }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
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
      </Center>
    </Box>
  );
}
