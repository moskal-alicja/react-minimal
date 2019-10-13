import React from 'react'

class StudentsList extends React.Component {
    render() {
        const { children } = this.props;
        if(!children || children.length < 1) {
            return <p>Click button to show students</p>
        }

        return (
            <div>
                {children}
            </div>
        )
    }
}

class Students extends React.Component {
    constructor() {
      super();
  
      this.getAllStudentsNames = this.getAllStudentsNames.bind(this);
      this.getAllStudentsNamesSorted = this.getAllStudentsNamesSorted.bind(this);
      this.getOldStudentsNamesFromActiveTeachers = this.getOldStudentsNamesFromActiveTeachers.bind(this);

      this.state = {
        selectedStudents: []
      }
    }
    
    getAllStudentsNames() {
        const students = [].concat(...data.map(teacher => Array.from(teacher.students, x => x.name)));
        this.setState({selectedStudents: students});
    }

    getAllStudentsNamesSorted() {
        const students = [].concat(...data.map(teacher => Array.from(teacher.students, x => x.name))).sort();
        this.setState({selectedStudents: students});
    }

    getOldStudentsNamesFromActiveTeachers(minAge) {
        const students = [].concat(...data.filter(x => x.active).map(y => Array.from(y.students.filter(z => z.age > minAge), u => u.name)));
        this.setState({selectedStudents: students});        
    }
  
    render() {
        const { selectedStudents } = this.state;
        return (
            <div className="Students">
                <div className="Students-buttons">
                    <button onClick={this.getAllStudentsNames}>All students</button>
                    <button onClick={this.getAllStudentsNamesSorted}>Sort students</button>
                    <button onClick={() => this.getOldStudentsNamesFromActiveTeachers(20)}>Old students</button>
                </div>
                <StudentsList>
                    {selectedStudents.map(student => <p key={student}>{student}</p>)}
                </StudentsList>
            </div>
        );
    }
}

export default Students

const data = 
[
  {
    "teacherName": "Jan Nowak",
    "teacherAge": 36,
    "active": true,
    "students": [
      {
        "name": "Maciej Janosz",
        "age": 12
      },
      {
        "name": "Wojciech Kowalski",
        "age": 15
      },
      {
        "name": "Wioletta Poznańska",
        "age": 1000000
      }
    ]
  },
  {
    "teacherName": "Mariusz Flasinski",
    "teacherAge": 56,
    "active": true,
    "students": [
      {
        "name": "Jan Kot",
        "age": 12
      },
      {
        "name": "Jan Ziobro",
        "age": 15
      },
      {
        "name": "Adam Malysz",
        "age": 41
      }
    ]
  },
  {
    "teacherName": "Wojciech Kuzak",
    "teacherAge": 44,
    "active": false,
    "students": [
      {
        "name": "Janina Wronska",
        "age": 22
      },
      {
        "name": "John Dover",
        "age": 7
      },
      {
        "name": "Emil Petterson",
        "age": 46
      }
    ]
  }
]