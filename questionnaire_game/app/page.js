import Image from "next/image";
import Link from "next/link";
import "./page.css";

export default function Home() {

  return (
    <main >
      <div className="main">
        <div className="startBox">
          <div className="text caption">Анкета-игра</div>
          <div className="text title">Выживание</div>
          <div className="text description">Раскрой свой путь истории нам, чтобы на закате обрести характеристику героя</div>
          <Link href="/survey" className="btn first">Начать</Link>
        </div>
      </div>
    </main>
  );
}
