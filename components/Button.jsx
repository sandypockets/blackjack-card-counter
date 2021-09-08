export default function Button({ children, handleClick, cardVal }) {
  return (
    <button
      type="button"
      className="min-w-max mx-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
      onClick={() => handleClick(cardVal)}
    >
      {children}
    </button>
  )
}