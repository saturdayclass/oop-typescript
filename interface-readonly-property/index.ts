interface Student {
  readonly name: string;
  readonly age: number;
}

const student: Student = { name: 'Jane', age: 19 };
// Tidak bisa
// student.name = 'Jane';

console.log(student);
