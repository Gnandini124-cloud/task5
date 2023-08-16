const fileInput = document.getElementById('fileInput');
const textInput = document.getElementById('textInput');

fileInput.addEventListener('change', handleFiles);

function handleFiles(event) {
    const files = event.target.files;
    console.log('Uploaded Files:', files);

    // You can add further logic to handle the uploaded files here
}

textInput.addEventListener('input', handleText);

function handleText(event) {
    const text = event.target.value;
    console.log('Typed Text:', text);

    // You can add further logic to handle the text here
}
