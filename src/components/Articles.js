import React, { useEffect, useState } from "react";

const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setArticles(data);
    }, 2000);
  }, []);

  return (
    <div className="articles">
      <h2>Articles</h2>

      {articles &&
        articles.map((article) => (
          <div className="article" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.title}</p>
          </div>
        ))}

      {!articles && <p>Loading...</p>}
    </div>
  );
};

export default Articles;
{
  /* <h3>{article.title}</h3> */
}
{
  /* <div>{article.body}</div> */
}
