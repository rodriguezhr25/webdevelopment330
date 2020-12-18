export function getJSON(url) {
    return fetch(url,{
        headers: { 'X-Auth-Token': 'f5d0ba146d734735addf5735e546b6c1' },    
        method: 'GET', // *GET, POST, PUT, DELETE, etc.        
        
      
        
    })
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                
                return response.json();
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}

export const getLocation= function(options) {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};