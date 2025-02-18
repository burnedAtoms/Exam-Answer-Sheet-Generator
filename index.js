import * as fs from "fs";
import { Document, Paragraph, Packer, TextRun } from "docx";
var index = 1
const maxIndex = parseInt(process.argv.slice(2)[0],10);

function AnswerSheetGen(maxIndex){
  var sheet = [];
  for(var i = 1;i<=maxIndex;i++){
    sheet.push(new TextRun({
      text:`${i}.\tA\tB\tC\tD`,
      break:2
    }));
  }
  return sheet;
}
const doc = new Document({
  sections: [
    {
        properties: {},
        children: [
            new Paragraph({
                children: AnswerSheetGen(maxIndex || 60),
            }),
        ],
    },
],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("ExamAnswerSheetTestDoc.docx", buffer);
});