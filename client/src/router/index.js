import Vue from 'vue'
import VueRouter from 'vue-router'

// 현재, Home, 회원가입, 로그인 라우터 생성했습니다.
import Home from '../views/Home.vue'
import Signup from '@/views/accounts/Signup'
import Login from '@/views/accounts/Login'
import Movie from '@/views/movie/Movie'
import MovieInfo from '@/views/movie/MovieInfo'
import FreeBoard from '@/views/Board/FreeBoard'
import FreeBoardCreate from '@/views/Board/FreeBoardCreate'
import FreeBoardDetail from '@/views/Board/FreeBoardItem'
import FreeBoardUpdate from '@/views/Board/FreeBoardUpdate'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/accounts/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/accounts/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/movies',
    name: 'Movie',
    component: Movie
  },
  {
    // 주소를 동적 라우팅 하기 위해서는 v-bind를 통해 원하는 변수를 표현해준다.
    // 만약 같이 보내고 싶은 데이터가 있다면 props를 true로 해준다.
    // 상세한 사항이 궁금하다면 MovieItem.vue로 가시면 됩니다!
    path: '/movies/:id',
    name: 'MovieInfo',
    component: MovieInfo,
    props:true
  },
  // 자유게시판 목록들을 보여주는 라우터
  {
    path: '/Board/freeboard',
    name: 'FreeBoard',
    component: FreeBoard,
  },
  // 자유게시판 새로운 게시물 생성 라우터
  {
    path: '/Board/freeboard/create',
    name: 'FreeBoardCreate',
    component: FreeBoardCreate,
  },
  // 특정 게시판 상세 정보 라우터
  {
    path: '/Board/freeboard/:id',
    name: 'FreeBoardDetail',
    component: FreeBoardDetail,
    props: true
  },
  // 특정 게시판 수정 라우터
  {
    path: '/Board/freeboard/:id',
    name: 'FreeBoardUpdate',
    component: FreeBoardUpdate,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
