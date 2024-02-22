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
          labels: ['Javascript', 'vue.js', 'React.js', 'jQuery', 'Html5', 'Css3', 'Scss', 'Bootstrap'],
          datasets: [
            {
              data: [83, 60, 40, 90, 95, 95, 90, 85],
              backgroundColor: [
                '#f4bfbf',
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