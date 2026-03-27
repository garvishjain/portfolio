import { useEffect, useState } from "react";

function HeroText() {
  const roles = ["I am a Node.js Developer", "I am a React JS Developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // change every 2 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="mt-4 text-lg transition-all duration-500">
      {roles[index]}
    </p>
  );
}

export default HeroText;