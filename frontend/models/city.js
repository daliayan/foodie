class City {

    constructor({id, name, restaurants}){
        this.name = name;
        this.id = id;
        this.restaurants = restaurants;
    };

    getCity() {
        const cityList = document.getElementById('city-list');
        const cityDiv = document.createElement('div');
        cityDiv.classList.add('city-list');

        const cityInfo = this.getCityInfo();
        
        const restaurants = this.getCityRestaurants();

        cityDiv.appendChild(cityInfo);
        cityList.appendChild(cityDiv)
    };

    getCityInfo(){
        const cityData = document.createElement('div');

        cityData.innerHTML = `
        <h1> ${this.name}</h1>
        <p>Restaurants: ${this.restaurants}<p>
        `; 
        return cityData;
    }

    getCityRestaurants(){
        const restaurantUl = document.createElement('ul');
        restaurantUl.classList.add('restaurants');
        
        this.restaurants.forEach(restaurant => {
            const newRestaurant = new Restaurant(restaurant); // destructuring

            const li = newRestaurant.getRestaurant();
            restaurantUl.appendChild(li);
        });
        return restaurantUl;
    };

    // getRestaurantForm(){

    // };

};