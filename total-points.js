// 8 Kyu - felt more like 7 Kyu

// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.


const points = (games) => {
    let total = 0;
      for (const score in games) {
        let ourTeamScore = games[score].slice(0, 1);
        let otherTeamScore = games[score].slice(2)
        ourTeamScore > otherTeamScore ? total += 3 : 0;
        ourTeamScore === otherTeamScore ? total += 1 : null;
      }
    return total;
  }

// points(["3:2", "2:2", "0:1"])  