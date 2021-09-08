import Button from "./Button";

export default function DeckQuantity({ numOfDecks, setNumOfDecks }) {
  const addRemoveDecks = (val) => {
    if (numOfDecks + val > 0) {
      setNumOfDecks(numOfDecks += val)
    }
  }

  return (
    <div className="flex justify-center pb-6 font-thin">
      <div className="pb-1 flex">
        <h2 className="pt-2 mx-3">
          Decks: <strong>{numOfDecks}</strong>
        </h2>
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