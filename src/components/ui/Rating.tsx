import Star from "components/icons/Star/Star";
import WhiteStar from "../icons/Star/WhiteStar";

interface IRating {
  rating: number;
  color?: "initial" | "white"
}
export default function Rating({ rating, color }: IRating) {
  let stars = [];

  for (let i = 0; i < rating; i++) {
    if (color === "white")
      stars.push(<WhiteStar />);
    else
      stars.push(<Star />);
  }

  return (
    <div className="annie-rating">
      <span>{rating.toFixed(1)}</span>
      {stars.map((star) => {
        return star;
      })}
    </div>
  );
}
