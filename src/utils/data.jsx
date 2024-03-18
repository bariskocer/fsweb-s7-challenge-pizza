const data = {
  toppingsOptions: [
    "Pepperoni",
    "Domates",
    "Sosis",
    "Mısır",
    "Mantar",
    "Kanada Jambonu",
    "Sucuk",
    "Tavuk İzgara",
    "Jalapeno",
    "Ananas",
    "Kabak",
    "Soğan",
    "Sarımsak",
  ],
  basePrices: {
    small: 85,
    medium: 95,
    large: 105,
  },
  calculatePrice: (values, basePrices, count) => {
    let price = 0;
    switch (values.size) {
      case "small":
        price += basePrices.small;
        break;
      case "medium":
        price += basePrices.medium;
        break;
      case "large":
        price += basePrices.large;
      default:
        break;
    }
    //to do: hamur kalinligına göre fiyat!
    price += values.crust === "thick" ? 10 : 0;

    price += values.toppings.length * 5;
    price *= count;
    return price;
  },
};

export default data;
