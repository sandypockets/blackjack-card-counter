import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <meta
        name="theme-color"
        content="#000"
      />
      <title>Blackjack Card Counter</title>
      <meta
        name="description"
        content={`A free online tool for counting cards in Blackjack. Keep track of the number of decks, running count, and true count.`}
      />
    </Head>
  )
}