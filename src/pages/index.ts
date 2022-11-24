import Main from './Main.svelte';
import User from './User.svelte';
import Hot from './Hot.svelte';
import History from './History.svelte';
import Add from './Add.svelte';

export default {
  '/Home': Main,
  '/User': User,
  '/Hot': Hot,
  '/History': History,
  '/Add': Add,
};
