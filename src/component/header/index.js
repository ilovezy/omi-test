import Omi from 'omi';

class Header extends Omi.Component {
  constructor(data) {
    super(data);
  }

  install () {
    this.data = {
      secondsElapsed: 0,
      isVip: true,
      list: [
        {name: 'cc', age: 22},
        {name: 'zy', age: 18},
        {name: 'qq', age: 24}
      ]
    };
  }

  style() {
    return `
      <style>
        h1 {cursor: pointer; color:orange;}
      </style>
    `
  }

  handleClick(target, evt) {
    console.log(target)
  }

  changeVip(){
    this.data.isVip = !this.data.isVip
    // this.update()
  }

  render() {
    return `
          <div class="head">
            <h1 onclick="handleClick(this, event)">Hello, {{secondsElapsed}}</h1> 
            <p>${this.data.isVip ? 'hello' : 'world'}</p>
            
            <button onclick="changeVip()">clic me</button>
            
            <ul>
              ${this.data.list.map((item)=>{
                return `<li>${item.name} + ${item.age}</li>` 
              }).join('')}
            </ul>
            
            <select value="coconut">
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </div>
        `
  }
}

export default Header;