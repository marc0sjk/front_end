import "./index.css";
const Card = ({title, content}) => {
    return(
        <article className="card">
            <img src="src/assets/react.svg" alt="imagem do card"/>
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
        <a href="www.github.com">Acessar post</a>
        </article>
    );
};
export default Card;