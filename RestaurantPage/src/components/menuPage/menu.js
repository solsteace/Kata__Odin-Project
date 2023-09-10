import "./menu.css"

const ftMenuItem = (imgURL, itemName, itemPrice) => {
	let section = document.createElement("div");
	let img = document.createElement("img");
	img.src = imgURL;
	img.alt = itemName; 

	let detailsDiv = document.createElement("div");
	detailsDiv.classList.add("menuItem__details");
	let heading = document.createElement("p");
	let caption = document.createElement("p");

	heading.textContent = itemName;
	caption.textContent = `\$ ${itemPrice.toFixed(2)}`;
	heading.classList.add("menuItem__name");
	caption.classList.add("menuItem__price");

	detailsDiv.appendChild(heading);
	detailsDiv.appendChild(caption);

	section.appendChild(img);
	section.appendChild(detailsDiv);
	return section

}

function main() {
	let section = document.createElement("main");
	section.classList.add("main__menu");
	let heading = document.createElement("h2");
	heading.textContent = "Our Products";
	let caption = document.createElement("p");
	caption.textContent = "Explore our menu and discover its greatness!";

	section.appendChild(heading);
	section.appendChild(caption);

	let menuSection = document.createElement("div");
	menuSection.classList.add("menu__list")

	let foodItems = {
		"Main Course" : [
			["Pizza Margerita", 20.0, "https://www.blossmangas.com/wp-content/uploads/2021/05/Margherita-pizza-2.jpg" ],
			["Lasagna", 15.0, "https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe-f.jpg" ],
			["Fettucine Alfredo", 12.0, "https://www.modernhoney.com/wp-content/uploads/2018/08/Fettuccine-Alfredo-Recipe-1.jpg" ],
			["Spaghetti Bolognese", 12.0, "https://img.taste.com.au/iefuclj7/w1200-h630-cfill/taste/2016/11/spaghetti-bolognese-106560-1.jpeg"], 
			["Spaghetti Alle Vongole", 14.0, "data:image/jpeg;base64,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"], 
			["Manicotti", 10.0, "https://thecozycook.com/wp-content/uploads/2022/08/Manicotti-f.jpg" ],
			["Strombolli", 15.0, "https://cdn11.bigcommerce.com/s-5ljyj9oebs/images/stencil/600x600/products/3610/16668/P013123174906_1__96360.1690315778.jpg?c=2" ],
		],
		"Sides & Desserts" : [
			["Crostini", 8.5, "https://www.rachelcooks.com/wp-content/uploads/2019/11/how-to-make-crostini-web-3-of-5.jpg" ],
			["Brushcetta", 8.5, "https://www.vegrecipesofindia.com/wp-content/uploads/2016/07/bruschetta-recipe-1-500x500.jpg" ],
			["Gnocchi", 6.0, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZGvRuGedPxBKhN77JU5uvY3Z0LsasVDk66g&usqp=CAU" ],
			["Focaccia", 6.5, "data:image/jpeg;base64,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" ],
			["Tiramisu", 7.0, "https://www.frisianflag.com/storage/app/media/uploaded-files/itra.jpg" ],
			["Panna Cotta", 6.0, "data:image/jpeg;base64,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" ],
			["Cannoli", 6.5, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCtM7yu3j51B09GoYw6OSTZsYD9F-ICAX4Aw&usqp=CAU" ],
			["Gelato", 5.0, "https://i.pinimg.com/236x/41/c4/d0/41c4d06df40083cca3cda2c53b035f2a--chocolate-malt-chocolate-ice-cream.jpg" ],
		],
		"Drinks" : [
			["Coffee", 4.0, "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg" ],
			["Juice", 4.0, "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/honeydew-melon-cucumber-lime-juice-0ea3b29.jpg" ],
			["Mineral Water", 1.5, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcegoHOPIs7n6AOuCKvE62W0pQSrzJsWPdCg&usqp=CAU" ],
		]
	}

	Object.entries(foodItems).forEach(([foodCategory, categoryItems]) => {
		let menuSubsection = document.createElement("section")
		let heading = document.createElement("h3");
		menuSubsection.classList.add("menu__categoryEntry");
		heading.textContent = foodCategory;


		let menuList = document.createElement("div");
		menuList.classList.add("cards");
		categoryItems.forEach(([name, price, imgURL]) => {
			let menuItem = ftMenuItem(imgURL, name, price);
			menuItem.classList.add("card", "menu__item");
			menuList.appendChild(menuItem.cloneNode(true));
		})
		
		menuSubsection.appendChild(heading);
		menuSubsection.appendChild(menuList)
		menuSection.appendChild(menuSubsection);
	})

	section.appendChild(menuSection);

	return section;
}

export default main();
