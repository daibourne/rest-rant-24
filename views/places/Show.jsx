const React = require('react');
const Default = require('../layouts/Default');

const Show = ({ place, id }) => {
    const cuisinesBadges = place.cuisines.split(',').map((cuisine) => {
        return (
            <span key={cuisine} className='badge rounded-pill text-bg0info me-2'>
                {cuisine}
            </span>
        );
    });

    return (
        <Default>
            <main className='container'>
                <div classNmae='row align-items-start'>
                    <div className='col'>
                        <img src={place.pic} alt={place.name} />
                    </div>
                    <div className='col'>
                    <h1>{place.name}</h1>
                    <p>
                        Located at: {place.city},  {place.state}
                    </p>
                    <p>{cuisinesBadges}</p>
                    </div>
                </div>
                <h3>Located in {data.place.city}, {data.place.state}</h3>
                <h3>
                    {data.place.showEstablished()}
                </h3>
                <h4>
                    Serving {data.place.cuisines}
                </h4>
                <div className='row align-items-center'>
                    <div className='col'>
                        <a href={`/places/${id}/edit`} className='btn btn-warning'>
                            Edit
                        </a>
                        <form action={`/places/${id}?_method=DELETE`} method='POST'>
                            <button type='submit' className='btn btn-danger'>
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </Default>
    );
};

module.exports = Show;