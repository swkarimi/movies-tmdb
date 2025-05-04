"use client"

export default function Error({ error }: { error: Error }) {
  console.log(error)
  return (
    <div className="text-red-500 p-4">
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
    </div>
  )
}
