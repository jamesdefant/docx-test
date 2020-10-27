import * as fs from "fs";
import { Document, Header, Packer, Paragraph, ShadingType, TextRun } from "docx";
import { saveAs } from "file-saver";

export function WriteShadedText(e) {
  e.preventDefault()

  const doc = new Document();

  doc.addSection({
    properties: {},
    children: [
      new Paragraph({
        children: [
          new TextRun({
            text: "This is a sentence that is shaded",
            shading: {
              type: ShadingType.CLEAR,
              color: "000000",
              fill: "cfd7e6",
            },
          }),
        ],
      }),
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    console.log(blob)
    saveAs(blob, "shaded.docx")
    console.log("Document Created Successfully")
  })
}
