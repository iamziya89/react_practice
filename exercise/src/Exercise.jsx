// import Animal from './Animal.jpg'
function Exercise(){
    function sum(){
        return "Shameem"
    }
    return(
        <div>
            <h2>Mohd Ziya Shameem</h2>
            <img src='/Animal.jpg' alt="Girl in a jacket" width="200" height="200" />
            <ul>
                <li>Invent Traffic Lights</li>
                <li>Rehearse a movie scene</li>
                <li>Imporove the spectrum Technology</li>
            </ul>
            <div>
                <button>Click Me</button>
            </div>
            <h2>{sum()}</h2>
        </div>
    )
}
export default Exercise