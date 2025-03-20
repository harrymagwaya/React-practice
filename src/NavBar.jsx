
function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="The example">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">My Awesome navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="" data-bs-target="#navbarsExample03" aria-controls="navbarsExamples"
                aria-expanded="false" aria-label="Toggle Navigation">
                <span className="navbar-toggle-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample03">
                    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                        <li className="nav-item">
                            <a className="navlink active" aria-current="page" href="#" >Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true" href="#">Disabled</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another Action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form role="search">
                        <input className="form-control" type="search" placeholder="search" aria-label="Search" />
                    </form>
                </div>
            </div>
        </nav>
    )
}


export default NavBar;