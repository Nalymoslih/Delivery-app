import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "سوشی",
    description: "باشترین ماسی و سەوزە",
    price: 22.99,
  },
  {
    id: "m2",
    name: "دۆڵمە",
    description: "خواردنی کوردەواری",
    price: 1,
  },
  {
    id: "m3",
    name: "پیزا",
    description: "پیزای ئیتاڵی",
    price: 12.99,
  },
  {
    id: "m4",
    name: "بریانی",
    description: "بە برنجی کوردی و گۆشتی سوور",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
