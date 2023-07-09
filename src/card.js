import styles from "./card.module.css";

function Card() {
  const el = `
    <div class=${styles.card}>Card</div>
  `;

  document.write(el);
}

export default Card;
