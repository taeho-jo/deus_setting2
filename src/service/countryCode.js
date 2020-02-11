import { observable } from "mobx";
import axios from "axios";

const CountryCodeStore = observable({
  getGeoInfo() {
    axios
      .get("https://ipapi.co/json/")
      .then(response => {
        let data = response.data;
        if (data) {
          localStorage.setItem("country_code", data.country_code);
        }
      })
      .catch(error => {
        console.log("dddd", error);
      });
  }
});

export default CountryCodeStore;
