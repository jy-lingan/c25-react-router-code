import React from 'react'
import Maggie from '../../img/maggie.jpg'




const Blog = () => {
    return (
        <aside>

            <div className="container bg-warning">
                <div className=" row card-body">

                    <div className="card aside " >
                        <h5 className="card-title">Episodio "Especial de noche de Brujas VII" Octubre 27, 1996</h5>
                        <img src={Maggie} className="card-img-top" alt="..." style={{ width: '18rem' }} />
                        <div className="card-body">

                            <p className="card-text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ipsa libero obcaecati tempora omnis sed fugiat pariatur ea natus. Sint quaerat laboriosam officiis veniam culpa officia magni magnam! Vero, ut.
                            </p>
                            <a href="#" className="btn btn-danger">Go somewhere</a>
                        </div>
                    </div>



                    <div className="card aside " >
                        <h5 className="card-title">Episodio "Lucha educativa" Abril 16, 1995</h5>
                        <img src={Maggie} className="card-img-top" alt="..." style={{ width: '18rem' }} />
                        <div className="card-body">

                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ipsa libero obcaecati tempora omnis sed fugiat pariatur ea natus. Sint quaerat laboriosam officiis veniam culpa officia magni magnam! Vero, ut.</p>
                            <a href="#" className="btn btn-danger">Go somewhere</a>
                        </div>
                    </div>

                </div>
            </div>

        </aside>
    )
}

export default Blog
