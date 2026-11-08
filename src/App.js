import logo from './logo.svg';
import './App.css';

const labDetails = {
  course: 'Welcome to Fullstack Development - I',
  exercise: 'React JS Programming Week09 Lab exercise',
  studentId: '101574906',
  studentName: 'Alikhan Zhilkibayev',
  college: 'George Brown College, Toronto',
};

function LabWelcome({ details }) {
  return (
    <main className="lab">
      <img className="lab-logo" src={logo} alt="React logo" />
      <section className="lab-details" aria-labelledby="course-title">
        <h1 id="course-title">{details.course}</h1>
        <h2>{details.exercise}</h2>
        <p className="student-id">{details.studentId}</p>
        <p className="student-name">{details.studentName}</p>
        <p className="college">{details.college}</p>
      </section>
    </main>
  );
}

export default function App() {
  return <LabWelcome details={labDetails} />;
}
