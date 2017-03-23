import Omi from 'omi';

class Todo extends Omi.Component {
  constructor(data) {
    super(data);
    this.data = {
      items: ['12','3321', 3412],
      isVip: true
    }
  }

  add (evt) {
    evt.preventDefault();
    this.data.items.push(this.data.text);
    this.data.text = '';
    this.update();
  }

  style () {
    return `
        h3 { color:red; }
        button{ color:green;}
        li {height: 30px; color: green}
        `;
  }

  handleChange(target){
    this.data.text = target.value;
  }

  changeVip() {
    this.data.isVip = !this.data.isVip
    this.update()
  }

  changeVal(target){
    this.data.value = target.value
    this.update()
  }

  render () {
    return `
      <div>
        <h3>${this.data.isVip ? 'hello ' : 'todo'}</h3>
        <!--<ul> {{#items}} <li>{{.}}</li> {{/items}}</ul>-->
        <ul>
          ${this.data.items.map(item => {
            return `<li>${item}</li>`  
          }).join('')}
        </ul>
        <form onsubmit="add(event)" >
            <input type="text" onchange="handleChange(this)"  value="{{text}}"  />
            <button>Add #{{items.length}}</button>
        </form>
        
        
        <p>
          you have pick a ${this.data.value}
        </p>
        <input type="text" onchange="changeVal(this)">
        <button onclick="changeVip()">changeVip</button>
    </div>`;
  }
}

Omi.render(new Todo({ items: [] ,text : '' }),"body");