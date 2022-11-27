import Main from './Main.svelte';
import User from './User.svelte';
import Hot from './Hot.svelte';
import History from './History.svelte';
import Add from './Add.svelte';
import Login from './LoginPage/index.svelte';
import Register from './Register.svelte';

export default {
  '/Home': Main,
  '/User': User,
  '/Hot': Hot,
  '/History': History,
  '/Add': Add,
  '/Login': Login,
  '/Register': Register,
};
