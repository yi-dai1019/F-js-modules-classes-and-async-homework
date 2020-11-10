export const getPoetry = () => {
  return fetch("https://v1.jinrishici.com/all.json", {
    method: "GET",
  })
    .then((response) => response.json())
    // eslint-disable-next-line prettier/prettier
    .then (({ content, origin, author } ) => [ origin, author, content ])
    .catch((error) => {
      console.log(error);
    });
};
