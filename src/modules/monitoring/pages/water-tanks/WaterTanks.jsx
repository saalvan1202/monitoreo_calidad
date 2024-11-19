import { useRef, useState } from 'react';
import { Input } from 'antd';
import InfoCards from '../../components/info-cards/InfoCards.jsx';
import FormModal from '../../../../components/modals/FormModal.jsx';
import ButtonCite from '../../../../components/cite-ui/ButtonCite.jsx'
import SelectCite from '../../../../components/cite-ui/SelectCite.jsx';
import FormWaterTanks from './forms/FormWaterTanks.jsx';
import { useMonitoring } from '../../../../store/monitoring/useMonitoring.js';
import { GRAY_BUTTON } from '../../../../colors/buttons.js'
import { YELLOW_CARD } from '../../../../colors/cards.js';
import { tanques } from '../../../../@fake-db/tanques.js';
import { areas } from '../../../../@fake-db/areas.js';
import { zonas } from '../../../../@fake-db/zonas.js';
import { removeSuffix } from '../../../../utils/sufix.js';
import { optionsTransform } from '../../../../utils/optionsTransform.js';
import './WaterTanks.scss'

const { Search } = Input;

const WaterTanks = () => {
    const { idZone, setIdZone, idArea, setIdArea } = useMonitoring()

    const formRefRegister = useRef(null)
    const formReftEdit = useRef(null)

    const [openRegister, setOpenRegister] = useState(false)

    const showModalRegister = () => {
        setOpenRegister(true);
    };

    const handleSubmitRegister = (values) => {
        const _values = removeSuffix(values, '_tanque')
        console.log('success', _values)
    }

    const handleSubmitEdit = (values, id) => {
        const _values = removeSuffix(values, '_tanque')
        const newValues = { id, ..._values }
        console.log('success', newValues)
    }

    const optionsZones = optionsTransform(zonas);

    const optionsAreas = optionsTransform(areas);

    return (
        <div className="water-tanks p-3 gap-3 overflow-x-scroll">
            <section className='filtros bg-fondo-secciones flex justify-between items-center p-4'>
                <div className='filtros__select justify-start w-[80%]'>
                    <SelectCite className='min-w-[150px]' options={optionsZones} defaultValue={idZone} setData={setIdZone} />
                    <SelectCite className='min-w-[150px]' options={optionsAreas} defaultValue={idArea} setData={setIdArea} />
                </div>
                <div className='filtros__search w-[20%] min-w-[200px]'>
                    <Search
                        placeholder="Search"
                        allowClear
                        size='large'
                    />
                </div>
            </section>
            <section className='cartas bg-fondo-secciones '>
                <section className='flex justify-start p-4 border-b border-fondo-footer'>
                    <p className='font-inter text-lg text-texto-gray'>Tanques</p>
                </section>
                <section>
                    <div className='cartas__caja-cartas flex justify-center items-center p-14 px-24'>
                        <div className='cartas__caja-cartas__info-cards w-full gap-20'>
                            {tanques
                                .filter((tanque) => tanque.id_area === idArea)
                                .map((tanque) => (
                                    <InfoCards key={tanque.id} id={tanque.id} nombre={tanque.nombre} descripcion={tanque.descripcion} type_card={'tanque'} color_card={YELLOW_CARD} formRef={formReftEdit}>
                                        <FormWaterTanks formRef={formReftEdit} handleSubmit={(value) => handleSubmitEdit(value, tanque.id)} id_area={idArea} nombre={tanque.nombre} descripcion={tanque.descripcion} />
                                    </InfoCards>
                                ))}
                        </div>
                    </div>
                </section>
            </section>
            <section className='flex justify-end'>
                <ButtonCite
                    size="large"
                    type="primary"
                    borderRadius="4px"
                    propsComponentes={GRAY_BUTTON}
                    onClick={showModalRegister}
                >
                    <p className='font-inter font-light text-xs'>REGISTRAR TANQUE</p>
                </ButtonCite>
            </section>

            <FormModal title="Registrar area" open={openRegister} setOpen={setOpenRegister} formRef={formRefRegister}>
                <FormWaterTanks formRef={formRefRegister} handleSubmit={handleSubmitRegister} id_area={idArea} />
            </FormModal>
        </div >
    )
}

export default WaterTanks