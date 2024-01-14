import { createSignal } from "solid-js";

export function EmojiCycle() {
  const emojis = [
    "🇩🇰",
    "📦",
    "🎨",
    "👨‍💻",
    "🌍",
    "🏥",
  ];
  const [emoji, setEmoji] = createSignal(Math.floor(Math.random() * emojis.length));

  const cycle = () => {
    setEmoji((current) => (current + 1) % emojis.length);
  };

  return (
    <button onClick={cycle} class="p-2">
      {emojis[emoji()]}
    </button>
  );
}
