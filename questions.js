// Replace this array with the verified 90 bilingual questions extracted from the teacher's PDF.
// Required format:
// { id: 1, subject: "Physics", en: "Question in English", ta: "தமிழில் வினா",
//   options: [{en:"A",ta:"அ"}, {en:"B",ta:"ஆ"}, {en:"C",ta:"இ"}, {en:"D",ta:"ஈ"}], answer: 0 }
// Keep answer index 0-3. Do not place answer keys in a student-visible production file
// if tamper-resistant scoring is required; use a trusted server-side scoring endpoint.
window.quizQuestions = [];
