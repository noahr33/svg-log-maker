import fs from "fs"
import { Circle } from "./shapes.js"
import { Triangle } from "./shapes.js"
import { Square } from "./shapes.js"

export const generateLogo = (fileName, data) => {
    let fileData = ''
    fileData = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
    fileData += `<g>`
    fileData += `${data.shape}`

    let newShape
    if (data.shape === "circle") {
        newShape = new Circle()
        fileData += `<circle cx="150" cy="115" r="80" fill="${data.shapeColor}"/>`
    } else if (data.shape === "triangle") {
        newShape = new Triangle()
        fileData += `<polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}"/>`
    } else if(data.shape === "square") {
        newShape = new Square()
        fileData += `<rect x="73" y="40" width="160" height="160" fill="${data.shapeColor}"/>`
    }

    fileData += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>`
    fileData += `</g>` 
    fileData += `</svg>`

    fs.writeFile(fileName, fileData, err => {
        if (err) {
        throw err
        }
        console.log('Logo Created!')
    })
}