export function Cards({name,Age,Email,Bollean,date}){

    return (
        <div className="flex bg-white shadow-lg rounded-2xl p-6 w-80 hover:shadow-2xl transition-shadow duration-300 " >

<div>
    <h1>Name = {name}</h1>
    <h2>Age = {Age}</h2>
    <p>Email = {Email}</p>
    <p>isActive = {Bollean}</p>
    <p>Date = {date}</p>
</div>
    </div>
)

}
