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
    if (place.comments.length > 0) {
        comments = place.comments.map((comment) => {
            return (
                <div key={comment.id} className='card mb-3'>
                    <div className='card-body'>
                        <h5 className='card-title'>{comment.author}</h5>
                        <h6 className='card-subtitle mb-2 text-muted'>
                            {comment.rant ? 'Rant 😡' : 'Rave 🤩'}
                        </h6>
                        <h6 className='card-subtitle mb-2 text-muted'>
                            Rating: {comment.stars} stars
                        </h6>
                        <p className='card-text'>{comment.content}</p>
                    </div>
                </div>
            );
        });
    }

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
                    <h2>Comments</h2>
                    {comments}
                </div>
            </main>
        </Default>
    );
};

module.exports = Show;