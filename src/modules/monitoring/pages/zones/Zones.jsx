import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from 'antd';
import InfoCards from '../../components/info-cards/InfoCards.jsx';
import FormModal from '../../../../components/modals/FormModal.jsx';
import ButtonCite from '../../../../components/cite-ui/ButtonCite.jsx'
import FormZone from './forms/FormZone.jsx';
import { useMonitoring } from '../../../../store/useMonitoring.js';
import { GRAY_BUTTON } from '../../../../colors/buttons.js'
import { GREEN_CARD } from '../../../../colors/cards.js';
import { zonas } from '../../../../@fake-db/zonas.js';
import { removeSuffix } from '../../../../utils/sufix.js';
import './Zones.scss'

const { Search } = Input;

const Zones = () => {

    const { setIdZone } = useMonitoring()

    const navigate = useNavigate()

    const formRefRegister = useRef(null)

    const formReftEdit = useRef(null)

    const [openRegister, setOpenRegister] = useState(false)

    const showModalRegister = () => {
        setOpenRegister(true);
    };

    const handleSubmitRegister = (values) => {
        const _values = removeSuffix(values, '_zona')
        console.log('success', _values)
    }

    const handleSubmitEdit = (values, id) => {
        const _values = removeSuffix(values, '_zona')
        const newValues = { id, ..._values }
        console.log('success', newValues)
    }

    const handleClickCard = (id) => {
        setIdZone(id)
        navigate('/areas')
    }

    return (
        <div className="zones p-3 gap-3 overflow-x-scroll">
            <section className='filtros bg-fondo-secciones flex justify-end items-center p-4'>
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
                    <p className='font-inter text-lg text-texto-gray'>Zonas</p>
                </section>
                <section>
                    <div className='cartas__caja-cartas flex justify-center items-center p-14 px-24'>
                        <div className='cartas__caja-cartas__info-cards w-full gap-20'>
                            {zonas.map((zona) => (
                                <InfoCards key={zona.id} id={zona.id} nombre={zona.nombre} descripcion={zona.descripcion} type_card={'zona'} color_card={GREEN_CARD} handleClickCard={handleClickCard} formRef={formReftEdit}>
                                    <FormZone formRef={formReftEdit} handleSubmit={(value) => handleSubmitEdit(value, zona.id)} nombre={zona.nombre} descripcion={zona.descripcion} />
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
                    <p className='font-inter font-light text-xs'>REGISTRAR ZONA</p>
                </ButtonCite>
            </section>

            <FormModal title="Registrar zona" open={openRegister} setOpen={setOpenRegister} formRef={formRefRegister}>
                <FormZone formRef={formRefRegister} handleSubmit={handleSubmitRegister} />
            </FormModal>
        </div >
    )
}

export default Zones