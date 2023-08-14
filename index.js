import inquirer from "inquirer"
import { Circle } from "./lib/shapes.js"
import { Triangle } from "./lib/shapes.js"
import { Square } from "./lib/shapes.js"
import { generateLogo } from "./lib/generateLogo.js"


class SVG {
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
    }
    shapeText(text, color) {
        return  `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`
    }
}




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
    })






//     {/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//   <circle cx="150" cy="100" r="80" fill="green" />
//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">TAJ</text>
// </svg> */}

// class Component {
//     constructor(children) {
//       this.children = children ? children : []
//     }
  
//     render() {
//       throw new Error('Child class must implement a render method')
//     }
  
//     renderInnerXML() {
//       let innerHTML = ''
//       for (const child of this.children) {
//         if (typeof child === 'string') {
//           innerHTML += child
//         } else {
//           innerHTML += child.render()
//         }
//       }
//       return innerHTML
//     }
//   }
  
//   class SVG extends Component {
//     constructor(children) {
//       super(children)
//     }
  
//     render() {
//       return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//         ${this.renderInnerXML()}
//       </svg>`
//     }
//   }
  
//   class Circle extends Component {
//     render() {
//       return `<circle cx="150" cy="100" r="80" fill="green" />`
//     }
//   }
  
//   const circle = new Circle()
//   const svg = new SVG([circle])
//   const result = svg.render()
//   console.log(result)