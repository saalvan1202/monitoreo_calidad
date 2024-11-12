import { useRef, useState } from "react"
import ButtonCite from "../../../../components/cite-ui/ButtonCite.jsx"
import BasicModal from "../../../../components/modals/BasicModal.jsx"
import FormModal from "../../../../components/modals/FormModal.jsx"
import FormZone from "../../pages/zones/forms/FormZone.jsx"
import { GRAY_BUTTON, RED_BUTTON } from "../../../../colors/buttons.js"
import './InfoCards.scss'
import { removeSuffix } from "../../../../utils/sufix.js"

const InfoCards = ({ id = null, nombre = "", descripcion = "", type_card = "" }) => {
    const formRef = useRef(null)

    const [openDelete, setOpenDelete] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)

    const showModalDelete = () => {
        setOpenDelete(true);
    };

    const showModalEdit = () => {
        setOpenEdit(true);
    };

    const handleExecutionDelete = () => {
        console.log(`Eliminando la zona con id: ${id}`)
    }

    const handleSubmitEdit = (values) => {
        const _values = removeSuffix(values, '_zona')
        const newValues = { id, ..._values }
        console.log('success', newValues)
    }

    return (
        <div className="info-card h-64 bg-[#13C703] rounded-lg">
            <div className="info-card__description bg-white rounded-[6px] flex flex-col justify-between">
                <div className="info-card__description-data px-4">
                    <div className="flex h-6 relative justify-center items-center">
                        <div className="rombo absolute bottom-3 border-2 border-texto-optimo"></div>
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
                <FormZone formRef={formRef} handleSubmit={handleSubmitEdit} nombre={nombre} descripcion={descripcion} />
            </FormModal>
        </div>
    )
}

export default InfoCards