/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

function getSize(width, height, depth){
    const boxArray = []
    const volume = width * height * depth
    const bottomOrTopArea = width * depth
    const frontOrBackArea = width * height
    const sideArea = depth * height
    const surfaceArea = (bottomOrTopArea * 2) + (frontOrBackArea * 2) + (sideArea * 2)
    boxArray.push(volume)
    boxArray.unshift(surfaceArea)
    return boxArray
}