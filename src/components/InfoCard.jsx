function InfoCard({ planet }) {
  return (
    <div className="card-container">
      <div className="card">
        <h2>{planet.title}</h2>
        <p>{planet.description}</p>
      </div>
    </div>
  );
}
export default InfoCard;
