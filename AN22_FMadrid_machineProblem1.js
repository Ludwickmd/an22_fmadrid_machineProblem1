// Define the grading system
const gradingSystem = {
  A: 90,
  B: 80,
  C: 70,
  D: 60,
  F: 0
};

// Function to prompt user for grades
function promptGrades() {
  const grades = [];
  for (let i = 0; i < 5; i++) {
    const student = {};
    student.name = prompt(`Enter the name of student ${i + 1}:`);
    student.classParticipation = parseInt(prompt(`Enter class participation grade for ${student.name}:`));
    student.summativeAssessment = parseInt(prompt(`Enter summative assessment grade for ${student.name}:`));
    student.finalExamination = parseInt(prompt(`Enter final examination grade for ${student.name}:`));
    grades.push(student);
  }
  return grades;
}

// Function to calculate average of assessments
function calculateAverageAssessment(grades) {
  let totalEnablingAssessment = 0;
  let totalSummativeAssessment = 0;
  for (const grade of grades) {
    totalEnablingAssessment += grade.classParticipation;
    totalSummativeAssessment += grade.summativeAssessment;
  }
  return {
    averageEnablingAssessment: totalEnablingAssessment / grades.length,
    averageSummativeAssessment: totalSummativeAssessment / grades.length
  };
}

// Function to calculate final grades and letter grades
function calculateFinalGrades(grades, averageAssessment) {
  const finalGrades = [];
  for (const grade of grades) {
    const finalGrade = (averageAssessment.averageEnablingAssessment * 0.4) + (averageAssessment.averageSummativeAssessment * 0.6);
    let letterGrade = '';
    for (const [gradeKey, gradeValue] of Object.entries(gradingSystem)) {
      if (finalGrade >= gradeValue) {
        letterGrade = gradeKey;
        break;
      }
    }
    finalGrades.push({
      name: grade.name,
      classParticipation: grade.classParticipation,
      summativeAssessment: grade.summativeAssessment,
      finalGrade: finalGrade,
      letterGrade: letterGrade
    });
  }
  return finalGrades;
}

// Function to display final grades in a table format
function displayFinalGrades(finalGrades) {
  console.log("Final Grades:");
  console.log("|   Name   | Class Participation | Summative Assessment | Final Grade | Letter Grade |");
  console.log("|----------|---------------------|----------------------|-------------|--------------|");
  for (const grade of finalGrades) {
    console.log(`| ${grade.name.padEnd(8)} | ${grade.classParticipation.toString().padEnd(20)} | ${grade.summativeAssessment.toString().padEnd(19)} | ${grade.finalGrade.toString().padEnd(11)} | ${grade.letterGrade.padEnd(12)} |`);
  }
  console.log("---------------------");
}

// Main program
function main() {
  const grades = promptGrades();
  const averageAssessment = calculateAverageAssessment(grades);
  const finalGrades = calculateFinalGrades(grades, averageAssessment);
  displayFinalGrades(finalGrades);
}

// Run the main program
main();



