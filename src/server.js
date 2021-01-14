const express = require('express');
const app = express();
const fs = require('fs');
const { mdToPdf } = require('md-to-pdf');

(async () => {
  const pdf = await mdToPdf({ path: 'src/test.md' }, { dest: 'result/output.pdf' });

  if (pdf) {
    fs.writeFileSync(pdf.filename, pdf.content);
  }
})();

