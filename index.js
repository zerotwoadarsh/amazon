const shopData = [
    { title: "Laptops and Tablets", imgSrc: "box1.jpg" },
    { title: "Discover fashion trends", imgSrc: "box2.jpg" },
    { title: "Discover fashion trends", imgSrc: "box3.jpg" },
    { title: "Make-up and beauty", imgSrc: "box4.jpg" },
    { title: "Bags and luggage", imgSrc: "box5.jpg" },
    { title: "Bluetooth watches starting at ₹1,199", imgSrc: "box6.jpg" },
    { title: "Laptops and Tablets", imgSrc: "box7.jpg" },
    { title: "Laptops and Tablets", imgSrc: "box8.jpg" },
    // Add more objects as needed
];

// Function to dynamically render shop section
function renderShopSection() {
    const shopSection = document.getElementById("shopSection");

    shopData.forEach((item, index) => {
        const boxHtml = `
            <div class="box box${index + 1}">
                <div class="box-content">
                    <h2>${item.title}</h2>
                    <div class="box-img" style="background-image: url('${item.imgSrc}');"></div>
                    <p><a href="#">see more</a></p>
                </div>
            </div>
        `;
        shopSection.innerHTML += boxHtml;
    });
}

// Call the function to render shop section
renderShopSection();

// data for foot-panel2 elements
const footPanel2Data = [
    {
        title: "Get to know us",
        links: ["Careers", "Blog", "About Amazon", "Investor Relations", "Amazon Devices", "Amazon Science"]
    },
    {
        title: "Make Money with Us",
        links: ["Sell products on Amazon", "Sell on Amazon Business", "Sell apps on Amazon", "Become an Affiliate", "Advertise Your Products", "Self-Publish with Us", "Host an Amazon Hub", "See More Make Money with Us"]
    },
    {
        title: "Amazon Payment Products",
        links: ["Amazon Business Card", "Shop with Points", "Reload Your Balance", "Amazon Currency Converter"]
    },
    {
        title: "Let Us Help You",
        links: ["Amazon and COVID-19", "Your Account", "Your Orders", "Shipping Rates & Policies", "Returns & Replacements", "Manage Your Content and Devices", "Amazon Assistant", "Help"]
    }
];

// Function to dynamically render foot-panel2 elements
function renderFootPanel2() {
    const footPanel2Container = document.querySelector('.foot-panel2');

    footPanel2Data.forEach(item => {
        const ulElement = document.createElement('ul');
        const pElement = document.createElement('p');
        pElement.textContent = item.title;

        ulElement.appendChild(pElement);

        item.links.forEach(linkText => {
            const aElement = document.createElement('a');
            aElement.textContent = linkText;
            ulElement.appendChild(aElement);
        });

        footPanel2Container.appendChild(ulElement);
    });
}

// Call the function to render foot-panel2 elements
renderFootPanel2();

const panelOps = [
    "amazon miniTV", "sell", "best sellers", "today's deals", "Mobiles", "new release", "customer services", "electronics", "gift ideas", "Amazon Pay", "coupons", "fashion", "books"
];

function renderPanelOps (){
    const panelOpsContainer = document.querySelector('.panel-ops');
    panelOps.forEach((item) =>{
        const innerContent = `
        <p class="border">${item}</p>
        `;
        panelOpsContainer.innerHTML += innerContent;
    })
}

renderPanelOps();