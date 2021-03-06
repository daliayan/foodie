class RestaurantApi {

    constructor(baseURL){
        this.baseURL = baseURL;
    };

    //deleting restuarant function
    deleteRestaurant(id){
        const config = {
            method: 'DELETE',
        };
        fetch(`${this.baseURL}/${id}`, config)
        .then(resp => resp.json())
        .then(json => alert(json.message))
    };

    submitForm(event){
        
        event.preventDefault();
        console.log("form submitted")
        const myForm = document.getElementById('restaurant-form')
        const restaurantName = document.getElementById('restaurant-name')
        const restaurantNationality = document.getElementById('restaurant-nationality')
        const restaurantRating = document.getElementById('restaurant-rating')
        const selectCityDropdown = document.getElementById("cityRestaurant")
    
        // making a params hash to dictate the info the user can submit
        // object with key value pairs
        const formData = {
            name: restaurantName.value, 
            nationality: restaurantNationality.value, 
            rating: restaurantRating.value, 
            city_id: selectCityDropdown.value,
        }
    
        // my config obj makes it easier to extract change data info
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        }

        fetch(this.baseURL, configObj)
        .then(resp => resp.json())
        .then(json => {
            const newres = new Restaurant(json)
            const city = document.getElementById(`city-${newres.cityId}`);
            const appendedRes = newres.getRestaurant();
            city.appendChild(appendedRes);
            myForm.reset();
        });
    }
}
