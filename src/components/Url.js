import React, { useState } from "react";

function Url() {
  const [longUrl, setLongUrl] = useState("");

  const [data, setData] = useState({});

  const handleShorten = async (e) => {
    e.preventDefault();
    await fetch("/api/url/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        longUrl,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="container">
      <form onSubmit={handleShorten} className="container-fluid">
        <div className="row">
          <div className="col-6">
            <input
              className="form-control"
              type="text"
              value={longUrl}
              name="url"
              onChange={(e) => setLongUrl(e.target.value)}
            />
          </div>
          <div className="col-6">
            <button type="submit" className="btn btn-warning">
              shorten
            </button>
          </div>
        </div>
      </form>
      <section className="row">
        <table className="table hovered, stripe border">
          <thead>
            <tr>
              <th>CODE</th>
              <th>SHORT URL</th>
              <th>LONG URL</th>
            </tr>
          </thead>
          {data && (
            <tr>
              <td>{data.urlCode}</td>
              <td>{data.shortUrl}</td>
            </tr>
          )}
        </table>
      </section>
    </main>
  );
}

export default Url;
