import React, { useState, useEffect } from "react";
import database from "../db.json";
import TimelineHeader from "./TimelineHeader";
import TimelineMain from "./TimelineMain";
const TimelineGroup = () => {
  const data = database;
  const [dates, setDates] = useState([]);
  const finalArr = [];
  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ]
  function classListt() {
    const c = document.querySelector("material-symbols-outlined")
    c.classList.add("hidden")
  }
  const icn = document.getElementsByClassName("icon")
  function daysBetween(dt){
    const userDate = dt;
    let today = new Date();
    let inputDate = new Date(userDate);
    let difference = today - inputDate;
    let days = difference / (1000 * 60 * 60 * 24) - 1;
    if(Math.round(days) < 0){
      const icon = icn.innerHTML = "priority_high";
      const day = Math.round(days).toFixed().split("-")[1] + " gün sonra"
      return [icon,day];
    }if (Math.round(days) === 0 ){
      const icon1 = icn.innerHTML = "check"
      const day1 = "Aktif"
      return [icon1,day1];
    }if (Math.round(days) > 0){
      const icon2 = icn.innerHTML = "close"
      const day2 = days.toFixed() + " gün önce";
      return [icon2,day2];
    }
    return days;
  }
  useEffect(() => {
    data.values.forEach((titles) => {
      const date = titles.firstDate;
      let finalObj = finalArr;
      if (finalObj[date]) {
        finalObj[date].push(titles);
      } else {
        finalObj[date] = [titles];
      }
      const target_copy = Object.keys(finalArr).map((item) => {
        return finalArr[item];
      });
      setDates(target_copy);
      return target_copy;
    });
  },[data]);
  return (
    <div className="p-4 mt-4">
      <TimelineHeader/>
      <div className="container mx-auto overflow-x-hidden">
        <TimelineMain months={months} dates={dates} classListt={classListt} daysBetween={daysBetween}/>
      </div>
    </div>
  );
};

export default TimelineGroup;
