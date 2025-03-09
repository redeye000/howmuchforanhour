export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
          <h1 className="text-4xl font-bold">Welcome to How Much for an Hour</h1>
          <p className="mt-4 text-lg text-gray-600">
              A tool to find out how much it costs to hire professionals and rent equipment.
          </p>
          <p className="mt-2 text-lg text-gray-600">
              Start by typing a profession or equipment name to see the hourly rates.
          </p>
      </div>
  );
}
