interface Report {
  generate(): void;
}

class CSVReport implements Report {
  public generate(): void {
      // Generate CSV report
  }
}

class PDFReport implements Report {
  public generate(): void {
      // Generate PDF report
  }
}

class ReportGenerator {
  public generateReport(Report report) {
    report.generate();
  }
}