import Home from '../views/Home/Home.vue'
import HomeQualitySelect from '../views/Home/qualityselect/qualityselect.vue';
import HomeNewGame from '../views/Home/newgame/newgame.vue';
import HomeCategory from '../views/Home/category/category.vue';

export default {
  path: '/home',
  component: Home,
  name: 'Home',
  redirect: {name: 'HomeQualitySelect'},
  children: [
    {
      path: 'qualityselect',
      name: 'HomeQualitySelect',
      component: HomeQualitySelect
    }, {
      path: 'newgame',
      name: 'HomeNewGame',
      component: HomeNewGame
    }, {
      path: 'category',
      name: 'HomeCategory',
      component: HomeCategory
    }
  ]
}