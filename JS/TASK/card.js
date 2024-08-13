
    const cities = [
        { name: "New York", country: "USA", currency: "USD", language: "English" },
        { name: "London", country: "UK", currency: "GBP", language: "English" },
        { name: "Paris", country: "France", currency: "Euro", language: "French" },
        { name: "Tokyo", country: "Japan", currency: "Yen", language: "Japanese" },
        { name: "Sydney", country: "Australia", currency: "AUD", language: "English" }
    ];

    const cardContainer = document.getElementById("card-container");

    
    cardContainer.style.display = "flex";
    cardContainer.style.flexWrap = "wrap";6
    cardContainer.style.gap = "16px"
    cardContainer.style.justifyContent = "flex-start";
    cardContainer.style.marginTop = "20px";

    cities.forEach(city => {
        
        const card = document.createElement("section");
        card.style.border = "1px solid #ccc";
        card.style.borderRadius = "8px";
        card.style.padding = "16px";
        card.style.margin = "8px";
        card.style.textAlign = "center";
        card.style.boxShadow = "2px 2px 12px rgba(0, 0, 0, 0.1)";
        card.style.width = "250px";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.alignItems = "center";
        card.style.backgroundColor = "lightblue";
        
       
        const innerCard = document.createElement("section");
        innerCard.style.border = "1px solid #aaa";
        innerCard.style.borderRadius = "8px";
        innerCard.style.height = "100px";
        innerCard.style.marginBottom = "16px";
        innerCard.style.backgroundColor = "pink";
        innerCard.style.width = "80%";
        
      
        const cityName = document.createElement("h2");
        cityName.innerText = `City Name: ${city.name}`;
        
        
        const countryName = document.createElement("p");
        countryName.innerText = `Country: ${city.country}`;
        
      
        const currency = document.createElement("p");
        currency.innerText = `Currency: ${city.currency}`;
        
        
        const language = document.createElement("p");
        language.innerText = `Language: ${city.language}`;
        
        
        card.appendChild(innerCard);
        
        
        card.appendChild(cityName);
        card.appendChild(countryName);
        card.appendChild(currency);
        card.appendChild(language);
        
       
        cardContainer.appendChild(card);
    });



