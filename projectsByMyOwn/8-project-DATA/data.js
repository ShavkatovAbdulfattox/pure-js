const data = [
    {
        id: 0,
        pin: 1111,
        name: "Abdulbosit",
        date: new Date("2023, 1, 25"),
        phoneNumber: "991009898",
        product: {
            model: "Iphone 14 Max",
            image: "https://cdn.macbro.uz/macbro/d35cfadb-2308-42fe-b7f5-da7dd24a4b74",
            realPrice: 1420,
            givenMoney: 600,
            percent: 40,
            consumption: 14,
            term: 4,
            monthlyPay: 250,
            calcWentOutAmount() {
                return this.realPrice - this.givenMoney + this.consumption
            },
            calcTotalAmount() {
                let total = (this.realPrice - this.givenMoney + this.consumption)
                return (total * this.percent / 100) + total
            },
            monthlyPay() {
                return this.calcTotalAmount() / this.term

            },
            remPay() {
                let remain = this.calcTotalAmount()
                return remain
            }
        },
        responsiblePerson: {
            imei: "imei 7311",
            name: "c 49 usmonaka",
        },
    },
    {
        id: 1,
        pin: 2222,
        name: "Fazliddin",
        date: new Date("2022,1,22"),
        phoneNumber: "931035344",
        product: {
            model: "Iphone 11 128gb",
            image: "https://cdn.macbro.uz/macbro/9f8317e9-493a-4c5b-8ccd-19e34f529212",
            realPrice: 400,
            givenMoney: 200,
            consumption: 14,
            percent: 50,
            term: 8,

            calcWentOutAmount() {
                return this.realPrice - this.givenMoney + this.consumption
            },
            calcTotalAmount() {
                let total = (this.realPrice - this.givenMoney + this.consumption)
                return (total * this.percent / 100) + total
            },
            monthlyPay() {
                return this.calcTotalAmount() / this.term
            },
            remPay() {
                let remain = this.calcTotalAmount()
                return remain
            }
        },
        responsiblePerson: {
            imei: "imei 3515",
            name: "99 005 53 44"
        },
    },
    {
        id: 3,
        pin: 3333,
        name: "muzap jiyan",
        date: new Date("2023,1,23"),
        phoneNumber: "994890070",
        product: {
            model: "Iphone 12 128gb",
            realPrice: 500,
            givenMoney: 0,
            consumption: 0,
            percent: 20,
            term: 4,
            image: "https://cdn.macbro.uz/macbro/397b968b-7ae8-44e7-9336-dd04b7440bb1",
            calcWentOutAmount() {
                return this.realPrice - this.givenMoney + this.consumption
            },
            calcTotalAmount() {
                let total = (this.realPrice - this.givenMoney + this.consumption)
                return (total * this.percent / 100) + total
            },
            monthlyPay() {
                return this.calcTotalAmount() / this.term
            },
            remPay() {
                let remain = this.calcTotalAmount()
                return remain
            }
        },
        responsiblePerson: {
            imei: "imei 4891",
            name: "muzap jiyan "
        },
    },
    {
        id: 4,
        pin: 4444,
        name: "sirdaryo",
        date: new Date("2023,1,23"),
        phoneNumber: "911006650",
        product: {
            model: "Iphone 13 Max",
            realPrice: 1120,
            givenMoney: 500,
            consumption: 10,
            percent: 50,
            term: 8,
            image: "https://cdn.macbro.uz/macbro/e4574dbe-73d2-4cfb-b5b2-65cd3d149021",
            calcWentOutAmount() {
                return this.realPrice - this.givenMoney + this.consumption
            },
            calcTotalAmount() {
                let total = (this.realPrice - this.givenMoney + this.consumption)
                return (total * this.percent / 100) + total
            },
            monthlyPay() {
                return this.calcTotalAmount() / this.term
            },
            remPay() {
                let remain = this.calcTotalAmount()
                return remain
            }
        },
        responsiblePerson: {
            imei: "imei 27913",
            name: "ozi "
        },
    },
    {
        id: 5,
        pin: 5555,
        name: "islom",
        date: new Date("2023,1,05"),
        phoneNumber: "994585900",
        product: {
            model: "Iphone 13pro 128",
            realPrice: 940,
            givenMoney: 200,
            consumption: 3,
            percent: 40,
            term: 8,
            image: "https://cdn.macbro.uz/macbro/e4574dbe-73d2-4cfb-b5b2-65cd3d149021",
            calcWentOutAmount() {
                return this.realPrice - this.givenMoney + this.consumption
            },
            calcTotalAmount() {
                let total = (this.realPrice - this.givenMoney + this.consumption)
                return (total * this.percent / 100) + total
            },
            monthlyPay() {
                return this.calcTotalAmount() / this.term
            },
            remPay() {
                let remain = this.calcTotalAmount()
                return remain
            }
        },
        responsiblePerson: {
            imei: "imey 25224",
            name: "fariza ogan "
        },
    },
    // https://cdn.macbro.uz/macbro/2accc770-d5f3-4da4-9a5d-7e16423df22c 13 iphone
]

// console.log(data);

// variables 
const main = document.querySelector(".main");
const tabContainer = document.querySelector(".header__tabs--content")

// ================
const colors = {
    violet: "blueviolet",
    red: "red",
    gold: "gold",
    black: "black"

}
let categoryName = "";
// ================

// ** functions **




// fetching data
const fetchData = (data) => {

    data.map(data => {

        const { id, pin, name, date, phoneNumber, product, responsiblePerson } = data;


        const options = {

            day: "numeric",
            month: "long", // 2-digit
            year: "numeric", // 2-digit
            weekday: "long"
        }
        const formattedDate = new Intl.DateTimeFormat("uz", options).format(date)


        const userInformation = `
            <section class="user">
            <div class="user__left--information">
          <img
            src="${product.image}"
            alt="${product.model}"
            class="user__left--img"
          />

          <div class="user__left--desc">
            <h2 class="model-name ${setBackground(product.model)}">${product.model.toUpperCase()}</h2>
            <h3 class="model">
              Olingan narxi :
              <span class="price">${product.realPrice} $</span>
            </h3>
            <h3 class="model">
              Rasxod :
              <span class="price">${product.consumption} $</span>
            </h3>
            <h3 class="model">
              Berilgan narxi :
              <span class="given-money">${product.givenMoney} $</span>
            </h3>
            <h3 class="model">
              Ustiga qoyilgan foiz :
              <span class="price">${product.percent} %</span>
            </h3>
            <h3 class="model">
              Nechi oyga olindi :
              <span class="price">${product.term} oyga</span>
            </h3>
          </div >
        </div >
    <div class="user__right--information">
        <h2 class="model-name ${setBackground(product.model)}">Foydalanuvchini ma'lumotlari</h2>
        <div class="user--desc ">
            <div class="user--photo ${setBackground(product.model)}">ID${id}</div>
            <div class="user--desc__detail">
                <h2>
                    Foydalanuvchi ismi: <span class="user--name">${name.split(" ")[0].toUpperCase()}</span>
                </h2>
                <h2>
                    Foydalanuvchi nomeri:
                    <span class="user--phone">+${phoneNumber}</span>
                </h2 >
            </div >
        </div >

        <div class="user__responsible">
            <h3>
                <div>
                    Telefon <b class="imei"><em>imei ID :</em></b>
                </div>
                <span class="user__responsible--imei">${responsiblePerson.imei?.split(" ")[1]}</span>
            </h3>
            <h3>
                Telefonga mas'ul odam :
                <span class="user__responsible--name">${responsiblePerson.name}</span>
            </h3>
        </div>
        <div class="user--important__informations">
            <h2>muhim ma'lumotlar</h2>
            <h3>Chiqazilgan summa :<span>${product?.calcWentOutAmount()} $</span></h3>
            <h3>Jami summa :<span>${product?.calcTotalAmount()}$</span></h3>
            <h3>Oylik tolov summa :<span>${product?.monthlyPay()}$</span></h3>
            <h3>Qoldiq tolov summa :<span>${product.remPay()}$</span></h3>
        </div>
        <div class="user__date">
            <h2>Nasiyaga olingan sana 👇</h2>
            <p>${formattedDate}</p>
        </div>
    </div >
      </section >
    `
        main.insertAdjacentHTML("afterbegin", userInformation)

    });
}
function setBackground(productName) {
    const name = productName.slice(0, 9).toLowerCase();
    let color
    // console.log(name);
    switch (name) {
        case "iphone 11":
            color = colors.black
            break;
        case "iphone 12":
            color = colors.red
            break;
        case "iphone 13":
            color = colors.gold
            break;

        default:
            color = colors.violet
            break;

    }
    // console.log(color);
    // let color = "red"
    return color
}

const createTabs = (data) => {
    const tabsName = data.map(data => {
        const { product } = data
        const model = product.model.slice(0, 9);
        return model
    })

    for (const [key, tab] of Object.entries(['all', ...new Set(tabsName)])) {
        tabContainer.insertAdjacentHTML("beforeend", `<button class="btn-primary header--tab ${+key === 0 ? "active" : ""
            }" data-id="${key}">${tab.toUpperCase()}</button>`)
    }
    const buttons = document.querySelectorAll(".header--tab")
    buttons.forEach(btn => {
        const isActive = btn.classList.contains("active")
        if (!isActive) return
        const filteredData = data.filter(data => data.product.model.toLowerCase().includes(btn.textContent.toLowerCase()));

        fetchData(data)

    })
}
createTabs(data)

const activeButton = (e) => {

    const buttons = document.querySelectorAll(".header--tab");
    let target = e.target.textContent.toLowerCase()
    // guard 
    if (!e.target.classList.contains("header--tab")) return
    // remove active class
    buttons.forEach(btn => {
        btn.classList.remove("active")
        // e.target.dataset.id
    })
    // add active class
    e.target.classList.add("active")
    categoryName = target


    // let newData = data.filter(data => data.product.model.includes(target))

}


// Events 
tabContainer.addEventListener("click", (e) => {
    activeButton(e)

    if (!e.target.classList.contains("header--tab")) return
    const userInformation = document.querySelectorAll(".user");


    if (!e.target.classList.contains("active")) {
        console.log(true);
    }
    userInformation.forEach(product => {
        product.remove()
    })
    const filteredData = data.filter(dat => dat.product.model.toLowerCase().includes(categoryName));
    if (filteredData.length === 0) {
        fetchData(data)
        return
    }
    fetchData(filteredData)
    // if (filteredData) {
    //     setTimeout(() => { fetchData(filteredData || data) }, 100)
    //     console.log(true);
    // }else{
    //     console.log(false);
    // }





})