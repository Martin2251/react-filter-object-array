import { useState } from "react"

const employees = [
  {
    id: 1,
    name: "Tobe",
    experience: 4,
    department: "Accounting",
  },
  {
    id: 2,
    name: "Jolee",
    experience: 13,
    department: "Services",
  },
  {
    id: 3,
    name: "Muhammad",
    experience: 14,
    department: "Training",
  },
  {
    id: 4,
    name: "Hubie",
    experience: 5,
    department: "Sales",
  },
  {
    id: 5,
    name: "Yoshiko",
    experience: 16,
    department: "Services",
  },
  {
    id: 6,
    name: "Beatrix",
    experience: 17,
    department: "Human Resources",
  },
  {
    id: 7,
    name: "Jacob",
    experience: 4,
    department: "Engineering",
  },
  {
    id: 8,
    name: "Koren",
    experience: 4,
    department: "Accounting",
  },
  {
    id: 9,
    name: "Marissa",
    experience: 20,
    department: "Support",
  },
  {
    id: 10,
    name: "Rufe",
    experience: 18,
    department: "Training",
  },
]

function App() {
  const [filteredEmployees, setFilteredEmployees] = useState(employees)

  const filterByDepartment = department => {
    setFilteredEmployees(
      employees.filter(employee => employee.department === department)
    )
  }

  // Using Set to filter unique values
  const departments = Array.from(
    new Set(employees.map(employee => employee.department))
  )
  return (
    <div className="App">
        <select onChange={e => filterByDepartment(e.target.value)}>
        <option value="" disabled default selected>
          Select department
        </option>

        {departments.map(department => {
          return <option key={department}>{department}</option>
        })}
      </select>
      <ul>
        {filteredEmployees.map(employee => {
          const { name, experience, department, id } = employee
          return (
            <li key={id}>
              <div>
                Name: <strong>{name}</strong>
              </div>
              <div>Experience: {experience} year(s)</div>
              <div>Department: {department}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
