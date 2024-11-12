import ButtonAcc from '../../../../components/cite-ui/ButtonAcc'
import './Zones.scss'
import { GRAY_BUTTON } from '../../../../colors/buttons'
import { Col, Input, Row } from 'antd';
import InfoCards from '../../components/info-cards/InfoCards';

const { Search } = Input;

const Zones = () => {

    return (
        <div className="zones p-3 gap-3">
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
                    <p className='font-inter text-lg text-texto-gray'>Zonas</p>
                </section>
                <section>
                    <div>
                        <Row className='flex justify-center py-10 gap-20 px-10'>
                            <Col lg={4} sm={8}>
                                <InfoCards />
                            </Col>
                            <Col lg={4} sm={8}>
                                <InfoCards />
                            </Col>
                            <Col lg={4} sm={8}>
                                <InfoCards />
                            </Col>
                            <Col lg={4} sm={8}>
                                <InfoCards />
                            </Col>
                            <Col lg={4} sm={8}>
                                <InfoCards />
                            </Col>
                            <Col lg={4} sm={8}>
                                <InfoCards />
                            </Col>
                            <Col lg={4} sm={8}>
                                <InfoCards />
                            </Col>
                        </Row>
                    </div>
                </section>
            </section>
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