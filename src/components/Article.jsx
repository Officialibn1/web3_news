/* eslint-disable react/prop-types */

const Article = ({ article }) => {
    return (
        <div className="article">
            <div className="articleImg">
                <img src={`/images/${article.img}`} alt={`article-${article.title}`} />
            </div>

            <div className="articleText">
                <h1>
                    {article.number}
                </h1>

                <h2>
                    {article.title}
                </h2>

                <p>
                    {article.desc}
                </p>
            </div>
        </div>
    );
}

export default Article;
