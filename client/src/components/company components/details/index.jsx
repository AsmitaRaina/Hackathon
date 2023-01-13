import React from 'react'

const Details = ({ detail, goBack }) => {
    const { email, id, name, age, city } = detail
    return (
        // <div className="detail-card">
        //     <h1>{name}</h1>
        //     <h1>{email}</h1>
        //     <button
        //         onClick={goBack}
        //     >
        //         back
        //     </button>
        // </div>
        <article key={id} className="card">
            {/* <img className="card-img" src={image} alt={heading} /> */}
            <h3 className="card-heading">{name}</h3>
            <p className="card-para">{email}</p>
            <p className="card-para">{age}</p>
            <p className="card-para">{city}</p>
            <button onClick={goBack} className="input-submit">
                back
            </button>
        </article>
    );
}

export default Details