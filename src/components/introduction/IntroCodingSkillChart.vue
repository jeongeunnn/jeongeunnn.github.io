<template>
    <vue3-chart-js v-bind='{ ...barChart }' />
</template>
<script>
  //chart.js
  import Vue3ChartJs from '@j-t-mcc/vue3-chartjs';
  import Chart from 'chart.js/auto';
  import ChartDataLabels from 'chartjs-plugin-datalabels';

  Chart.register(ChartDataLabels);

  export default {
    name: 'IntroCodingSkillChart',
    components: {
      Vue3ChartJs,
    },
    setup() {
      const barChart = {
        type: 'bar',
        options: {
          indexAxis: 'y',
          min: 0,
          max: 100,
          responsive: true,
          maintainAspectRatio: false,
          showTooltips: true,
          barThickness: 10,
          plugins: {
            legend: {
              position: 'none',
            },
            datalabels: {
              display: true,
              align: 'right',
              anchor: 'end',
              formatter: function(value) {
                return `${value}%`
              }
            },
          },
          barPercentage: 0.9,
          categoryPercentage: 0.5,
          layout: {
            padding: {
              right: 60,
            }
          },
          scales: {
            x: {
              beginAtZero: true,
              max: 100
            }
          }
        },
        
        data: {
          labels: ['JavaScript', 'TypeScript', 'Vue', 'React', 'jQuery', 'HTML5', 'CSS3', 'CSS 전처리(SCSS, CSS in JS)'],
          datasets: [
            {
              data: [85, 50, 75, 70, 90, 95, 95, 90],
              backgroundColor: [
                '#f4bfbf',
                '#e6fac5',
                '#ffd9c0',
                '#faf0d7',
                '#b7e5dd',
                '#8cc0de',
                '#b1bce6',
                '#f1c6e7',
                '#dcc6f1'
              ],
            },
          ],
        },
      };

      return {
        barChart,
      };
    },
  };
</script>
<style lang="scss" scoped>

</style>