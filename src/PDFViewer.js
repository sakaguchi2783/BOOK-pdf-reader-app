import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

function PDFViewer() {
  return (
    <div style={{ height: '750px' }}>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <Viewer fileUrl="/book.pdf" />
      </Worker>
    </div>
  );
}

export default PDFViewer;
