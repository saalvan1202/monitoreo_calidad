import { useEffect, useRef } from 'react';
import { Chart } from '@antv/g2';

const ColumnMinHeight = ({ data = [] }) => {
    const chartRef = useRef(null); // Referencia para el contenedor del gráfico

    useEffect(() => {
        // Asegúrate de que la referencia existe antes de usarla
        if (chartRef.current) {
            const chart = new Chart({
                container: chartRef.current, // Usa el contenedor del ref
            });

            chart
                .interval()
                .data(data)
                .encode('x', 'parametro')
                .encode('y', 'indicador')
                .encode('color', 'parametro')
                .style('minHeight', 50);

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
    }, [data]);

    return <div className='bg-fondo-secciones w-full flex justify-center items-center' ref={chartRef} />;
};

export default ColumnMinHeight;
