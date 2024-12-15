import { OfferDescription } from '../../types/offer-description.ts';
import FavouriteListCard from '../favourite-list-card/favourite-list-card.tsx';
import { store } from '../../store/index.ts';
import { setFavourites } from '../../store/api-actions.ts';

type FavouriteListProp = {
    offers: OfferDescription[];
    cityList: string[];
}
function FavouriteList({offers, cityList}:FavouriteListProp){
  const onFavouriteStatusChange = (offerId:string) => {
    const favouriteInfo = {
      offerId:offerId,
      status: 0,
      isOfferPage: false
    };
    store.dispatch(setFavourites(favouriteInfo));
  };
  return(
    <ul className="favorites__list" data-testid = 'favourite-list'>
      {cityList.map((city)=>
        (
          <li className="favorites__locations-items" key = {city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {offers.filter((offerCity)=>offerCity.city.name === city).map((offer) => (
                <FavouriteListCard offer = {offer} onFavouriteStatusChange = {onFavouriteStatusChange} key = {offer.id}/>
              ))}
            </div>
          </li>
        )
      )}
    </ul>
  );
}
export default FavouriteList;