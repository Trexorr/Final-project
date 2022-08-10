                            // Declarations

                            
// Class selector

// let divs = ["traditional", "blacknGold", "greennGold", "dustyRose"];
// let visibleId = null;

const cardinv = document.querySelector('#invCard')
const trad = document.querySelector('.style1')
const black = document.querySelector('.style2')
const green = document.querySelector('.style3')
const rose = document.querySelector('.style4')
const one = document.querySelector('#out1')




// Input
const text1 = document.getElementById('in1');
const text2 = document.getElementById('in2');
const text3 = document.getElementById('in3');
const text4 = document.getElementById('in4');
const text5 = document.getElementById('in5');
const output1 = document.querySelector('#out1')
const output2 = document.querySelector('#out2')
const output3 = document.querySelector('#out3')
const output4 = document.querySelector('#out4')
const output5 = document.querySelector('#out5')
const dateOutput = document.querySelector('#dateOut')

// Calendar
const date_picker_element = document.querySelector('.datePicker');
const selected_date_element = document.querySelector('.datePicker .selectedDate');
const dates_element = document.querySelector('.datePicker .dates');
const mnth_element = document.querySelector('.datePicker .dates .month .mnth');
const next_mnth_element = document.querySelector('.datePicker .dates .month .nxtmnth');
const prev_mnth_element = document.querySelector('.datePicker .dates .month .prevmnth');
const days_element = document.querySelector('.datePicker .dates .days');
const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
let date = new Date();
let day = date.getDate();
let month = date.getMonth ();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year

mnth_element.textContent = months[month] + ` ` + year;
selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = selectedDate
dateOutput.innerHTML = selected_date_element.textContent

// Section

populateDates();

//Event Listeners
text1.addEventListener('input', outputValue1);
text2.addEventListener('input', outputValue2);
text3.addEventListener('input', outputValue3);
text4.addEventListener('input', outputValue4);
text5.addEventListener('input', outputValue5);

date_picker_element.addEventListener ('click', toggleDatePicker);
next_mnth_element.addEventListener('click', goToNextMonth);
prev_mnth_element.addEventListener('click', goToPrevMonth);

                         //Functions

// Input display functions

function outputValue1() {
    output1.innerHTML = text1.value
}
function outputValue2() {
    output2.innerHTML = text2.value
}
function outputValue3() {
    output3.innerHTML = text3.value
}
function outputValue4() {
    output4.innerHTML = text4.value
}
function outputValue5() {
    output5.innerHTML = text5.value
}
                                                

// Class Selector

// function show(id) {
// if(visibleId !== id) {
//     visibleId = id;
// }hide();
// }
// function hide() {
// var div, i, id;
// for(i = 0; i < divs.length; i++) {
//     id = divs[i];
//     div = document.getElementById(id);
//     if(visibleId === id) {
//     div.style.display = "block";
//     } else {
//     div.style.display = "none";
//     }
// }
// }  

trad.addEventListener('click',() => {
    if (cardinv.innerText != cardinv.classList.contains('')){
    cardinv.classList.remove( 'blacknGold', 'greennGold', 'dustyRose')
    cardinv.classList.add('traditional')
    one.classList.remove( 'blacknGold', 'greennGold', 'dustyRose')
    one.classList.add('traditional')
    const tradition = document.createElement('img');
    tradition.src = 'Invitations/Traditional.jpeg'
    cardinv.removeChild(cardinv.lastElementChild)
    cardinv.appendChild(tradition)
    }
})

black.addEventListener('click',() => {
    if (cardinv.innerText != cardinv.classList.contains('')){
    cardinv.classList.remove('traditional', 'greennGold', 'dustyRose')
    cardinv.classList.add('blacknGold')
    const tradition = document.createElement('img');
    tradition.src = 'Invitations/Traditional.jpeg'
    const blackGold = document.createElement('img');
    blackGold.src = 'Invitations/BlacknGold.jpeg'
    cardinv.removeChild(cardinv.lastElementChild)
    cardinv.appendChild(blackGold)
    }
})
green.addEventListener('click',() => {
    if (cardinv.innerText != cardinv.classList.contains('')){
    cardinv.classList.remove('traditional', 'blacknGold', 'dustyRose')
    cardinv.classList.add('greennGold')
    const emerald = document.createElement('img');
    emerald.src = 'Invitations/GreennGold.jpeg'
    cardinv.removeChild(cardinv.lastElementChild)
    cardinv.appendChild(emerald)
    }
})
rose.addEventListener('click',() => {
    if (cardinv.innerText != cardinv.classList.contains('')){
    cardinv.classList.remove('traditional', 'greennGold', 'blacknGold')
    cardinv.classList.add('dustyRose')
    const rosey = document.createElement('img');
    rosey.src = 'Invitations/DustyRose.jpeg'
    cardinv.removeChild(cardinv.lastElementChild)
    cardinv.appendChild(rosey)
    }
})

// Calendar
function toggleDatePicker (e) {
    if (!checkEventPathForClass(e.path, 'dates')) {
    dates_element.classList.toggle('active');
    }
}
function goToNextMonth (event) {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    mnth_element.textContent = months[month] + ` ` + year;
    populateDates();
}
function goToPrevMonth (event) {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    mnth_element.textContent = months[month] + ` ` + year; 
    populateDates();  
}
function populateDates (e) {
    days_element.innerHTML = '';
    let amount_days = 31;

    if (month == 1) {
        amount_days = 28;
    }

    for (let i = 0; i < amount_days; i++) {
        const day_element = document.createElement('div');
        day_element.classList.add('day')
        day_element.textContent = i + 1;
        

        if (selectedDay == (i + 1) && selectedYear == year && selectedDate == month) {
            day_element.classList.add('selected');
        }

        day_element.addEventListener('click', function() {
            selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1 ));
            selectedDay = (i + 1);
            selectedMonth = month;
            selectedYear = year;
            selected_date_element.textContent = formatDate(selectedDate);
            selected_date_element.dataset.value = selectedDate;
            populateDates()
            dates_element.classList.toggle('active');
            dateOutput.innerHTML = selected_date_element.textContent

        })
        
        days_element.appendChild(day_element);
    }
}

//Helper Functions


// Calendar
function checkEventPathForClass (path, selector) {
    for (let i = 0 ; i < path.length; i++) {
        if (path[i].classList && path[i].classList.contains(selector)) {
            return true
        }
    }
        return false
    }

function formatDate(d) {
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();

    if (day < 10) {
        day = '0' + day
    }
    if (month < 10) {
        month = '0' + month
    }

    return day + '/' + month + '/' + year
}

