import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const Graph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const fakeStudents = [
      { firstName: 'Ali', lastName: 'Yılmaz', collection: 100, paymentHistory: '2024-01-01', report: 'Rapor 1' },
      { firstName: 'Ali', lastName: 'Yılmaz', collection: 100, paymentHistory: '2024-01-01', report: 'Rapor 1' },
      { firstName: 'Ali', lastName: 'Yılmaz', collection: 100, paymentHistory: '2024-01-01', report: 'Rapor 1' },
      { firstName: 'Ali', lastName: 'Yılmaz', collection: 100, paymentHistory: '2024-01-01', report: 'Rapor 1' },
      { firstName: 'Ayşe', lastName: 'Kara', collection: 0, paymentHistory: '2024-02-10', report: 'Rapor 2' },
      { firstName: 'Mehmet', lastName: 'Çelik', collection: 200, paymentHistory: '2024-03-05', report: 'Rapor 3' },
      { firstName: 'Mehmet', lastName: 'Çelik', collection: 200, paymentHistory: '2024-03-05', report: 'Rapor 3' },
      { firstName: 'Mehmet', lastName: 'Çelik', collection: 200, paymentHistory: '2024-03-05', report: 'Rapor 3' },
      { firstName: 'Mehmet', lastName: 'Çelik', collection: 200, paymentHistory: '2024-03-05', report: 'Rapor 3' },
      { firstName: 'Mehmet', lastName: 'Çelik', collection: 200, paymentHistory: '2024-03-05', report: 'Rapor 3' },
      { firstName: 'Mehmet', lastName: 'Çelik', collection: 200, paymentHistory: '2024-03-05', report: 'Rapor 3' },
      { firstName: 'Mehmet', lastName: 'Çelik', collection: 200, paymentHistory: '2024-03-05', report: 'Rapor 3' },
      { firstName: 'Mehmet', lastName: 'Çelik', collection: 200, paymentHistory: '2024-03-05', report: 'Rapor 3' },
      { firstName: 'Mehmet', lastName: 'Çelik', collection: 200, paymentHistory: '2024-03-05', report: 'Rapor 3' },
      { firstName: 'Mehmet', lastName: 'Çelik', collection: 200, paymentHistory: '2024-03-05', report: 'Rapor 3' },
      { firstName: 'Mehmet', lastName: 'Çelik', collection: 200, paymentHistory: '2024-03-05', report: 'Rapor 3' },
      { firstName: 'Mehmet', lastName: 'Çelik', collection: 200, paymentHistory: '2024-03-05', report: 'Rapor 3' },
      { firstName: 'Mehmet', lastName: 'Çelik', collection: 200, paymentHistory: '2024-03-05', report: 'Rapor 3' },
      { firstName: 'Mehmet', lastName: 'Çelik', collection: 200, paymentHistory: '2024-03-05', report: 'Rapor 3' },
      { firstName: 'Mehmet', lastName: 'Çelik', collection: 200, paymentHistory: '2024-03-05', report: 'Rapor 3' },
      { firstName: 'Mehmet', lastName: 'Çelik', collection: 200, paymentHistory: '2024-03-05', report: 'Rapor 3' },
      { firstName: 'Mehmet', lastName: 'Çelik', collection: 200, paymentHistory: '2024-03-05', report: 'Rapor 3' },
      { firstName: 'Fatma', lastName: 'Demir', collection: 0, paymentHistory: '2024-04-15', report: 'Rapor 4' },
      { firstName: 'Fatma', lastName: 'Demir', collection: 0, paymentHistory: '2024-04-15', report: 'Rapor 4' },
      { firstName: 'Fatma', lastName: 'Demir', collection: 0, paymentHistory: '2024-04-15', report: 'Rapor 4' },
      { firstName: 'Fatma', lastName: 'Demir', collection: 0, paymentHistory: '2024-04-15', report: 'Rapor 4' },
      { firstName: 'Fatma', lastName: 'Demir', collection: 0, paymentHistory: '2024-04-15', report: 'Rapor 4' },
      { firstName: 'Fatma', lastName: 'Demir', collection: 0, paymentHistory: '2024-04-15', report: 'Rapor 4' },
      { firstName: 'Fatma', lastName: 'Demir', collection: 0, paymentHistory: '2024-04-15', report: 'Rapor 4' },
      { firstName: 'Fatma', lastName: 'Demir', collection: 0, paymentHistory: '2024-04-15', report: 'Rapor 4' },
      { firstName: 'Fatma', lastName: 'Demir', collection: 0, paymentHistory: '2024-04-15', report: 'Rapor 4' },
      { firstName: 'Fatma', lastName: 'Demir', collection: 0, paymentHistory: '2024-04-15', report: 'Rapor 4' },
      { firstName: 'Fatma', lastName: 'Demir', collection: 0, paymentHistory: '2024-04-15', report: 'Rapor 4' },
    ];

    createPieChart(fakeStudents);
  }, []);

  const createPieChart = (students) => {
    if (chartRef.current) {
      const myChart = echarts.init(chartRef.current);

      const purchasedCount = students.filter((student) => student.collection > 0).length;

      const totalCount = students.length;

      const data = [
        { value: totalCount, name: 'Toplam Öğrenci Sayısı' },
        { value: purchasedCount, name: 'Kursu Satın Alan Öğrenci Sayısı' },
      ];

      const option = {
        title: {
          text: 'Öğrenci ve Kurs Satın Alma Dağılımı',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Toplam Öğrenci Sayısı', 'Kursu Satın Alan Öğrenci Sayısı'],
        },
        series: [
          {
            name: 'Öğrenci Dağılımı',
            type: 'pie',
            radius: '50%',
            data: data,
            label: {
              show: true,
              formatter: '{b}: {c}', // Etiketlerde isim ve değeri göster
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      };

      myChart.setOption(option);

      // Resize özelliğini ekleyelim
      window.addEventListener('resize', () => {
        myChart.resize();
      });
    }
  };

  return (
    <div className="container mx-auto my-8 p-4">
      {/* ECharts Pie Chart */}
      <div ref={chartRef} style={{ height: '800px', width: '100%' }}></div>
    </div>
  );
};

export default Graph;
