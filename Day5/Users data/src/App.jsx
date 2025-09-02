import { Cards } from "./components/Cards"

function App() {
let products=[
  {
    "id": 1,
    "name": "Aarav Mehta",
    "age": 28,
    "email": "aarav.mehta@example.com",
    "isActive": true,
    "joinDate": "2023-07-15"
  },
  {
    "id": 2,
    "name": "Isha Verma",
    "age": 24,
    "email": "isha.verma@example.com",
    "isActive": false,
    "joinDate": "2022-11-03"
  },
  {
    "id": 3,
    "name": "Rohan Kapoor",
    "age": 32,
    "email": "rohan.kapoor@example.com",
    "isActive": true,
    "joinDate": "2024-02-18"
  },
  {
    "id": 4,
    "name": "Neha Sharma",
    "age": 29,
    "email": "neha.sharma@example.com",
    "isActive": false,
    "joinDate": "2021-09-22"
  },
  {
    "id": 5,
    "name": "Aditya Singh",
    "age": 35,
    "email": "aditya.singh@example.com",
    "isActive": true,
    "joinDate": "2020-05-10"
  }
]
return (
  <div className="grid grid-cols-2 gap-10 ">

  
        {products.map((item)=>{
          return <Cards name={item.name} Age={item.age} Email={item.email} Bollean={item.isActive} date={item.joinDate}/>
        })}
        </div>
)
}

export default App
