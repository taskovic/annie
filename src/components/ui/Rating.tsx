import Star from "components/icons/Star/Star";

interface IRating {
  rating: number;
}
export default function Rating({ rating }: IRating) {
  let stars = [];

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
