import ButtonAcc from '../../../../components/cite-ui/ButtonAcc'
import './Zones.scss'
import { GRAY_BUTTON } from '../../../../colors/buttons'

const Zones = () => {
    return (
        <div className="zones p-3 gap-3">
            <section>buscador</section>
            <section>zonas</section>
            <section className='flex justify-end'>
                <ButtonAcc
                    size="large"
                    type="primary"
                    borderRadius="4px"
                    propsComponentes={GRAY_BUTTON}
                >
                    <p className='font-inter font-light text-xs'>REGISTRAR ZONA</p>
                </ButtonAcc>
            </section>
        </div>
    )
}

export default Zones