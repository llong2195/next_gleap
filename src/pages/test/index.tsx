import { useCrisp } from "../../use-gleap";

export default function TestPage() {
  const { openChat } = useCrisp();
  return <div onClick={openChat}>Test Page</div>;
}
