interface Text {
  content: string;
  className: string;
}

export default function Text({ content = "Dummy text", className = "" }: Text) {
  return <p className={`annie-text ${className}`}>{content}</p>;
}
