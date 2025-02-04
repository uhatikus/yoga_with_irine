import { createFileRoute } from "@tanstack/react-router";
import PDFViewer from "../components/common/PDFViewer";

export const Route = createFileRoute("/certificate")({
  component: Certificate,
});

function Certificate() {
  return (
    <PDFViewer pdfPath="/assets/files/Certificate_Irina_Malyants_200_Hour_Hatha_Yoga_Teacher.pdf" />
  );
}
