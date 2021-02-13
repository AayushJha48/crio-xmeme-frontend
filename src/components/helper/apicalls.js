export const getMemes = () => {
  return fetch('https://crio-xmeme-server.herokuapp.com/memes')
      .then((response) => response.json())
      .catch((err) => console.log(err));
};

export const postMeme = (meme) => {
  return fetch(`https://crio-xmeme-server.herokuapp.com/memes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/plain, */*",
    },
    body: JSON.stringify(meme),
  });
};

export const updateMeme = ({ id, caption, url }) => {

  return fetch(`https://crio-xmeme-server.herokuapp.com/memes/${id}`, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json',
          Accept: "application/json, text/plain, */*",
      },
      body: JSON.stringify({caption, url})
  })
};
