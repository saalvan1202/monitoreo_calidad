import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GRAY_BUTTON, RED_BUTTON } from '../../../../colors/buttons'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import ButtonCite from '../../../../components/cite-ui/ButtonCite'
import SelectCite from '../../../../components/cite-ui/SelectCite'
import ColumnMinHeight from '../../../../components/graphics/ColumnMinHeight'
import SimplePieChart from '../../../../components/graphics/SimplePieChart'
import './Parameters.scss'

const Parameters = () => {

    const [tipoGraficoValue, setTipoGraficoValue] = useState(1)

    const handleChangetipoGrafico = (value) => {
        setTipoGraficoValue(value)
    }

    const data = [
        { parametro: 'PH', indicador: 670 },
        { parametro: 'Oxigeno', indicador: 115 },
        { parametro: 'CO2', indicador: 120 },
        { parametro: 'Nitrito', indicador: 350 },
        { parametro: 'Nitrato', indicador: 150 },
    ]

    return (
        <div className="parameters p-3 gap-3">
            <div className="parameters__filters bg-fondo-secciones p-4 gap-4">
                <SelectCite />
                <SelectCite />
                <SelectCite />
                <SelectCite />
            </div>
            <div className="parameters__graphics bg-fondo-secciones p-4 gap-4">
                <div className='parameters__graphics-options bg-fondo-footer p-4 gap-4'>
                    <div>
                        <ButtonCite
                            size="large"
                            type="primary"
                            borderRadius="4px"
                            propsComponentes={RED_BUTTON}
                        // onClick={showModalRegister}
                        >
                            <p className='font-inter font-light text-xs'>APLICAR FILTROS</p>
                        </ButtonCite>
                    </div>
                    <div>
                        <div className='flex justify-center items-center h-full flex-col gap-2 p-10 bg-fondo-secciones'>
                            <p>Tipo de Gráfico</p>
                            <SelectCite options={[
                                { label: "BARRAS", value: 1 },
                                { label: "PASTEL", value: 2 }
                            ]} defaultValue={1} handleChange={handleChangetipoGrafico} className='w-full' />
                        </div>
                    </div>
                    <div className='bg-[#FBDADA] p-3 max-w-[230px] flex justify-center items-center gap-3'>
                        <FontAwesomeIcon icon={faTriangleExclamation} className='text-3xl text-botones-red' />
                        <p className='text-left'>
                            El ph esta alterando el estado del agua, ya que supera el rango establecido para tener un estado optimo
                        </p>
                    </div>
                </div>
                <div className='bg-fondo-footer p-4 flex flex-col gap-3 justify-center items-end'>
                    {tipoGraficoValue == 1 && (
                        <ColumnMinHeight data={data} />
                    )}

                    {tipoGraficoValue == 2 && (
                        <SimplePieChart data={data} />
                    )}

                    <div>
                        <ButtonCite
                            size="large"
                            type="primary"
                            borderRadius="4px"
                            propsComponentes={GRAY_BUTTON}
                        // onClick={showModalRegister}
                        >
                            <p className='font-inter font-light text-xs'>REGISTRAR OBSERVACIONES</p>
                        </ButtonCite>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parameters