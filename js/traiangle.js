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
    const rectinagleWidth = rectinagleWidthText;


    //calculate rectinagle length 
    const rectinagleLengthInput = document.getElementById('rectinagle-length');
    const rectinagleLengthText = rectinagleLengthInput.value;
    const rectinagleLength = rectinagleLengthText;

    //calculate rectinagle
    const rectinagleArea = rectinagleWidth * rectinagleLength;


    const rectinagleAreaSpan = document.getElementById('rectinagle-area');
    rectinagleAreaSpan.innerText = rectinagleArea;

}