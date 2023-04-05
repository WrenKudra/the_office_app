import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">The Office App!</span></h1>
            </header>
            <main className="public__main">
            <p>A task managmenet app created for the employees <br>
                </br>of Dunder Mifflin Paper Company, Inc. 
                <br></br>A paper and office supplies wholesale company. </p>
                <br></br> 
                <p>Regional Manager: Michael Scott</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public