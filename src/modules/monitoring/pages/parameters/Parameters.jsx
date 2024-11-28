import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GRAY_BUTTON, RED_BUTTON } from '../../../../colors/buttons'
import { faCheck, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import ButtonCite from '../../../../components/cite-ui/ButtonCite'
import SelectCite from '../../../../components/cite-ui/SelectCite'
import ColumnMinHeight from '../../../../components/graphics/ColumnMinHeight'
import SimplePieChart from '../../../../components/graphics/SimplePieChart'
import FormModal from '../../../../components/modals/FormModal'
import './Parameters.scss'
import FormParameter from './forms/FormParameter'
import { parametros } from '../../../../@fake-db/parametros'
import { removeSuffix } from '../../../../utils/sufix'
import { convertToArray, convertValuesToInt, verifyErrors } from '../../../../utils/optionsTransform'
import { Modal } from 'antd'

const Parameters = () => {

    const formParameters = useRef(null)

    const [openParameters, setOpenParameters] = useState(false)

    const [openCriticParameters, setOpenCriticParameters] = useState(false)

    const [tipoGraficoValue, setTipoGraficoValue] = useState(1)

    const [errores, setErrores] = useState([])


    const showModalParameter = () => {
        setOpenParameters(true)
    }

    const handleChangetipoGrafico = (value) => {
        setTipoGraficoValue(value)
    }

    const handleSubmitRegister = (values) => {
        const newValues = removeSuffix(values, '_parameter')
        const newValuesInt = convertValuesToInt(newValues)
        const newValuesIntToArray = convertToArray(newValuesInt)
        console.log('success', newValuesIntToArray)

        parametros.unshift(newValuesIntToArray)

        const errorValues = verifyErrors(parametros[0])

        setErrores(errorValues)

        setOpenParameters(false)
    }

    console.log(errores)

    return (
        <div className="parameters p-3 gap-3 overflow-auto">
            {/* <div className="parameters__filters bg-fondo-secciones p-4 gap-4">
                <SelectCite />
                <SelectCite />
                <SelectCite />
                <SelectCite />
            </div> */}
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
                    <div>
                        {errores.length == 0 ? (
                            <div className='bg-[#87fb7c] p-3 max-w-[230px] flex justify-center items-center gap-3'>
                                <FontAwesomeIcon icon={faCheck} className='text-3xl text-green-500' />
                                <p className='text-left'>
                                    Todos los parametros cumplen con los indicadores optimos
                                </p>
                            </div>
                        ) : (
                            <div className='bg-[#FBDADA] p-3 max-w-[230px] flex justify-center items-center gap-3 cursor-pointer hover:bg-red-200' onClick={() => setOpenCriticParameters(true)}>
                                <FontAwesomeIcon icon={faTriangleExclamation} className='text-3xl text-botones-red' />
                                <p className='text-left'>
                                    Hay parametros que estan alterando el estado del agua, ya que superan el rango establecido para tener un estado optimo
                                </p>
                            </div>
                        )}
                    </div>
                </div>
                <div className='bg-fondo-footer p-4 flex flex-col gap-3 justify-center items-end'>
                    {tipoGraficoValue == 1 && (
                        <ColumnMinHeight data={parametros[0]} />
                    )}

                    {tipoGraficoValue == 2 && (
                        <SimplePieChart data={parametros[0]} />
                    )}

                    <div>
                        <ButtonCite
                            size="large"
                            type="primary"
                            borderRadius="4px"
                            propsComponentes={GRAY_BUTTON}
                            onClick={showModalParameter}
                        >
                            <p className='font-inter font-light text-xs'>REGISTRAR OBSERVACIONES</p>
                        </ButtonCite>
                    </div>
                </div>
            </div>

            <FormModal title="Registrar area" open={openParameters} setOpen={setOpenParameters} formRef={formParameters}>
                <FormParameter formRef={formParameters} handleSubmit={handleSubmitRegister} />
            </FormModal>

            <Modal title="Parametros criticos" open={openCriticParameters} onOk={() => setOpenCriticParameters(false)} onCancel={() => setOpenCriticParameters(false)}>
                <div className='flex flex-col gap-2'>
                    {errores.map(error => {
                        return (
                            <div key={error.parametro} className='border'>
                                <p className='p-2 border-b font-bold'>{error.parametro}</p>
                                <p className='p-2'>{error.mensaje}</p>
                            </div>
                        )
                    })}
                </div>
            </Modal>
        </div>
    )
}

export default Parameters