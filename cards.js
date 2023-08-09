document.addEventListener("DOMContentLoaded", () => {
    const reviewContainer = document.getElementById("reviewContainer");
    const review2 = document.getElementById("review2");
      const generateNewReview = () => {
      reviewContainer.innerHTML = "";
  
      reviewData.forEach((review) => {
        const card = document.createElement("div");
        card.classList.add("card");
        const name1 = document.createElement("p");
        name1.textContent = `Name: ${review.name}`;
        const date1 = document.createElement("p");
        date1.textContent = `Date: ${new Date(review.date).toDateString()}`;
        const stars = "★ ".repeat(review.rating) + "☆ ".repeat(5 - review.rating);
        const rating1 = document.createElement("p");
        rating1.textContent = `Rating: ${stars}`;
        const reviewText = document.createElement("p");
        reviewText.textContent = `Review: ${review.review}`;
  
        card.appendChild(name1);
        card.appendChild(date1);
        card.appendChild(rating1);
        card.appendChild(reviewText);
  
        reviewContainer.appendChild(card);
      });
    };
  
    generateNewReview();
      const add = (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const date = document.getElementById("date").value;
      const rating = parseInt(document.getElementById("rating").value);
      const comment = document.getElementById("reviewText").value;
  
      const new1 = {
        name: name,
        date: date,
        rating: rating,
        review: comment,
      };
      reviewData.push(new1);
      generateNewReview();
      review2.reset();
    };
  
    newForm.addEventListener("submit", add);
  });
  