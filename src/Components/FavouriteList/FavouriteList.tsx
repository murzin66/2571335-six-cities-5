import { OfferDescription } from "../../types/offerDescription";
import FavouriteListCard from "../FavouriteListCard/FavouriteListCard";

type FavouriteListProp = {
    offers: OfferDescription[];
    cityList: string[];
}
function FavouriteList({offers, cityList}:FavouriteListProp){

    return(
        <ul className="favorites__list">
            {cityList.map((city)=>
                <li className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                            <a className="locations__item-link" href="#">
                                <span>{city}</span>
                            </a>
                        </div>
                    </div>
                    <div className="favorites__places">
                        {offers.filter((offerCity)=>offerCity.city.name == city).map((offer) => (
                        <div key={offer.id} className="favorites__places">
                            <FavouriteListCard {...offer}/>
                        </div>
                        ))}
                    </div>
                </li>
                )}
        </ul>
    )
}
export default FavouriteList;