export const getPoetry = () => {
  return fetch("https://v1.jinrishici.com/all.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { origin, author, content } = data;
      return [origin, author, content];
    })
    .catch((err) => {
      console.log(err);
    });
};
