import Header from './Header'
import Content from './Content'
import List from './List'


let coms =[Header,Content,List]


export default {
  install:app=>{
    coms.forEach(el => {
        app.component(`Cs${el.name}`, el)
    });
  }
}