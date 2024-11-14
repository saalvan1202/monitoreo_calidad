import { useState } from "react"
import ButtonCite from "../../../../components/cite-ui/ButtonCite.jsx"
import BasicModal from "../../../../components/modals/BasicModal.jsx"
import FormModal from "../../../../components/modals/FormModal.jsx"
import { GRAY_BUTTON, RED_BUTTON } from "../../../../colors/buttons.js"
import './InfoCards.scss'

const InfoCards = ({ id = null, nombre = "", descripcion = "", type_card = "", color_card = {}, handleClickCard = () => { }, formRef, children }) => {

    const [openDelete, setOpenDelete] = useState(false)

    const [openEdit, setOpenEdit] = useState(false)

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const showModalDelete = () => {
        setOpenDelete(true);
    };

    const showModalEdit = () => {
        setOpenEdit(true);
    };

    const handleExecutionDelete = () => {
        console.log(`Eliminando la ${type_card} con id: ${id}`)
    }

    return (
        <div style={{ backgroundColor: color_card.backgroundColor, ...(isHovered && { backgroundColor: color_card.hoverColor }) }} className="info-card h-64 rounded-lg">
            <div className="info-card__description bg-white rounded-[6px] flex flex-col justify-between">
                <div className="info-card__description-data px-4">
                    <div className="flex h-6 relative justify-center items-center">
                        <button style={{ backgroundColor: color_card.backgroundColor, borderColor: color_card.borderColor, ...(isHovered && { backgroundColor: color_card.hoverColor }) }} className="rombo absolute bottom-3 border-2" onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave} onClick={() => handleClickCard(id)}></button>
                    </div>
                    <div>
                        <p className="py-3 text-xl font-inter">Nombre: {nombre}</p>
                    </div>
                    <div>
                        <p className="px-5 text-base font-inter">{descripcion}</p>
                    </div>
                </div>
                <div className="flex justify-start items-center p-2 gap-2">
                    <ButtonCite
                        size="small"
                        type="primary"
                        borderRadius="4px"
                        propsComponentes={GRAY_BUTTON}
                        onClick={showModalEdit}
                    >
                        <p className='font-inter font-light text-xs'>EDITAR</p>
                    </ButtonCite>
                    <ButtonCite
                        size="small"
                        type="primary"
                        borderRadius="4px"
                        propsComponentes={RED_BUTTON}
                        onClick={showModalDelete}
                    >
                        <p className='font-inter font-light text-xs'>ELIMINAR</p>
                    </ButtonCite>
                </div>
            </div>
            <div className="h-5 w-full"></div>

            <BasicModal title={`¿Estás seguro de eliminar la ${nombre}?`} open={openDelete} setOpen={setOpenDelete} handleExecution={handleExecutionDelete}>
                <p>Esta acción podría generar cambios en el sistema</p>
            </BasicModal>

            <FormModal title={`Editar registro de ${type_card}`} open={openEdit} setOpen={setOpenEdit} formRef={formRef}>
                {children}
            </FormModal>
        </div>
    )
}

export default InfoCards