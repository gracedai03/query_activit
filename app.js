let teams = [
  {
    teamName: "Real Madrid",
    city: "Madrid",
    country: "Spain",
    topScorers: ["Ronaldo", "Benzema", "Hazard"],
    worldwideFansMillions: 798,
  },
  {
    teamName: "Barcelona",
    city: "Barcelona",
    country: "Spain",
    topScorers: ["Messi", "Suarez", "Puyol"],
    worldwideFansMillions: 738,
  },
  {
    teamName: "Manchester United",
    city: "Manchester",
    country: "England",
    topScorers: ["Cantona", "Rooney", "Ronaldo"],
    worldwideFansMillions: 755,
  },
  {
    teamName: "Manchester City",
    city: "Manchester",
    country: "England",
    topScorers: ["Sterling", "Aguero", "Haaland"],
    worldwideFansMillions: 537,
  },
  {
    teamName: "Brazil National Team",
    city: "Not applicable",
    country: "Brazil",
    topScorers: ["Ronaldinho", "Cafu", "Bebeto"],
    worldwideFansMillions: 950,
  },
  {
    teamName: "Argentina National Team",
    city: "Not applicable",
    country: "Argentina",
    topScorers: ["Messi", "Batistuta", "Maradona"],
    worldwideFansMillions: 888,
  },
  {
    teamName: "Atletico Madrid",
    city: "Madrid",
    country: "Spain",
    topScorers: ["Aragonés", "Griezmann", "Torez"],
    worldwideFansMillions: 40,
  },
];

let t1 = {
  teamName: "Real Madrid",
  city: "Madrid",
  country: "Spain",
  topScorers: ["Ronaldo", "Benzema", "Hazard"],
  worldwideFansMillions: 798,
};

// Add each team to the Firestore collection
// teams.forEach((team) => {
//   db.collection("teams").add(team);
// });

//all teams in spain
db.collection("teams")
  .where("country", "==", "Spain")
  .get()
  .then((data) => {
    let docs = data.docs;
    let output = document.getElementById("results");

    if (docs.length === 0) {
      output.innerHTML = "<p>No results.</p>";
      return;
    }

    let html = "";
    docs.forEach((doc) => {
      let team = doc.data();
      html += `
        <div>
          ${team.teamName}<br>
        </div>
      `;
    });
    output.innerHTML = html;
  });

//in spain, madrid
db.collection("teams")
  .where("country", "==", "Spain")
  .where("city", "==", "Madrid")
  .get()
  .then((data) => {
    let docs = data.docs;
    let output = document.getElementById("results2");

    if (docs.length === 0) {
      output.innerHTML = "<p>No results.</p>";
      return;
    }

    let html = "";
    docs.forEach((doc) => {
      let team = doc.data();
      html += `
        <div>
          ${team.teamName}<br>
        </div>
      `;
    });
    output.innerHTML = html;
  });

//national teams
db.collection("teams")
  .where("city", "==", "Not applicable")
  .get()
  .then((data) => {
    let docs = data.docs;
    let output = document.getElementById("results3");

    if (docs.length === 0) {
      output.innerHTML = "<p>No results.</p>";
      return;
    }

    let html = "";
    docs.forEach((doc) => {
      let team = doc.data();
      html += `
        <div>
          ${team.teamName}<br>
        </div>
      `;
    });
    output.innerHTML = html;
  });
//not in spain
db.collection("teams")
  .where("country", "not-in", ["Spain"])
  .get()
  .then((data) => {
    let docs = data.docs;
    let output = document.getElementById("results4");

    if (docs.length === 0) {
      output.innerHTML = "<p>No results.</p>";
      return;
    }

    let html = "";
    docs.forEach((doc) => {
      let team = doc.data();
      html += `
        <div>
          ${team.teamName}<br>
        </div>
      `;
    });
    output.innerHTML = html;
  });
//not in spain/england
db.collection("teams")
  .where("country", "not-in", ["Spain", "England"])
  .get()
  .then((data) => {
    let docs = data.docs;
    let output = document.getElementById("results5");

    if (docs.length === 0) {
      output.innerHTML = "<p>No results.</p>";
      return;
    }

    let html = "";
    docs.forEach((doc) => {
      let team = doc.data();
      html += `
        <div>
          ${team.teamName}<br>
        </div>
      `;
    });
    output.innerHTML = html;
  });

//>700m fans
db.collection("teams")
  .where("worldwideFansMillions", ">", 700)
  .get()
  .then((data) => {
    let docs = data.docs;
    let output = document.getElementById("results6");

    if (docs.length === 0) {
      output.innerHTML = "<p>No results.</p>";
      return;
    }

    let html = "";
    docs.forEach((doc) => {
      let team = doc.data();
      html += `
        <div>
          ${team.teamName}: ${team.worldwideFansMillions}M<br>

        </div>
      `;
    });
    output.innerHTML = html;
  });

//500-600 fans
db.collection("teams")
  .where("worldwideFansMillions", ">=", 500)
  .where("worldwideFansMillions", "<=", 600)
  .get()
  .then((data) => {
    let docs = data.docs;
    let output = document.getElementById("results7");

    if (docs.length === 0) {
      output.innerHTML = "<p>No results.</p>";
      return;
    }

    let html = "";
    docs.forEach((doc) => {
      let team = doc.data();
      html += `
        <div>
          ${team.teamName}: ${team.worldwideFansMillions}M<br>


        </div>
      `;
    });
    output.innerHTML = html;
  });

//ronalda
db.collection("teams")
  .where("topScorers", "array-contains", "Ronaldo")
  .get()
  .then((data) => {
    let docs = data.docs;
    let output = document.getElementById("results8");

    if (docs.length === 0) {
      output.innerHTML = "<p>No results.</p>";
      return;
    }

    let html = "";
    docs.forEach((doc) => {
      let team = doc.data();
      html += `
      <div>
        ${team.teamName}: Top scorers are ${team.topScorers.join(", ")}<br>
      </div>
    `;
    });
    output.innerHTML = html;
  });

//ronalda
db.collection("teams")
  .where("topScorers", "array-contains", "Ronaldo")
  .get()
  .then((data) => {
    let docs = data.docs;
    let output = document.getElementById("results8");

    if (docs.length === 0) {
      output.innerHTML = "<p>No results.</p>";
      return;
    }

    let html = "";
    docs.forEach((doc) => {
      let team = doc.data();
      html += `
    <div>
      ${team.teamName}: Top scorers are ${team.topScorers.join(", ")}<br>
    </div>
  `;
    });
    output.innerHTML = html;
  });

//ronalda, messi, maradona
db.collection("teams")
  .where("topScorers", "array-contains-any", ["Ronaldo", "Maradona", "Messi"])
  .get()
  .then((data) => {
    let docs = data.docs;
    let output = document.getElementById("results9");

    if (docs.length === 0) {
      output.innerHTML = "<p>No results.</p>";
      return;
    }

    let html = "";
    docs.forEach((doc) => {
      let team = doc.data();
      html += `
      <div>
        ${team.teamName}: Top scorers are ${team.topScorers.join(", ")}<br>
      </div>
    `;
    });
    output.innerHTML = html;
  });
