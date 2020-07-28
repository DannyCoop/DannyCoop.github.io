const url = 'https://dannysapproundtwo.herokuapp.com/test'

let x = 0;
let toCut = ""
document.addEventListener("DOMContentLoaded", () => {
    theProcess();
})

const theProcess = () => {
    

    const form = document.getElementById('form')

    const submit = document.getElementById('submit')

    form.addEventListener('submit', (e) =>{
        e.preventDefault()

        const string_to_send = document.getElementById('userinput').value

        x = 0
        toCut = string_to_send;
        console.log(toCut)

        console.log(e.target)

        const postRequest = {
            method: "POST",
            mode:'cors',
            body: JSON.stringify({
                string_to_cut: `${toCut}`
            }),
            headers: {
                'Content-type': 'application/json',
                Accept: "application/json"
            }
        }

        fetch(url, postRequest)
        .then(res => res.json())
        .then(data => renderResult(data))

        //userInput.value = ""

        const renderResult = (data) => {
            const result = document.getElementById('result')
            result.innerText = "This is every third letter: " + data.return_string
            console.log(result)
        }
        
        
    })


}