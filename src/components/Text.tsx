interface Text {
  content: string;
}

export default function Text({ content = "Dummy text" }: Text) {
  return <p className="annie-text">{content}</p>;
}
