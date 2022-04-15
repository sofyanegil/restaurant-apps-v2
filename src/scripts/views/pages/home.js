import RestaurantSource from '../../data/RestaurantSource';
import {
  CreateMealItemTemplate, CreateRestoItemTemplate, loader, failedLoad,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <hero-section></hero-section>
      <div class="load"></div>
      <restaurant-section id="resto__list" ></restaurant-section>
      <food-section class="food__container"></food-section>
    `;
  },

  async afterRender() {
    const load = document.querySelector('.load');
    try {
      load.innerHTML = loader();
      const response = await RestaurantSource.getAllRestaurants();
      const meals = await RestaurantSource.getListFood();

      const { restaurants } = response;
      const restoContainer = document.querySelector('.restaurant__list');

      restaurants.forEach((resto) => {
        restoContainer.innerHTML += CreateRestoItemTemplate(resto);
      });

      const mealContainer = document.querySelector('.food__list');
      meals.slice(-8).forEach((meal) => {
        mealContainer.innerHTML += CreateMealItemTemplate(meal);
      });
      load.style.display = 'none';
    } catch (error) {
      load.innerHTML = failedLoad();
    }
  },
};

export default Home;
