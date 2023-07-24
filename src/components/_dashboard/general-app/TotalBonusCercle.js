import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { useTheme, styled } from '@material-ui/core/styles';
import { Card, CardHeader } from '@material-ui/core';
// utils
import { fNumber } from '../../../utils/formatNumber';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 300;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
  '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible'
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important',
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`
  }
}));

// ----------------------------------------------------------------------

// const CHART_DATA = [0, 0, 0, 0, 0, 0, 0, 0];

export default function TotalBonusCercle({ user }) {
  const theme = useTheme();
  const CHART_DATA = [user?.total_earning, 0, 0, 0, 0, 0, 0, 0];

  const chartOptions = merge(BaseOptionChart(), {
    colors: [
      theme.palette.primary.lighter,
      theme.palette.primary.light,
      theme.palette.primary.main,
      theme.palette.primary.dark,
      theme.palette.primary.lighter,
      theme.palette.primary.light,
      theme.palette.primary.main,
      theme.palette.primary.dark
    ],

    labels: ['Minting', 'Referral', 'Level', 'Capital', 'Stone', 'Revert', 'Annum', 'Reload'],
    stroke: { colors: [theme.palette.background.paper] },
    legend: { floating: true, horizontalAlign: 'center' },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: (seriesName) => `${seriesName}`
        }
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '90%',
          labels: {
            value: {
              formatter: (val) => {
                const result = `${fNumber(val)} $`;
                return result;
              }
            },
            total: {
              formatter: (w) => {
                const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                const result = `${fNumber(sum)} $`;
                return result;
              }
            }
          }
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="Total Bonus" />
      <ChartWrapperStyle dir="ltr" sx={{ marginTop: 2, marginBottom: 2 }}>
        <ReactApexChart type="donut" series={CHART_DATA} options={chartOptions} height={240} />
      </ChartWrapperStyle>
    </Card>
  );
}
