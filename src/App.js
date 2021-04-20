import "./App.css";
import { useEffect, useState } from "react";
import Repositories from "./Repositories";

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState("all");

  const fetchRepos = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    const response = await fetch(
      `https://api.github.com/search/repositories?q=stars:>100000+language:${language}`
    );
    const data = await response.json();
    console.log(data);
    setLoading(false);
    setRepos(data.items);
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>GitHub repositories </h1>
        <h6>with more than 100k stars</h6>
      </header>
      <main>
        <form onSubmit={fetchRepos}>
          <label htmlFor="language">Language: </label>
          <input
            id="language"
            type="text"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
          &nbsp;
          <button>submit</button>
        </form>
        {loading ? <h3>loading ...</h3> : <Repositories repos={repos} />}
      </main>
    </div>
  );
}

export default App;
