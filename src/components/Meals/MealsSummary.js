import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>خواردنێکی بە تام، دەگەیەنین بۆ تۆ</h2>
      <p>
        لە هەڵبژاردنی بەرفراوانی ژەمە بەردەستەکانماندا ژەمە دڵخوازەکەت هەڵبژێرە
        و چێژ لە نانخواردنێکی نیوەڕۆ یان ئێوارە بە تام وەربگرە لە ماڵەوە.
      </p>
      <p>
        هەموو ژەمەکانمان بە پێکهاتەی کوالیتی بەرز ئامادە دەکرێن، لە کاتی
        خۆیدا و بێگومان لەلایەن چێشتلێنەرانی بە ئەزموونەوە
      </p>
    </section>
  );
};

export default MealsSummary;
