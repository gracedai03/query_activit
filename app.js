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
    let mydocs = data.docs;
    // mydocs.forEach((d) => {
    //   console.log(d.data());
    // });
  });

//in spain, madrid
db.collection("teams")
  .where("country", "==", "Spain")
  .where("city", "==", "Madrid")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    // mydocs.forEach((d) => {
    //   console.log(d.data());
    // });
  });

//national teams
db.collection("teams")
  .where("city", "==", "Not applicable")
  .get()
  .then((data) => {
    let mydocs = data.docs;
    // mydocs.forEach((d) => {
    //   console.log(d.data());
    // });
  });
//not in spain
db.collection("teams")
  .where("country", "not-in", ["Spain"])
  .get()
  .then((data) => {
    let mydocs = data.docs;
    // mydocs.forEach((d) => {
    //   console.log(d.data());
    // });
  });
//not in spain/england
db.collection("teams")
  .where("country", "not-in", ["Spain", "England"])
  .get()
  .then((data) => {
    let mydocs = data.docs;
    mydocs.forEach((d) => {
      console.log(d.data());
    });
  });
