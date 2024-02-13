function calculateTriangleArea(){
    // //get triangle base
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);


    // //get triangle height
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText); 

    // calculate triangle area
    const area = 0.5 * base * height; 
    // console.log(area);

    //display triangle are 
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area; 
}

function calculateRectingleArea(){
    //calculate rectinagle width
    const rectinagleWidthInput = document.getElementById('rectinagle-width');
    const rectinagleWidthText = rectinagleWidthInput.value;
    const rectinagleWidth = parseFloat(rectinagleWidthText);


    //calculate rectinagle length 
    const rectinagleLengthInput = document.getElementById('rectinagle-length');
    const rectinagleLengthText = rectinagleLengthInput.value;
    const rectinagleLength = parseFloat(rectinagleLengthText);

    //calculate rectinagle
    const rectinagleArea = rectinagleWidth * rectinagleLength;


    const rectinagleAreaSpan = document.getElementById('rectinagle-area');
    rectinagleAreaSpan.innerText = rectinagleArea;

}

function calculateParallelogramArea(){
    //calculate parallelogram base
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const parallelogramBase = parseFloat(parallelogramBaseText);


    //calculate rectinagle height 
    const parallelogramLengthInput = document.getElementById('parallelogram-length');
    const parallelogramLengthText = parallelogramLengthInput.value;
    const parallelogramLength = parseFloat(parallelogramLengthText); 

    //calculate rectinagle
    const parallelogramArea = parallelogramBase * parallelogramLength;


    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = parallelogramArea;

}