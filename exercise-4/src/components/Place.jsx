export default function Place(place) {
  return (
    <li key={place.id} className="place-item">
      <button>
        <img src={place.place.image.src} alt={place.place.alt} />
        <h3>{place.place.title}</h3>
      </button>
    </li>
  );
}
