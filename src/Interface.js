export default function Interface({handleClick}) {
  return (
    <div className="interface">
      <p className="tooltip">
        For toggle box click on box cover or this button 
      </p>
      <button className="btn" onClick={() => handleClick()}>Toggle box cover</button>
    </div>
  );
}
