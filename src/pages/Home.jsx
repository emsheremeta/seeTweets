import { Link } from "react-router-dom";

export const Home = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log("submit");
        
    }
    return (
        <div>
            <h1>
                WELCOME
            </h1>
            <button type="button" onClick={handleSubmit}>
                <Link to ="/tweets"> See tweets</Link>
                </button>
        </div>
    )
}