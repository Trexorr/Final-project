const date_picker_element = document.querySelector('.datePicker');
const selected_date_element = document.querySelector('.datePicker .selectedDate');
const dates_element = document.querySelector('.datePicker .dates');
const mnth_element = document.querySelector('.datePicker .dates .month .mnth');
const next_mnth_element = document.querySelector('.datePicker .dates .month .nxtmnth');
const prev_mnth_element = document.querySelector('.datePicker .dates .month .prevmnth');
const days_element = document.querySelector('.datePicker .dates .days');
const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];


// Declarations

// Calendar
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

// Section


populateDates();

//Event Listeners

date_picker_element.addEventListener ('click', toggleDatePicker);
next_mnth_element.addEventListener('click', goToNextMonth);
prev_mnth_element.addEventListener('click', goToPrevMonth);
//Functions

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
            populateDates()
            dates_element.classList.toggle('active');
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





