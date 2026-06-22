let q2Answer = "";

function saveQ2(val) {
  q2Answer = val;
}

function generatePDF() {

  const q1 = document.getElementById("q1").value;
  const q3 = document.getElementById("q3").value;
  const q4 = document.getElementById("q4").value;
  const q5 = document.getElementById("q5").value;

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Quiz Report", 10, 10);

  doc.setFontSize(12);

  doc.text("Q1 Answer: " + q1, 10, 25);
  doc.text("Q2 Answer: " + q2Answer, 10, 35);
  doc.text("Q3 Answer: " + q3, 10, 45);
  doc.text("Q4 Answer: " + q4, 10, 55);
  doc.text("Q5 Answer: " + q5, 10, 65);

  doc.text("Generated Report", 10, 85);

  doc.save("quiz_report.pdf");
}