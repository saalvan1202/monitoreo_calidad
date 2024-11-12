import { useState } from "react"
import ButtonAcc from "../../../../components/cite-ui/ButtonAcc.jsx"
import BasicModal from "../../../../components/modals/BasicModal.jsx"
import { GRAY_BUTTON, RED_BUTTON } from "../../../../colors/buttons.js"
import './InfoCards.scss'

const InfoCards = () => {
    const [open, setOpen] = useState(false)

    const showModal = () => {
        setOpen(true);
    };

    const handleExecution = () => {
        alert('Eliminado')
    }

    return (
        <div className="info-card h-64 bg-[#13C703] rounded-lg">
            <div className="info-card__description bg-white rounded-[6px] flex flex-col justify-between">
                <div className="info-card__description-data">
                    <div className="flex h-6 relative justify-center items-center">
                        <div className="rombo absolute bottom-3 border-2 border-texto-optimo"></div>
                    </div>
                    <div>
                        <p className="py-3 text-xl font-inter">Nombre: Zona 1</p>
                    </div>
                    <div>
                        <p className="px-5 text-base font-inter">ZONA DE CRÍA INTENSIVA CONTROLADA DE TILAPIA</p>
                    </div>
                </div>
                <div className="flex xl:flex-row sm:flex-col justify-start items-center p-2 gap-2">
                    <ButtonAcc
                        size="small"
                        type="primary"
                        borderRadius="4px"
                        propsComponentes={GRAY_BUTTON}
                    >
                        <p className='font-inter font-light text-xs'>EDITAR</p>
                    </ButtonAcc>
                    <ButtonAcc
                        size="small"
                        type="primary"
                        borderRadius="4px"
                        propsComponentes={RED_BUTTON}
                        onClick={showModal}
                    >
                        <p className='font-inter font-light text-xs'>ELIMINAR</p>
                    </ButtonAcc>
                </div>
            </div>
            <div className=" m-[10px] w-full"></div>
            <BasicModal title="¿Estás seguro de eliminar la zona 1?" open={open} setOpen={setOpen} handleExecution={handleExecution}>
                <p>Esta acción podría generar cambios en el sistema</p>
            </BasicModal>
        </div>
    )
}

export default InfoCards