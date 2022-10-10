import styles from '../styles/Card.module.scss'
interface CardProps {
    title: string;
    description: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ title, description, link }) => (
    <a
        href={link}
        className={styles.card}
    >
        <h2>{title}</h2>
        <p>
            {description}
        </p>
    </a>
);

export default Card;
