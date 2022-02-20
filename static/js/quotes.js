const quotes = [
    {quote: "Done is better than perfect.",
    author: "Mark Zuckerberg"
    },
    {quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
    },
    {quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
    },
    {quote: "Excellence is not a skill, it's an attitude.",
    author: "Ralph Marston"
    },
    {quote: "People may hear your words, but they feel your attitude.",
    author: "John C. Maxwell"
    },
    {quote: "When something is important enough, you do it even if the odds are not in your favor.",
    author: "Elon Musk"
    },
    {quote: "Never complain and never explain.",
    author: "Benjamin Disraeli"
    },
    {quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
    },
    {quote: "I did my best, and God did the rest.",
    author: "Hattie McDaniel"
    },
    {quote: "Every moment is an experience.",
    author: "Jake Roberts"
    },
    {quote: "Experience is the teacher of all things.",
    author: "Julius Caesar"
    },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;