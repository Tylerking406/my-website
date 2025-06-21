export default function Card({ image, title, content }) {
    return (
        <div className="card">
            <img className="card-img" src={image} alt={title} />
            <h2 className="card-title">{title}</h2>
            <p className="card-content">{content}</p>
        </div>
    );
}