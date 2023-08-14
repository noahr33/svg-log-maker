import inquirer from "inquirer"
import fs from "fs"
// import { Circle } from "./lib/shapes.js"
// import { Triangle } from "./lib/shapes.js"
// import { Square } from "./lib/shapes.js"
// import { generateLogo } from "./lib/generateLogo.js"


inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Type in the text for your logo. (Up to three characters)'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Type the color you would like your text color to be?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Which shape would you like your logo to be?',
        choices: ['circle', 'triangle', 'sqaure']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Type the color you would like your shape color to be?'
    }
])
    .then(data => {
        
        const logo = generateLogo(data)
        fs.writeFile(`./examples/${data.title}.svg`,
        logo, err => {
            if (err) {
                throw err
            }
            console.log(`${data.text}.svg saved!`)
        })
    })






//     {/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//   <circle cx="150" cy="100" r="80" fill="green" />
//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">TAJ</text>
// </svg> */}

class Component {
    constructor(children) {
      this.children = children ? children : []
    }
  
    render() {
      throw new Error('Child class must implement a render method')
    }
  
    renderInnerXML() {
      let innerHTML = ''
      for (const child of this.children) {
        if (typeof child === 'string') {
          innerHTML += child
        } else {
          innerHTML += child.render()
        }
      }
      return innerHTML
    }
  }
  
  class SVG extends Component {
    constructor(children) {
      super(children)
    }
  
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.renderInnerXML()}
      </svg>`
    }
    shapeText(text, color) {
        return  `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
            }
  }
  
  class Circle extends Component {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
  }

  class Triangle extends Component {
    render() {
        return `<rect x="50" width="200" height="200" fill=${this.shapeColor}/>`
    }
  }

class Square extends Component {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill=${this.shapeColor}/>`
    }
}
  
  const circle = new Circle()
  const triangle = new Triangle()
  const sqaure = new Square()

  const svg = new SVG([`${this.shape}`])
  const result = svg.render()
  console.log(result)
  
  function generateLogo(data) {
    const answers = inquirer.prompt(data)
    let shape = answers.shape
    let text = answers.text
    let textColor = answers.textColor
    let shapeColor = answers.shapeColor

    
    if (shape === "circle" || shape === "Circle") {
        shape = circle.render()
    } else if (shape === "triangle" || shape === "Triangle") {
        shape = triangle
    } else {shape === "square" || shape === "Sqaure"} {
        shape = sqaure
    }
}
