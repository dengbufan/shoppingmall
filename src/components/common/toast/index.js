import Toast from './Toast';

const Obj={};

Obj.install=function(Vue) {  //main里面 执行vue.use(Obj)的时候 默认会执行这个函数
    //1.首先要创建一个组件构造器，因为当前我们的组件，里面的模板并没有被添加到body上
    //并且不能直接通过 document.body.appendChild(Toast.$el) 将toast里面模板的元素添加到body节点中
   const toastContrustor=Vue.extend(Toast);
    
   //2.通过new的方式，根据组件构造器，创建一个组件对象
   const toast=new toastContrustor();

   //3.将组件对象，手动挂载到某一个元素上，就是组件里面的内容在什么上面进行显示
   toast.$mount(document.createElement('div'));

   //4.然后将toast.$el添加到body中 此时toast.$el对应的就是div
   document.body.appendChild(toast.$el);


   //5.将toast挂载到vue原型上
   Vue.prototype.$toast=toast;
};



export default Obj;