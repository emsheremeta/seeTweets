import { Link } from "react-router-dom"

export const Tweets =() => {
    return (
        <div>
            <h1>Tweets here</h1>
            <button type="button">
                <Link to='/'>Go Back</Link>
            </button>
        </div>
    )
}