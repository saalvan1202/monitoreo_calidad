import { useRef, useState } from 'react';
import { Input } from 'antd';
import InfoCards from '../../components/info-cards/InfoCards.jsx';
import FormModal from '../../../../components/modals/FormModal.jsx';
import ButtonCite from '../../../../components/cite-ui/ButtonCite.jsx'
import FormArea from './forms/FormArea.jsx';
import { GRAY_BUTTON } from '../../../../colors/buttons.js'
import { zonas } from '../../../../@fake-db/zonas.js';
import { removeSuffix } from '../../../../utils/sufix.js';
import './Areas.scss'

const { Search } = Input;

const Zones = () => {
    const formRef = useRef(null)

    const [openRegister, setOpenRegister] = useState(false)

    const showModalRegister = () => {
        setOpenRegister(true);
    };

    const handleSubmitRegister = (values) => {
        const _values = removeSuffix(values, '_zona')
        console.log('success', _values)
    }

    return (
        <div className="zones p-3 gap-3 overflow-x-scroll">
            <section className='bg-fondo-secciones flex justify-end'>
                <div className='p-4'>
                    <Search
                        placeholder="Search"
                        allowClear
                        size='large'
                    />
                </div>
            </section>
            <section className='cartas bg-fondo-secciones '>
                <section className='flex justify-start p-3 border-b border-fondo-footer'>
                    <p className='font-inter text-lg text-texto-gray'>Areas</p>
                </section>
                <section>
                    <div className='flex justify-center items-center p-14 px-24'>
                        <div className='cartas__info-cards w-full gap-20'>
                            {zonas.map((zona) => (
                                <InfoCards key={zona.id} id={zona.id} nombre={zona.nombre} descripcion={zona.descripcion} type_card={'zona'} />
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

            <FormModal title="Registrar zona" open={openRegister} setOpen={setOpenRegister} formRef={formRef}>
                <FormArea formRef={formRef} handleSubmit={handleSubmitRegister} />
            </FormModal>
        </div >
    )
}

export default Zones