export default function DisplayCount({ runningCount, trueCount }) {
  return (
    <div className="flex justify-center pt-10">
      <div>
      <p>The running count is: {runningCount}</p>
      <p>The true count is: {trueCount}</p>
      </div>
    </div>
  )
}