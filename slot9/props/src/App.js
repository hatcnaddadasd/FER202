import './App.css';
import Welcome from './component/Welcome';
import UseProfile from './component/UserProfile';
import NameList from './component/NameList ';
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentCard from './component/StudentCard';

const useData = {name : "Le Thanh Dat", age: 21};
const namesList = ["Le Thanh Dat", "datltde180619@fpt.edu.vn"];
  const students = [
    { name: "traltb1@fe.edu.vn", age: 39, avatar: "/student1.jpg" },
    { name: "traltb2@fe.edu.vn", age: 40, avatar: "/student2.jpg" },
    { name: "traltb3@fe.edu.vn", age: 41, avatar: "/student3.jpg" },
  ];

function App() {
  return (
    <div>
      <Welcome name="Le Thanh Dat"/>
      <Welcome name="he. he. he."/>
      <UseProfile user={useData}/>
      <NameList names={namesList}/>
      <Container>
        <h1 className="my-4 text-center">Student information</h1>
        <Row>
          {/*Duyệt qua mảng students và truyền từng đối tượng student vào Student Card*/}
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard student={student} />
            </Col>
          ))}
        </Row>
      </Container>

    </div>
  );
}

export default App;
