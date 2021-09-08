import {useEffect, useState} from "react";
import Nav from "../components/Nav";
import CardTracker from "../components/CardTracker";
import DisplayCount from "../components/DisplayCount";
import DeckQuantity from "../components/DeckQuantity";
import Faq from "../components/Faq";

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
    <main className="bg-black text-white h-screen">
      <Nav />
      <section className="pt-24 flex justify-center">
        <div className="bg-gray-900 py-5 px-20 mx-4 rounded-xl">
          <DeckQuantity numOfDecks={numOfDecks} setNumOfDecks={setNumOfDecks} />
          <CardTracker runningCount={runningCount} setRunningCount={setRunningCount} />
          <DisplayCount runningCount={runningCount} trueCount={trueCount} />
        </div>
      </section>
      <section className="mt-24">
        <Faq />
      </section>
    </main>
  )
}
