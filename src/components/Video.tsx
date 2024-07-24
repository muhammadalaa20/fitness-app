import Training from "./Training";
const data = async () => {
    const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=100&offset=0';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '710f067bc1msh085af248391776fp1b4e3ejsn24c3838d3853',
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        },
        next: { revalidate: 1000 * 60 * 60 * 12 }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        return JSON.parse(result);
    } catch (error) {
        console.error(error);
    }
}

export default async function Video() {
    const trainingData = await data();
    return (
        <Training data={trainingData} />
    );
}