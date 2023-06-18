function calculateGrade() {
    const marksInput = document.getElementById('marksInput');
    const gradeOutput = document.getElementById('gradeOutput');
  
    // mark the input value as a number
    const marks = Number(marksInput.value);
  
    // Checking the range of marks and assigning the grade:-
    let grade;
    if (marks >= 80) {
      grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
      grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
      grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
      grade = 'D';
    } else {
      grade = 'E';
    }
  
    // Output the grade
    gradeOutput.textContent = `Grade: ${grade}`;
  }
  