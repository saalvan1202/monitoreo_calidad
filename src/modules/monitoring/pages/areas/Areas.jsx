import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import InfoCards from '../../components/info-cards/InfoCards.jsx';
import FormModal from '../../../../components/modals/FormModal.jsx';
import ButtonCite from '../../../../components/cite-ui/ButtonCite.jsx'
import SelectCite from '../../../../components/cite-ui/SelectCite.jsx';
import FormArea from './forms/FormArea.jsx';
import { useMonitoring } from '../../../../store/useMonitoring.js';
import { GRAY_BUTTON } from '../../../../colors/buttons.js'
import { AQUA_CARD } from '../../../../colors/cards.js';
import { areas } from '../../../../@fake-db/areas.js';
import { zonas } from '../../../../@fake-db/zonas.js';
import { removeSuffix } from '../../../../utils/sufix.js';
import { optionsTransform } from '../../../../utils/optionsTransform.js';
import './Areas.scss'

const { Search } = Input;

const Areas = () => {
    const { idZone, setIdZone, setIdArea } = useMonitoring()

    const navigate = useNavigate()

    const formRefRegister = useRef(null)

    const formReftEdit = useRef(null)

    const [openRegister, setOpenRegister] = useState(false)

    const showModalRegister = () => {
        setOpenRegister(true);
    };

    const handleSubmitRegister = (values) => {
        const _values = removeSuffix(values, '_area')
        console.log('success', _values)
    }

    const handleSubmitEdit = (values, id) => {
        const _values = removeSuffix(values, '_area')
        const newValues = { id, ..._values }
        console.log('success', newValues)
    }

    const handleClickCard = (id) => {
        setIdArea(id)
        navigate('/water-tanks')
    }

    const optionsZones = optionsTransform(zonas);

    return (
        <div className="areas p-3 gap-3 overflow-x-scroll">
            <section className='filtros bg-fondo-secciones flex justify-between items-center p-4'>
                <div className='filtros__select justify-start w-[20%] min-w-[200px]'>
                    <SelectCite options={optionsZones} defaultValue={idZone} setData={setIdZone} />
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
                    <p className='font-inter text-lg text-texto-gray'>Areas</p>
                </section>
                <section>
                    <div className='cartas__caja-cartas flex justify-center items-center p-14 px-24'>
                        <div className='cartas__caja-cartas__info-cards w-full gap-20'>
                            {areas
                                .filter((area) => area.id_zone === idZone)
                                .map((area) => (
                                    <InfoCards key={area.id} id={area.id} nombre={area.nombre} descripcion={area.descripcion} type_card={'area'} color_card={AQUA_CARD} handleClickCard={handleClickCard} formRef={formReftEdit}>
                                        <FormArea formRef={formReftEdit} handleSubmit={(value) => handleSubmitEdit(value, area.id)} id_zone={idZone} nombre={area.nombre} descripcion={area.descripcion} />
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
                    <p className='font-inter font-light text-xs'>REGISTRAR AREA</p>
                </ButtonCite>
            </section>

            <FormModal title="Registrar area" open={openRegister} setOpen={setOpenRegister} formRef={formRefRegister}>
                <FormArea formRef={formRefRegister} handleSubmit={handleSubmitRegister} id_zone={idZone} />
            </FormModal>
        </div >
    )
}

export default Areas