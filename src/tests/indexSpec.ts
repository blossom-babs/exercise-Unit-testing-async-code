import { getCountriesByName } from './../index';
import { getAllCountries, getCountriesByRegion } from '../index';

describe('Countries data', () => {
  let originalTimeout: number;

  beforeEach(function(){
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000
  })

  afterEach(function(){
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
  })

  it('expects to get all countries', async (): Promise<[] | void> => {
    const result = await getAllCountries();
    expect(result).toBeTruthy();
    expect(result.length).toBeLessThanOrEqual(250);
    expect(result).toBeDefined()
  });

  it('expects to get countries by region', async () : Promise<[] | void> => {
    const result = await getCountriesByRegion('Europe')
    expect(result).toBeInstanceOf(Array)
    expect(result).toBeTruthy()
  })

  it('expects to get countries by name', async () => {
    const result = await getCountriesByName('Nigeria')
    expect(result).toBeTruthy()
    expect(result).toBeDefined()
  })
});
