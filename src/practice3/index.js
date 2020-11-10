export const getPoetry = async () => {
    try{
        const response = await fetch("https://v1.jinrishici.com/all.json");
        const { origin, author, content } = await response.json();
        // eslint-disable-next-line prettier/prettier
        return [ origin, author, content ];
    } catch(error) {
        console.log(error);
    }
};
