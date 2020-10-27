import * as fs from "fs";
import { Document, Header, Packer, Paragraph, ShadingType, TextRun } from "docx";
import { saveAs } from "file-saver";

export function WriteShadedText(e) {
  e.preventDefault()

  const doc = new Document();

  doc.addSection({
    headers: {
      default: new Header({
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
      }),
    },
    children: [],
  });

  // Packer.toBuffer(doc)
  //     .then((buffer) => {
  //       fs.writeFileSync("My Document.docx", buffer);
  //     });

  Packer.toBlob(doc).then((blob) => {
    console.log(blob)
    saveAs(blob, "shaded.docx")
    console.log("Document Created Successfully")
  })
}
