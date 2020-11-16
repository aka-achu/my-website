import { useRouter } from "next/router"

function LeftPane() {
  const router = useRouter()
  return (
    <>
      <div className="text-3xl">-Hello</div>
      <div className="text-5xl font-bold">I'm Achyuta Das</div>
      <div className="text-red-500 text-right">(aka achu)</div>
      <button
        className="bg-red-500 font-bold py-2 px-4 mt-16"
        onClick={() => router.push("/about")}
      >
        Let's start
      </button>
    </>
  )
}

function RightPane() {
  return (
    <>
      <img
        src="/images/user.jpg"
        alt="user image"
        className="rounded-full w-3/5 h-3/5"
      />
    </>
  )
}

export default function Home() {
  return (
    <div className="flex items-center justify-between h-full px-8">
      <div className="h-full text-white">
        <LeftPane />
      </div>
      <div className="h-full text-white flex justify-center">
        <RightPane />
      </div>
    </div>
  )
}
