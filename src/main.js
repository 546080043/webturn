import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './style/reset.css'; // 初始化样式
import 'vant/lib/index.css'; // 全局引入样式
import './style/common.scss'; // 全局引入公共样式
import { ActionBar, ActionBarIcon, ActionBarButton, Divider, Popup, Overlay, Loading, Dialog, ContactCard, Form, AddressEdit, AddressList, Field, CellGroup, Cell, SwipeCell, Icon, Stepper, Card, Checkbox, CheckboxGroup, Button, Swipe, SwipeItem, PullRefresh, List, Tab, Tabs, SubmitBar, Toast, Skeleton } from 'vant'
let app = createApp(App)
app.use(Toast)
app.use(store)
app.use(router)
app.mount("#app");

/**
 * 使用rem做自适应屏幕，750设计稿1rem=100px
 */
const setHtmlFontSize = () => {
    const htmlDom = document.getElementsByTagName('html')[0];
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    htmlDom.style.fontSize = `${htmlWidth / 7.5}px`;
};
window.onresize = setHtmlFontSize;
setHtmlFontSize();
