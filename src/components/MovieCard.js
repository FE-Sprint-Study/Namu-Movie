import "../styles/color.css";
import "../styles/font.css";

export default function MovieCard() {
  return (
    <div style={{ backgroundColor: "var(--main-color)" }}>
      안녕 나는 시그니처색이야
      <div
        style={{
          backgroundColor: "var(--black)",
          color: "var(--white)",
        }}>
        안녕 나는 검은색이야 물론 글씨는 하얀색이지
      </div>
    </div>
  );
}
