import './portfolioList.css';

export default function PortfolioList({ id, title, active, setSelected }) {
    return (
        <li
            className={active ? "PortfolioList active" : "PortfolioList"}
            onClick={() => setSelected(id)}
        >
            {title}
        </li>
    )
}
