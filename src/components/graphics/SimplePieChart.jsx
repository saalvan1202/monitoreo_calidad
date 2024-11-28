import { useEffect, useRef } from 'react';
import { sum } from 'mathjs';
import { Chart } from '@antv/g2';
import Decimal from 'decimal.js';

const SimplePieChart = ({ data = [] }) => {
    const chartRef = useRef(null);

    const indicadores = data.map(item => item.indicador);

    const totalIndicadores = sum(indicadores);

    const newData = data.map((_data) => {
        const _indicador = new Decimal(_data.indicador)
        const _totalIndicadores = new Decimal(totalIndicadores)

        const newPercent = _indicador.dividedBy(_totalIndicadores).toNumber()

        const roundedPercent = new Decimal(newPercent).toDecimalPlaces(3)

        const newRoundedPercent = roundedPercent.mul(100).toNumber()

        return {
            ..._data,
            percent: newRoundedPercent
        }
    });

    useEffect(() => {
        // Asegúrate de que la referencia existe antes de usarla
        if (chartRef.current) {
            const chart = new Chart({
                container: chartRef.current, // Usa el contenedor del ref
                autoFit: true
            });

            chart.coordinate({ type: 'theta', outerRadius: 0.8 });

            chart
                .interval()
                .data(newData)
                .transform({ type: 'stackY' })
                .encode('y', 'percent')
                .encode('color', 'parametro')
                .legend('color', { position: 'bottom', layout: { justifyContent: 'center' } })
                .label({
                    position: 'outside',
                    text: (newData) => `${newData.parametro}: ${newData.percent}%`,
                })
                .tooltip((newData) => ({
                    name: newData.parametro,
                    // value: `${newData.percent * 100}%`,
                    value: newData.indicador
                }));

            chart.title('PARAMETROS DE CALIDAD DE AGUA EN EL TANQUE 1', {
                position: 'top', // Posición del título (puede ser 'top', 'bottom', 'left', 'right')
                align: 'center', // Alineación del título ('start', 'center', 'end')
                style: {
                    fontSize: 16,
                    fontWeight: 'bold',
                    fill: '#333', // Color del texto
                },
            });

            chart.render();

            // Limpia el gráfico al desmontar el componente
            return () => {
                chart.destroy();
            };
        }
    }, [newData]);

    return <div className='bg-fondo-secciones w-full flex justify-center items-center' ref={chartRef} />;
};

export default SimplePieChart;
