
const Journey = ({ journey }) => {
  return (
    <div className="bg-light border-2 border-gray-400 p-10 flex justify-center col-span-6 sm:col-span-4 md:col-span-3">
      x
    </div>
  )
}

const Journeys = () => (
  <div className="bg-pink h-full overflow-auto">
    <div className="container mx-auto p-5 pt-1">
      <p className="mb-5">Share your creative journeys with #DirectionsToNowhere on your favorite (social) media channels for a chance to be featured here.</p>
      <div className="grid gap-2 grid-cols-12 my-4">
        <Journey />
        <Journey />
        <Journey />
        <Journey />
      </div>
    </div>
  </div>
)

export default Journeys