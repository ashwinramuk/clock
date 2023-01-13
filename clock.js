const timeElement = document.getElementById("time")
const dateElement = document.getElementById("date")
let dateTime
let hours
let hour12format
let minutes
let seconds
let meridiem
let day_obj = {0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"}
let month_obj = {0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"}
let clock = setInterval(()=>{
    dateTime = new Date()
    hours = dateTime.getHours()
    hour12format = hours>12?hours-12:hours
    minutes = dateTime.getMinutes()
    seconds = dateTime.getSeconds()
    meridiem = hours>12?"PM":"AM"
    day = dateTime.getDay()
    month = dateTime.getMonth()
    year = dateTime.getFullYear()
    date = dateTime.getDate()
    timeElement.innerText = `${hour12format?"0"+hour12format:hour12format}:${minutes<10?"0"+minutes:minutes}:${seconds<10?"0"+seconds:seconds} ${meridiem}`
    dateElement.innerText = `${month_obj[month]} ${date} ${year} ${day_obj[day]}`
},1000)
