import {Link} from 'react-router-dom';
import { changeCityAction } from '../../store/city-process/city-process.ts';
import {useAppDispatch, useAppSelector} from '../../hooks/index.ts';
import { CITIES } from '../../mocks/city.ts';
import { getCity } from '../../store/selectors.ts';

function CityList(){
  const dispatch = useAppDispatch();
  const cityName = useAppSelector(getCity);

  return (
    <ul className="locations__list tabs__list" data-testid = 'cityList'>
      {CITIES.map((c)=>(
        <li key = {c.lat} className="locations__item">
          <Link to = "/" className={c.title === cityName ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
            onClick = {()=>{
              dispatch(changeCityAction((c.title)));
            }}
          >
            <span>{c.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default CityList;
