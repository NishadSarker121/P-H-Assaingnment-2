
//Q/N = 1
function matchWinner(teamAGoals, teamBGoals){

     if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number") {
        return "Invalid";
    }

    if(teamAGoals>teamBGoals){
        return "Team A Win"; 
    }
    
    else if(teamAGoals === teamBGoals){
        return "Draw";
    }
        
    else{
         return "Team B Win";
    }
}
console.log(matchWinner("3", 2));

//Q/N : 2
function isElevatorSafe(weights) {
    if (!Array.isArray(weights)) {
        return "Invalid";
    }

    let totalWeight = 0;

    for (let weight of weights) {
        totalWeight += weight;
    }

    return totalWeight <= 400;
}


//Q/N = 3
function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "Invalid";
  }

  if (tokensUsed <= 500) {
    return 0;
  }

  const extraTokens = tokensUsed - 500;
  const cost = Math.floor(extraTokens / 100) * 5;

  return cost;
}

// Q/N: 04

function topRatedRestaurant(restaurants) {
    if (!Array.isArray(restaurants) || restaurants.length === 0) {
        return "Invalid";
    }

    let topRestaurant = restaurants[0];

    for (let restaurant of restaurants) {
        if (restaurant.rating > topRestaurant.rating) {
            topRestaurant = restaurant;
        }
    }

    return topRestaurant.name.toUpperCase();
}

// Q/N: 05

function averageResponseTime(times) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }

    if (times.length === 0) {
        return "Invalid";
    }

    for (let i = 0; i < times.length; i++) {
        if (typeof times[i] !== "number") {
            return "Invalid";
        }
    }

    let total = 0;

    for (let i = 0; i < times.length; i++) {
        total = total + times[i];
    }

    return total / times.length;
}