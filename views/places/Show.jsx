const React = require('react');
const Default = require('../layouts/Default');

const Show = ({ place }) => {
    const cuisinesBadges = place.cuisines.split(',').map((cuisine) => {
        return (
            <span key={cuisine} className='badge rounded-pill text-bg0info me-2'>
                {cuisine}
            </span>
        );
    });

    let comments = (
        <h3 className='inactive'>No Comments yet!</h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? 'Rant!' : 'Rave!'}</h2>
                    <h4>[c.content]</h4>
                    <h3>
                        <stong>= {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        });
    };

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
                <h3>Located in {place.city}, {place.state}</h3>
                <h3>
                    {place.showEstablished()}
                </h3>
                <h4>
                    Serving {place.cuisines}
                </h4>
                <div className='row align-items-center'>
                    <div className='col'>
                        <a href={`/places/${place.id}/edit`} className='btn btn-warning'>
                            Edit
                        </a>
                        <form action={`/places/${place.id}?_method=DELETE`} method='POST'>
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