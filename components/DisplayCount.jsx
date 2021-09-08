export default function DisplayCount({ runningCount, trueCount }) {
  return (
    <div className="flex justify-center pt-10">
      <div className="text-xl flex">
        <p className="mx-2 font-thin">Running Count: <strong>{runningCount}</strong></p>
        <p className="mx-2 font-thin">True Count: <strong>{Math.round(trueCount)}</strong></p>
      </div>
    </div>
  )
}