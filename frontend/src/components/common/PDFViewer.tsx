import { useState } from "react";
import { Document, Page } from "react-pdf";

const PDFViewer = ({ pdfUrl: string }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        style={{ width: "100%" }}
      >
        <Page
          pageNumber={pageNumber}
          width={600}
          style={{
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            marginTop: "20px",
          }}
        />
      </Document>
      <p style={{ marginTop: "10px" }}>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default PDFViewer;
