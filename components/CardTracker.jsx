import Button from "./Button";

export default function CardTracker ({ runningCount, setRunningCount }) {

  const handleClick = (cardValue) => {
    console.log("handle click")
    setRunningCount(runningCount += cardValue)
  }

  return (
    <div>
      <h3 className="mx-auto pb-5 font-thin">
        Click the button for each corresponding card played.
      </h3>
      <div className="flex justify-around mx-auto">
        <Button
          handleClick={handleClick}
          cardVal={-1}
        >
          2 - 6
        </Button>
        <Button
          handleClick={handleClick}
          cardVal={0}
        >
          7 - 9
        </Button>
        <Button
          handleClick={handleClick}
          cardVal={+1}
        >
          10 - A
        </Button>
      </div>
    </div>
  )
}