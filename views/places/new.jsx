const React = require('react');
const Default = require('../layouts/Default');

const new_form = () => {
    return (
        <Default>
            <main>
                <h1>Add a New Place</h1>
                <form method='POST' action='/places'>
                    <div className='form-group'>
                        <label htmlFor='name'>Place Name</label>
                        <input className='form-control' id='name' name='name' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pic'>Place Picture</label>
                        <input className='form-control' type='url' id='pic' name='pic' />
                    </div>
                    <div>
                        <label for='founded'>Founded Year</label>
                        <input className='form=control' id='founded' name='founded' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='city'>City</label>
                        <input className='form-control' id='city' name='city' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='state'>State</label>
                        <input className='form-control' id='state' name='state' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cuisines'>Cuisines</label>
                        <input className='form-control' id='cuisines' name='cuisines' />
                    </div>
                    <input className='btn btn-primary' type='submit' value='Add Place' />
                </form>
            </main>
        </Default>
    );
};

module.exports = new_form;