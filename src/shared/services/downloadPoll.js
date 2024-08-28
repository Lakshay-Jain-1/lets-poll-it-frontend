import jsPDF from "jspdf";

export default async function handleDownloadPoll(q, o1, o2, o3, o4) {
  try {
    // Create a PDF
    const pdf = new jsPDF("p", "mm", "a4");

    // Define styling for the question
    pdf.setFontSize(18); // Set font size for the question
    pdf.setFont("helvetica", "bold"); // Set font type and weight for the question
    pdf.setTextColor(0, 0, 128); // Set text color (dark blue) for the question

    // Add the question
    pdf.text(q, 10, 20); // Question position

    // Define styling for the options
    pdf.setFontSize(14); // Set font size for the options
    pdf.setFont("helvetica", "normal"); // Set font type and weight for the options
    pdf.setTextColor(0, 0, 0); // Set text color (black) for the options

    // Define spacing for options
    const optionSpacing = 10;

    // Add options with bullet points for better readability
    pdf.text("1. " + o1, 10, 30); // Option 1
    pdf.text("2. " + o2, 10, 30 + optionSpacing); // Option 2
    pdf.text("3. " + o3, 10, 30 + 2 * optionSpacing); // Option 3
    pdf.text("4. " + o4, 10, 30 + 3 * optionSpacing); // Option 4

    // Save the generated PDF
    pdf.save("Poll.pdf");

    console.log(
    `  PDF created with question: ${q}, and options: ${o1}, ${o2}, ${o3}, ${o4}`
    );
  } catch (error) {
    console.error("Error generating PDF:", error.message);
  }
}