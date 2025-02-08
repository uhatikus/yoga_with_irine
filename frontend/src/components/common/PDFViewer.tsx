import { FC } from "react";

interface PdfViewerProps {
  pdfPath: string;
}

const PdfViewer: FC<PdfViewerProps> = ({ pdfPath }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <object
        data={pdfPath}
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default PdfViewer;
