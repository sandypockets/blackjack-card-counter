import {useEffect, useState} from "react";
import Nav from "../components/Nav";
import CardTracker from "../components/CardTracker";
import DisplayCount from "../components/DisplayCount";
import DeckQuantity from "../components/DeckQuantity";

export default function Home() {
  const [numOfDecks, setNumOfDecks] = useState(1)
  const [runningCount, setRunningCount] = useState(0)
  const [trueCount, setTrueCount] = useState(0)

  useEffect(() => {
    if (numOfDecks > 0) {
      setTrueCount(runningCount / numOfDecks)
    }
  })

  return (
    <main>
      <Nav />
      <section className="pt-24">
        <DeckQuantity numOfDecks={numOfDecks} setNumOfDecks={setNumOfDecks} />
        <CardTracker runningCount={runningCount} setRunningCount={setRunningCount} />
        <DisplayCount runningCount={runningCount} trueCount={trueCount} />
      </section>
    </main>
  )
}
