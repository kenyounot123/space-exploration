function InfoCard({ planet }) {
  return (
    <div className="card-container">
      <div className="card">
        <h2>{planet.name}</h2>
        <p>{planet.description}</p>
      </div>
    </div>
  );
}
export default InfoCard;
