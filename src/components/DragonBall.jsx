import React, { useState, useEffect } from 'react'

function DragonBall() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const Fetch = async () => {
            const r = await fetch('http://www.omdbapi.com/?apikey=2dfa9c57&s=dragon%20ball');
            const data = await r.json();
            setData(data.Search);
        };
        Fetch()
    }, [])
    return (
        <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center px-1">
                {data ? (
                    data.slice(0, 6).map((DragonBall) => (
                        <div key={DragonBall.imdbID} className="col mb-2 px-1">
                            <img className="img-fluid" src={DragonBall.Poster} alt={DragonBall.Title} style={{ width: '235px' }} />
                        </div>
                    ))
                ) : (
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}
            </div>

        </>
    )
}


export default DragonBall;