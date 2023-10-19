// Template string, multiple line string, dynamic string
const person = "Hasnat Shahriyar";
const person2 = 'Shad Hossain';
const person3 = `Tafsinur Rahman`;

const multiLine = "First Line\n"+
"Second Line\n" +
"Third Line\n";

const newMultiLineMethod =`
First Line Method
Second Line Method
Third Line Method
`

console.log(multiLine, newMultiLineMethod);

const a = 20;
const b = 30;
const nums = [10, 20, 30, 40, 50]
const summary = "Sum of : " + a + " and" + b + " is : " + (a+b);
// Template String
const newSummary = `\nSum of ${a} and ${nums.length} is : ${a+b}`;

console.log (summary, newSummary);