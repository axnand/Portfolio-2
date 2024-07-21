import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "./Particle";

import { Reveal } from "@/components/utils/Reveal";
import { DownloadResumeBtn } from "../../buttons/DownloadResumebtn";


import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink = "https://raw.githubusercontent.com/axnand/Portfolio-2/main/public/resume/Anand_Resume.pdf";

export const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Container fluid className="resume-section" id="resume">
        <Particle />

        <Row style={{ display:"flex", justifyContent: "center" }}>
          <Reveal>
            <DownloadResumeBtn href={resumeLink} target="_blank" className="flex-1">
              
              &nbsp;Download CV
            </DownloadResumeBtn>
          </Reveal>
        </Row>

        <Row
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            justifyContent: "center",
            color: "black",
            marginTop: "20px"
          }}
        >
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ display:"flex", justifyContent: "center" , marginTop:"20px"}}>
          <Reveal>
            <DownloadResumeBtn href={resumeLink} target="_blank" className="flex-1">
              
              &nbsp;Download CV
            </DownloadResumeBtn>
          </Reveal>
        </Row>
      </Container>
    </div>
  );
};
