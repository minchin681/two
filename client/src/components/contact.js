import axios from 'axios';

function Contact() {

    let baseUrl = "https://washingtown.azurewebsites.net";

    function butonclick(e) {
        axios.get(`${baseUrl}/data`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.error(err);
        });
    }


    return (
        <div>
            <button className="the-buttons" onClick={butonclick}>
                click to api
            </button>
        </div>
    )
}

export default Contact
