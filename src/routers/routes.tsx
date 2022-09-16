import {RouteRecordRaw} from 'vue-router';
import {First} from '../components/welcome/Main/First';
import {Second} from '../components/welcome/Main/Second';
import {Third} from '../components/welcome/Main/Third';
import {Forth} from '../components/welcome/Main/Forth';
import {FirstAction} from '../components/welcome/Footer/FirstAction';
import {Welcome} from '../views/Welcome';
import {Start} from '../views/Start';
import {SecondAction} from '../components/welcome/Footer/SecondAction';
import {ThirdAction} from '../components/welcome/Footer/ThirdAction';
import {ForthAction} from '../components/welcome/Footer/ForthAction';

export const routes: RouteRecordRaw[] = [
  {path: '/', redirect: '/welcome'},
  {
    path: '/welcome',
    component: Welcome,
    children: [
      {path: '', redirect: '/welcome/1',},
      {path: '1', name: 'welcome1', components: {main: First, footer: FirstAction}},
      {path: '2', name: 'welcome2', components: {main: Second, footer: SecondAction}},
      {path: '3', name: 'welcome3', components: {main: Third, footer: ThirdAction}},
      {path: '4', name: 'welcome4', components: {main: Forth, footer: ForthAction}},
    ]
  },
  {path: '/start', component: Start}
];