import { add } from "@autospace/sample-lib";

export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">Hello {add(123, 456)}</h1>
  );
}
