const API_KEY = "8ZrKLjDVqCgbAL4uh736OZev15c-MIMuJ8kCDm1NfUDJ8vAItJwY2cWTamsslYXuFZG_SWm_O2GB8h-9asfrLQUtyBafmHe7fZmz0GP29dGa6sCK1B_tSfzy7qCAXXYx"
const API_URL = "http://18.191.206.20:3000";


function callApi(endpoint, arg1) {
  const arg = arg1 ? arg1 : '';
  const response = fetch(`${API_URL}/${endpoint}/${arg}`, {
    method: "GET",
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': `Bearer ${API_KEY}`,
    },
  })
  return response;
}

export function getShops() {
  return callApi("shops");
};

export function getReviews(id) {
  return callApi("reviews", id);
};

export function getTopShopReviews() {
  return callApi("topShopReviews");
};

export function getShopsReviews() {
  let result = [];
  getShops()
  .then(response => response.json())
  .then(data => {
    for (const { id, name } of data) {
      let test = getReviews(id)
      .then(response => response.json())
      .then( function(data) {
        return {
          id,
          name,
          user: data["user"]["name"],
          text: data["text"]
        };
      })
      .catch(err => { console.log(err);
      });
      result.push(test);
    }
    console.log(result);
    return result;
  })
  .catch(err => { console.log(err);
  });

  return result;
};

