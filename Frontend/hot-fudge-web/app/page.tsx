import '../app/test.css';
import Image from "next/image";

export default function Home() {
  return (
    <div className="center">
    <div>
      
        <Image
          src="/hfLogo25.png"
          alt="hot fudge logo"
          width={500}
          height={200}
          priority
        />
    <div className="test">
      <h1>home</h1>
      <h1>music</h1>
      <h1>SPEAK LESS SAY MORE</h1>
      <h1>contact</h1>


    </div>

    </div>
   </div>

  );
}
