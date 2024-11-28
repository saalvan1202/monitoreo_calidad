import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

// Estilos para el documento
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 12,
    lineHeight: 1.5,
  },
});

// Documento PDF
const Structura = () => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.title}>¡Vista previa del PDF!</Text>
      <Text style={styles.paragraph}>
        Este es un ejemplo de cómo mostrar un documento PDF directamente en tu
        aplicación React.
      </Text>
    </Page>
  </Document>
);

export default Structura;
