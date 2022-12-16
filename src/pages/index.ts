import Main from './Main.svelte';
import User from './User.svelte';
import Hot from './Hot.svelte';
import History from './History.svelte';
import Add from './Add.svelte';
import Login from './Login.svelte';
import Register from './Register.svelte';
import EditUser from './EditUser.svelte';

export default {
  '/home': Main,
  '/user': User,
  '/user/edit':EditUser,
  '/hot': Hot,
  '/history': History,
  '/add': Add,
  '/login': Login,
  '/register': Register,
};
