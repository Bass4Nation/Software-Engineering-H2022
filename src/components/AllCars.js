const AllCars = () => {
  // Test data
  let cars = [
    {
      id: 1,
      name: "Volvo",
      price: 1000,
      year: 2010,
      img: "https://www.team-bhp.com/forum/attachments/test-drives-initial-ownership-reports/1655582d1499605671t-driven-volvo-v90-cross-country-volvoxc70d517040930.jpg",
    },
    {
      id: 2,
      name: "BMW",
      price: 2000,
      year: 2015,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/2017_BMW_340i_%28F30_LCI%29_Luxury_Line_sedan_%282018-07-30%29_01.jpg/640px-2017_BMW_340i_%28F30_LCI%29_Luxury_Line_sedan_%282018-07-30%29_01.jpg",
    },
  ];

  const rentButton = (car) => {
    // Her kan vi legge inn funksjonalitet for å leie bilen.
    console.log(car);
  };


  return (
    <>
      <h1>Alle biler til utleie</h1>
      <section>
        {cars.map((car) => (
          <section key={car.id}>
            <h3>{car.name}</h3>
            <p>{car.year}</p>
            <p>{car.price} kr i mnd</p>
            <img src={car.img} alt={car.name} />
            <button onClick={() => rentButton(car)}>Lei bil</button>
          </section>
        ))}
      </section>
    </>
  );
};

export default AllCars;
