import start from "../assets/icons/star.svg";
import halfStar from "../assets/icons/half-star.svg";

interface IRating {
  rating: number;
}
export default function Rating({ rating }: IRating) {
  let stars = [];

  const Star = () => {
    return <img src={start} alt="Star" />;
  };

  for (let i = 0; i < rating; i++) {
    stars.push(<Star />);
  }

  return (
    <div className="annie-rating">
      <span>{rating}</span>
      {stars.map((star) => {
        return star;
      })}
    </div>
  );
}
