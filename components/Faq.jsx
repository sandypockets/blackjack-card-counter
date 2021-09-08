const faqs = [
  {
    id: 1,
    question: "What is this?",
    answer:
      "Blackjack Card Counter is a tool for counting cards in Blackjack. Keeping track of the cards can help you determine if the next card played is likely to be a high or low card.",
  },
  {
    id: 2,
    question: "How do I use the Blackjack card counter?",
    answer:
      <ol>
        <li>
          <strong>1.</strong> Enter the number of decks that you'll be playing with. Aside from games with a single deck, 6 decks is most common.
        </li>
        <li className="py-6">
          <strong>2.</strong> Click the card selection button for each card that is played (your card, the dealer's card, or an opponents card)
        </li>
        <li>
          <strong>3.</strong> With each button click, the running count and true count will be updated. The true count will only differ from the running count if you are playing with more than one deck.
        </li>
        <li className="pt-6">
          <strong>4.</strong> Use the true count to help influence your decisions.
        </li>
      </ol>
  },
  {
    id: 3,
    question: "What do I do with the running count?",
    answer:
      <div>
        <p>The running count keeps track of which cards have been played. A low running count means the deck has more low cards remaining. A high running count means the deck has more high cards remaining.</p>
        <p className="pt-6">However, if you are playing with multiple decks, then you should refer to the true count instead.</p>
      </div>
  },
  {
    id: 4,
    question: "Why isn't the true count changing?",
    answer:
      "The true count is an additional counter that takes the number of decks into consideration. If you are only using 1 deck, then the true count will stay the same as the running count.",
  },
  {
    id: 5,
    question: "Why doesn't the count change when I click the 7-9 button?",
    answer:
      "Cards between 7 and 9 do not impact the count, so nothing happens when you click that button. You can skip clicking it when using the counter if you prefer.",
  },
  {
    id: 6,
    question: "How to I choose which suit the card is?",
    answer:
      "Since suits don't matter in Blackjack, they don't need to be taken into consideration when counting cards.",
  },
]

export default function Faq() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white">Questions and answers</h2>
        <div className="mt-8">
          <dl className="divide-y divide-gray-200">
            {faqs.map((faq) => (
              <div key={faq.id} className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                <dt className="text-base font-medium text-white md:col-span-5">{faq.question}</dt>
                <dd className="mt-2 md:mt-0 md:col-span-7">
                  <p className="text-base text-white font-thin">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
