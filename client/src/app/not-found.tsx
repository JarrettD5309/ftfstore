import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2 className="margin-top-1rem">Not Found</h2>
      <p className="text-center margin-top-1rem"><Link href="/">{`FTF HOME PAGE`}</Link></p>
    </div>
  )
}