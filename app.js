import express from "express";
import { pdf } from "@react-pdf/renderer";
import { TEMPLATES } from "./src/templates/constants";

const app = express();
const PORT = process.env.PORT || 4012;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post("/generate", async (req, res) => {
  const { template } = req.body;
  const PDFDocument = TEMPLATES[template];

  if (!PDFDocument) res.status(404).send("Template not found");

  const pdfStream = await pdf(PDFDocument).toBuffer();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=generated.pdf");

  return pdfStream.pipe(res);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
