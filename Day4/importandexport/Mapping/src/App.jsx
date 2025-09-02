import {Card} from "./Components/Card"


function App() {
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "Noise-cancelling over-ear headphones with 30-hour battery life.",
    price: 149.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Fitness tracking smartwatch with heart rate monitor.",
    price: 199.99,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    id: 3,
    name: "Gaming Keyboard",
    description: "Mechanical RGB keyboard with customizable keys.",
    price: 89.99,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    id: 4,
    name: "4K Monitor",
    description: "27-inch ultra HD monitor with HDR and 144Hz refresh rate.",
    price: 349.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    description: "Portable waterproof speaker with powerful bass.",
    price: 59.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    id: 6,
    name: "Running Shoes",
    description: "Lightweight running shoes with breathable fabric.",
    price: 99.99,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    id: 7,
    name: "Backpack",
    description: "Durable laptop backpack with USB charging port.",
    price: 69.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    id: 8,
    name: "Smartphone",
    description: "Latest smartphone with triple-lens camera and OLED display.",
    price: 799.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    id: 9,
    name: "Coffee Maker",
    description: "Automatic espresso machine with milk frother.",
    price: 129.99,
    category: "Home Appliances",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  },
  {
    id: 10,
    name: "Office Chair",
    description: "Ergonomic office chair with lumbar support and adjustable height.",
    price: 249.99,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d"
  }
];
  return (
    <div style={{display:"grid" ,gridTemplateColumn:"1fr 1fr 1fr 1fr"}}>
      {products.map((item)=>{
        return <Card name={item.name} desc={item.description} cat={item.category} img={item.image} price={item.price}/>
      })}
    </div>
  )
}

export default App
