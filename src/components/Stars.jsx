import fullStar from '../asset/fullStar.png'
import emptyStar from '../asset/emptyStar.png'

const Stars = ({ rating }) => {
    const starsRating = []

    for (let i = 0; i < rating; i++) {
        starsRating.push(
            <img
                key={'Star ' + i}
                src={fullStar}
                alt={rating + ' étoiles'}
            ></img>
        )
    }

    for (let i = rating; i < 5; i++) {
        starsRating.push(
            <img
                key={'Star ' + i}
                src={emptyStar}
                alt={rating + ' étoiles'}
            ></img>
        )
    }

    return <div className="stars">{starsRating}</div>
}

export default Stars
