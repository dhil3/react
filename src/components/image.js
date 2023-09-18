import bg from "./images/bg-hero.jpg"
function Image(){
    return(
        <div className="text">
            <div >
        <img src={bg}/>
        </div>
        <div className="over">
            <h1>Enjoy Vaction With Us</h1>
            <p>Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit</p>
            <div className="rela">
            <input type="text"></input>
            <button>Search</button>
            </div>
        </div>
        </div>
    )
}
export default Image