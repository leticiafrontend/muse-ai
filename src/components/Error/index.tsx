export const Error = () => {
  const handleReload = () => {
    window.location.reload()
  }

  return (
    <div className="flex h-full min-h-screen flex-col items-center justify-center gap-4 bg-black">
      <h1 className="text-3xl font-semibold text-white">Error</h1>
      <p className="text-white">Try again</p>
      <button
        className="mt-8 rounded-lg bg-white px-4 py-2"
        onClick={handleReload}
      >
        Reload
      </button>
    </div>
  )
}
