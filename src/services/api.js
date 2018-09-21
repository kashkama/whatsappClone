const mockMessages = [
    {
        incoming: true,
        message: "Hi Owen"
    },
    {
        outgoing: true,
        message: "Hi, Purity"
    },
    {
        incoming: true,
        message: "When we will learn real data fetching?"
    },
    {
        outgoing: true,
        message: "First we need to learn debugging and testing, then we will learn styling and animations and then we will learn real data fetching. Let's use this mock data for now ok?"
    }
];

export const getMockData = () => (
    new Promise(resolve => setTimeout(() => resolve(mockMessages), 1000))
)