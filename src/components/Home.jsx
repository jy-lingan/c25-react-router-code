import React from 'react'
import homeimg from '../img/carrousel-3.jpg'
import Maggie from '../img/maggie.jpg'
import Homero from '../img/homer.jpg'
import Bart from '../img/bart.jpg'

const Home = () => {
    return (
        <div className="home">
            <div>
                <img src={homeimg} className="img-fluid w-100" alt="Courrosel"></img>
            </div>
            <div className="container">
                <div className="row">

                    <div className="card aside bg-warning" style={{ width: '18rem' }}>
                        <img src={Maggie} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-danger">Go somewhere</a>
                        </div>
                    </div>

                    <div className="card aside bg-warning" style={{ width: '18rem' }}>
                        <img src={Homero} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-danger">Go somewhere</a>
                        </div>
                    </div>

                    <div className="card aside bg-warning" style={{ width: '18rem' }}>
                        <img src={Bart} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-danger">Go somewhere</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Home
