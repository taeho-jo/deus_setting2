import { observable } from "mobx";
import axios from "axios";

const CountryCodeStore = observable({
  // countryCode: "",

  getGeoInfo() {
    axios
      .get("https://ipapi.co/json/")
      .then(response => {
        let data = response.data;
        // console.log(data);
        // countryCode: data.country_calling_code;
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
