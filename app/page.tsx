import Link from "next/link";
export default function Home() {
  return (
    <section>
      <h1>All Quizes</h1>
      <ul>
        <li>
          <Link href="/quiz/1"> quiz 1</Link>
        </li>
        <li>
          <Link href="/quiz/2">quiz 2</Link>
        </li>
        <li>
          <Link href="/quiz/3"> quiz 3</Link>
        </li>
      </ul>
    </section>
  );
}
