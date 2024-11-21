import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "antd";
import InfoCards from "../../components/info-cards/InfoCards.jsx";
import FormModal from "../../../../components/modals/FormModal.jsx";
import ButtonCite from "../../../../components/cite-ui/ButtonCite.jsx";
import FormZone from "./forms/FormZone.jsx";
import { useMonitoring } from "../../../../store/monitoring/useMonitoring.js";
import {
  actionGetZones,
  actionPostZone,
} from "../../../../actions/monitoring.js";
import { GRAY_BUTTON } from "../../../../colors/buttons.js";
import { GREEN_CARD } from "../../../../colors/cards.js";
import { removeSuffix } from "../../../../utils/sufix.js";
import "./Zones.scss";

const { Search } = Input;

const Zones = () => {
  const { setIdZone, zones } = useMonitoring();

  const formRefRegister = useRef(null);

  const formReftEdit = useRef(null);

  const [openRegister, setOpenRegister] = useState(false);

  const [confirmLoadingRegister, setConfirmLoadingRegister] = useState(false);

  const showModalRegister = () => {
    setOpenRegister(true);
  };

  const handleSubmitRegister = async (values) => {
    const _values = removeSuffix(values, "_zona");

    await actionPostZone(_values, setConfirmLoadingRegister);

    formRefRegister.current.resetFields();
    setOpenRegister(false);
    actionGetZones();
  };

  const handleSubmitEdit = (values, id) => {
    const _values = removeSuffix(values, "_zona");
    const newValues = { id, ..._values };
    console.log("success", newValues);
  };

  const handleClickCard = (id) => {
    setIdZone(id);
    navigate("/areas");
  };

  useEffect(() => {
    if (!zones.length) {
      actionGetZones();
    }
  }, [zones]);

  console.log(zones);

  return (
    <div className="zones p-3 gap-3 overflow-x-scroll">
      <section className="filtros bg-fondo-secciones flex justify-end items-center p-4">
        <div className="filtros__search w-[20%] min-w-[200px]">
          <Search placeholder="Search" allowClear size="large" />
        </div>
      </section>
      <section className="cartas bg-fondo-secciones ">
        <section className="flex justify-start p-4 border-b border-fondo-footer">
          <p className="font-inter text-lg text-texto-gray">Zonas</p>
        </section>
        <section>
          <div className="cartas__caja-cartas flex justify-center items-center p-14 px-24">
            <div className="cartas__caja-cartas__info-cards w-full gap-20">
              {zones.map((zona) => (
                <InfoCards
                  key={zona.zones_id}
                  id={zona.zones_id}
                  nombre={zona.name}
                  descripcion={zona.description}
                  type_card={"zona"}
                  color_card={GREEN_CARD}
                  handleClickCard={handleClickCard}
                  formRef={formReftEdit}
                >
                  <FormZone
                    formRef={formReftEdit}
                    handleSubmit={(value) =>
                      handleSubmitEdit(value, zona.zones_id)
                    }
                    nombre={zona.name}
                    descripcion={zona.description}
                  />
                </InfoCards>
              ))}
            </div>
          </div>
        </section>
      </section>
      <section className="flex justify-end">
        <ButtonCite
          size="large"
          type="primary"
          borderRadius="4px"
          propsComponentes={GRAY_BUTTON}
          onClick={showModalRegister}
        >
          <p className="font-inter font-light text-xs">REGISTRAR ZONA</p>
        </ButtonCite>
      </section>

      <FormModal
        title="Registrar zona"
        open={openRegister}
        setOpen={setOpenRegister}
        formRef={formRefRegister}
        confirmLoading={confirmLoadingRegister}
      >
        <FormZone
          formRef={formRefRegister}
          handleSubmit={handleSubmitRegister}
        />
      </FormModal>
    </div>
  );
};

export default Zones;
