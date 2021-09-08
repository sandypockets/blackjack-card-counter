import Button from "./Button";

export default function DeckQuantity({ numOfDecks, setNumOfDecks }) {
  const addRemoveDecks = (val) => {
    if (numOfDecks + val > 0) {
      setNumOfDecks(numOfDecks += val)
    }
  }

  return (
    <div className="flex justify-center pb-6">
      <div className="pb-1">
      Number of decks in play: {numOfDecks}
      <Button
        handleClick={addRemoveDecks}
        cardVal={-1}
      >
        -
      </Button>
      <Button
        handleClick={addRemoveDecks}
        cardVal={+1}
      >
        +
      </Button>
      </div>
    </div>
  )
}