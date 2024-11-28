import { Button, DatePicker, Select } from "antd";
import "./Reports.scss";
import Structura from "./Structura";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Chart } from "@antv/g2";
import { useEffect, useState } from "react";

export default function Reports() {
  const [ruta, setRuta] = useState("");
  function changeRuta() {
    setRuta("/REPORTE DE CALIDAD DE AGUA.pdf");
  }
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="reports">
      <div className="reports-body">
        <section className="reports-body-action">
          <section>
            <div className="filter-report">
              <label htmlFor="">Tipo de Parametros:</label>
              <Select
                defaultValue="lucy"
                style={{ width: "100%", height: "4.5vh" }}
                onChange={handleChange}
                options={[
                  { value: "jack", label: "Ph" },
                  { value: "lucy", label: "Nitrito" },
                  { value: "Yiminghe", label: "Nitrato" },
                  { value: "disabled", label: "Temperatura" },
                ]}
              />
            </div>
            <div className="filter-report">
              <label htmlFor="">Zonas:</label>
              <Select
                defaultValue="lucy"
                style={{ width: "100%", height: "4.5vh" }}
                onChange={handleChange}
                options={[
                  { value: "jack", label: "Zona 1" },
                  { value: "lucy", label: "Zona 2" },
                ]}
              />
            </div>
            <div className="filter-report">
              <label htmlFor="">Áreas:</label>
              <Select
                defaultValue="lucy"
                style={{ width: "100%", height: "4.5vh" }}
                onChange={handleChange}
                options={[
                  { value: "jack", label: "Area 1" },
                  { value: "lucy", label: "Area 2" },
                  { value: "Yiminghe", label: "Area 3" },
                  { value: "disabled", label: "Area 4" },
                ]}
              />
            </div>
            <div className="filter-report">
              <label htmlFor="">Tanques:</label>
              <Select
                defaultValue="lucy"
                style={{ width: "100%", height: "4.5vh" }}
                onChange={handleChange}
                options={[
                  { value: "jack", label: "Tanque 1" },
                  { value: "lucy", label: "Tanque 2" },
                  { value: "Yiminghe", label: "Tanque 3" },
                  { value: "disabled", label: "Tanque 4", disabled: true },
                ]}
              />
            </div>
            <div className="filter-report">
              <label htmlFor="">Fecha:</label>
              <DatePicker
                placeholder=""
                style={{ width: "100%", height: "4.5vh" }}
              />
            </div>
          </section>
          <section>
            <Button
              style={{ background: "#FF0000", color: "white", border: "0" }}
              onClick={changeRuta}
            >
              Generar Reporte
            </Button>
          </section>
        </section>
        <section className="reports-body-preview">
          <object data={ruta} width="100%" height="100%" />
        </section>
      </div>
    </div>
  );
}
