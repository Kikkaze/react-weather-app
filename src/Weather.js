import './Weather.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function Weather() {
  return (
    <div className="Weather container">
        <div className="weatherApp">
          <form>
            <div class="row mb-5">
              <div class="col-9">
                <input
                  autofocus="on"
                  type="search"
                  placeholder="Search for a city"
                  className="form-control search-form search-bar"
                />
              </div>
              <div class="col-3">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-primary w-100 search-button"
                />
              </div>
            </div>
          </form>
          <div className='row'>
            <div className='col-6'>
              <h1>Milan</h1>
              <ul className="left-ul">
                <li>Thursday</li>
                <li>11 May, 2023</li>
                <li>Cloudy</li>
              </ul>
            </div>
            <div className='col-6'>
              <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloudy icon"></img>
              <span>10°C</span>
              <ul>
                <li>Feels like: 8°C</li>
                <li>Humidity: 50%</li>
                <li>Wind: 10km/h</li>
              </ul>
            </div>
          </div>
          <div className='row'>
          <div className='col-2'></div>
          </div>
      </div>
    </div>
  );
}