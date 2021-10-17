import "./Quotes.css";

const Quote = () => {
  const quotesCollection = [
    {
      id: 1,
      quote:
        "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
      author: "Andre Gide",
    },
    {
      id: 2,
      quote: "Life is either a daring adventure, or nothing at all",
      author: "Helen Keller",
    },
    {
      id: 3,
      quote:
        "Don’t tell me how educated you are, tell me how much you have travelled.",
      author: "Anonymous",
    },
    {
      id: 4,
      quote: "Travel is fatal to prejudice, bigotry, and narrow-mindedness.",
      author: "Mark Twain",
    },
    {
      id: 5,
      quote:
        "Surely, of all the wonders of the world, the horizon is the greatest.",
      author: "Freya Stark",
    },
    {
      id: 6,
      quote:
        "There are no foreign lands. It is the traveler only who is foreign.",
      author: "Robert Louis Stevenson",
    },
    {
      id: 7,
      quote:
        "The world is a book, and those who do not travel read only one page.",
      author: "Saint Augustine",
    },
    {
      id: 8,
      quote: "Travel and change of place impart new vigor to the mind.",
      author: "Seneca",
    },
    {
      id: 9,
      quote: "I haven’t been everywhere, but it’s on my list.",
      author: "Susan Sontag",
    },
    {
      id: 10,
      quote: "Wherever you go becomes a part of you somehow.",
      author: "Anita Desai",
    },
    {
      id: 11,
      quote: "If you think adventure is dangerous, try routine. It’s lethal.",
      author: "Paulo Coelho",
    },
    {
      id: 12,
      quote:
        "A ship in harbor is safe, but that is not what ships are built for.",
      author: "John A. Shedd",
    },
    {
      id: 13,
      quote:
        "Traveling – it leaves you speechless, then turns you into a storyteller.",
      author: "Ibn Battuta",
    },
    {
      id: 14,
      quote: "Live life with no excuses, travel with no regret",
      author: "Oscar Wilde",
    },
    {
      id: 15,
      quote: "Not all those who wander are lost.",
      author: "J.R.R. Tolkien",
    },
    {
      id: 16,
      quote: "Drink Heavily with locals whenever possible.",
      author: "Anthony Bourdain",
    },
    {
      id: 17,
      quote: "Great things never came from comfort zones.",
      author: "Anonymous",
    },
    {
      id: 18,
      quote: "Travel is never a matter of money but of courage.",
      author: "Paulo Coelho",
    },
  ];

  let quoteText = "";
  let quoteAuthor = "";

  const getRandomQuote = () => {
    const i = Math.floor(Math.random() * 18);
    quoteText = quotesCollection[i].quote;
    quoteAuthor = quotesCollection[i].author;
  };

  getRandomQuote();

  return (
    <div id="quote">
      <div id="text">"{quoteText}"</div>
      <div id="author">- {quoteAuthor}</div>
    </div>
  );
};

export default Quote;
