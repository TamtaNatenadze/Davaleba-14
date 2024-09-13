function getFeedback(score, name) {
  if (score < 51) {
    const extraScore = 51 - score;
    console.log("სამწუხაროდ გვანცა, თქვენ ვერ გადალახეთ მინიმალური ბარიერი, თქვენ დაგაკლდათ 21 ქულა, უკეთესად მოემზადეთ.");
  }
  else if (score >= 51 && score < 90) {
    console.log("გილოცავთ გვანცა, თქვენ 19 ქულით მეტი აიღეთ ბარიერზე.");
  }
  else if (score > 90) {
    console.log("გილოცავთ გვანცა, ძალიან კარგი შედეგი გაქვთ.");
  }
}
getFeedback(30, "გვანცა");


