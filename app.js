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

// Update Real Madrid
db.collection("teams")
  .where("teamName", "==", "Real Madrid")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      db.collection("teams").doc(doc.id).update({
        teamName: "Real Madrid FC",
        worldwideFansMillions: 811,
      });
    });
  });

//update barcelona
db.collection("teams")
  .where("teamName", "==", "Barcelona")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      db.collection("teams").doc(doc.id).update({
        teamName: "FC Barcelona",
        worldwideFansMillions: 747,
      });
    });
  });

// Real Madrid
db.collection("teams")
  .where("teamName", "==", "Real Madrid FC")
  .get()
  .then((docs) => {
    docs.forEach((doc) => {
      const data = doc.data();
      let scorers = data.topScorers;
      scorers = scorers.filter((name) => name !== "Hazard");
      if (!scorers.includes("Crispo")) {
        scorers.push("Crispo");
      }
      db.collection("teams").doc(doc.id).update({
        topScorers: scorers,
      });
    });
  });

//barcelona
db.collection("teams")
  .where("teamName", "==", "FC Barcelona")
  .get()
  .then((docs) => {
    docs.forEach((doc) => {
      const data = doc.data();
      let scorers = data.topScorers;
      scorers = scorers.filter((name) => name !== "Puyol");
      if (!scorers.includes("Deco")) {
        scorers.push("Deco");
      }
      db.collection("teams").doc(doc.id).update({
        topScorers: scorers,
      });
    });
  });

//jersey colors
let jerseyColors = {
  "Real Madrid FC": {
    home: "White",
    away: "Black",
  },
  "FC Barcelona": {
    home: "Red",
    away: "Gold",
  },
};

// // RealM
// db.collection("teams")
//   .where("teamName", "==", "Real Madrid FC")
//   .get()
//   .then((docs) => {
//     docs.forEach((doc) => {
//       db.collection("teams").doc(doc.id).update({
//         color: jerseyColors["Real Madrid FC"],
//       });
//     });
//   });

// // barca
// db.collection("teams")
//   .where("teamName", "==", "FC Barcelona")
//   .get()
//   .then((docs) => {
//     docs.forEach((doc) => {
//       db.collection("teams").doc(doc.id).update({
//         color: jerseyColors["FC Barcelona"],
//       });
//     });
//   });

// Madrid update
db.collection("teams").doc("xaoC0hZMiWbw7AU9CY1u").update({
  "color.away": "purple",
});

// barca update
db.collection("teams").doc("I82tOqc3yp6zzASMtq7a").update({
  "color.away": "pink",
});
