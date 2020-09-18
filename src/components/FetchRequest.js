export const getUser = async (url, token) => {
  try {
    let config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    return await fetch(url, config);
  } catch (error) {
    console.log(error);
  }
};


export const getProducts = async (url,token) => {
  try {
      let config = {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      };
      return await fetch(url,config)
  } catch (error) {
    console.log(error);
  }
};

export const PostApiAddUserPoints = async (url, data, token) => {
  try {
    let config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept:"application/json",
        Authorization: `Bearer ${token}`,
      },
      body: data,
    };
    return await fetch(url, config);
  } catch (error) {
    console.log(error)
  }
};

export const PostApiReddemPoints = async (url, data, token) => {
  try {
    let config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: data,
    };
    return await fetch(url, config);
  } catch (error) {
    console.log(error);
  }
};

