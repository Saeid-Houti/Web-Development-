import promptSync from 'prompt-sync';
const prompt=promptSync()
let students=[]

let name=''
let gender=''

for(let i=0;i<5;i++)
{
name=prompt("enter student's name: ")
gender=prompt("enter student's gender: ")
    let age=(Math.random(17)*35).toFixed(0)
    let grade=(Math.random(0)*100).toFixed(0)
    students.push({ "name": name, "gender": gender, "grade": grade, "age": age })

}

console.log(students)
const highesgrade = (students)=>
{
    let maxgrade = 0;
    let student;
    students.map((s)=>{
        if(s.grade >= maxgrade)
        {
            student = s;
            maxgrade = s.grade;
        }
    });

    return student.name;
}
const OldestStudent = (students)=>
{
    let maxage = 0;
    let student;
    students.map((s)=>{

        if(s.age >= maxage)
        {
            student = s;
            maxage = s.age;
        }
    });

    return student.name;
}

const YoungestStudent = (students)=>
{
    let minage = 100;
    let student;
    students.map((s)=>{

        if(s.age <= minage)
        {
            student = s;
            minage = s.age;
        }
    });

    return student.name;
}
const AgeAverage = (students)=>{
    let total = 0;
    students.map((s)=>{
        total += s.age;
    });
    return (total/students.length).toFixed(2);
};

const AgeMedian = (students)=>{

    const age = students.map((s)=>{
        return s.age;
    });

    age.sort();
    const totalstudents = students.length;

    if(totalstudents % 2 !== 0)
    {
        return age[Math.floor(totalstudents/2)];
    }
    else
    {
        return parseFloat((age[Math.floor(totalstudents/2)] + age[Math.floor(totalstudents/2)-1])/2).toFixed(2)
    }

};

const MeanGrade = (students)=>{
    let total = 0;
    students.map((s)=>{
        total += s.grade;
    });

    return parseFloat(total/students.length).toFixed(2);
};

const VarianceGrade = (students)=>{

    let total = 0;
    students.map((s)=>{
        total += s.grade;
    });

    const mean = total/students.length;
    let variance = 0;
    students.map((s)=>{
        variance += Math.pow(Math.abs(s.grade - mean),2);
    });

    return parseFloat(variance/students.length).toFixed(2);

};


console.log(`Student with HighestGrade: ${highesgrade(students)}`)
console.log(`Oldest Student: ${YoungestStudent(students)}`)
console.log(`Youngest Student: ${OldestStudent(students)}`)
console.log(`Average Student Age: ${AgeAverage(students)}`)
console.log(`Median Student Age: ${AgeMedian(students)}`)
console.log(`Student Mean Grades: ${MeanGrade(students)}`)
console.log(`Student Variance Grade: ${VarianceGrade(students)}`)