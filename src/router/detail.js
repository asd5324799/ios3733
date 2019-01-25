import Detail from '../views/Detail/Detai.vue';
import DetailIndex from '../views/Detail/detail-index/detail-index.vue';
import DetailComments from '../views/Detail/detail-comments/detail-comments.vue';
import DetailGift from '../views/Detail/detail-index/detail-index.vue';

export default {
  path: '/detail',
  component: Detail,
  name: 'Detail',
  redirect: {name: 'DetailIndex'},
  children: [
    {
      path: 'index',
      name: 'DetailIndex',
      component: DetailIndex
    }, {
      path: 'comments',
      name: 'DetailComments',
      component: DetailComments
    }, {
      path: 'gift',
      name: 'DetailGift',
      component: DetailGift
    }
  ]
}