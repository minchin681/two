import axios from 'axios';

function Contact() {

    let baseUrl = "https://washingtown.azurewebsites.net";

    function butonclick(e) {
        e.preventDefault();
        axios.get(`${baseUrl}`)
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