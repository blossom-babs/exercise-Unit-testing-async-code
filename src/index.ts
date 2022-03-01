import axios from 'axios';

// get all countries
export const getAllCountries = async () => {
  const result = await axios.get('https://restcountries.com/v3.1/all');
  return result.data;
};

// get countries by region
export const getCountriesByRegion = async (
  region: string
): Promise<string[] | void> => {
  const countriesList = [];
  try {
    const countries = await axios.get(
      `https://restcountries.com/v3.1/region/${region}`
    );
    for (const item of countries.data) {
      countriesList.push(item.name.common);
    }
    return countriesList;
  } catch (error) {
    console.log(error);
  }
};

// get countries by name
export const getCountriesByName = async (
  country: string
): Promise<[] | void> => {
  try {
    const countryInfo = await axios.get(
      `https://restcountries.com/v3.1/name/${country}?fullText=true`
    );
    return countryInfo.data;
  } catch (error) {
    console.log(error);
  }
};

//getAllCountries();
//getCountriesByRegion('Africa').then((data) => console.log(data));
// getCountriesByName('Nigeria').then((data) => console.log(data));
