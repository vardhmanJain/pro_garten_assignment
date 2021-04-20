import React from "react";

function Repositories({ repos }) {
  return (
    <div className="repos">
      {repos.map((repo) => {
        return (
          <div className="repo">
            <img src={repo.owner.avatar_url} alt="avatar" />
            <div className="info">
              <h2>{repo.name}</h2>
              <p>{repo.description}</p>
              <p className="forks_count">Forks Count : {repo.forks_count}</p>
              <a href={repo.owner.html_url}>visit</a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Repositories;
