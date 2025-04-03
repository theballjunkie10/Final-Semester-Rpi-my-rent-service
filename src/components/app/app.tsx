import { JSX } from "react";
import MainPage from "../../pages/main-page/main-page";
import FavoritesPage from "../../pages/favourite-page/favourite-page";
import LoginPage from "../../pages/login-page/login-page";
import OfferPage from "../../pages/offer-page/offer-page";
import NotFound from "../../pages/404-page/error-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "../../const";
import { PrivateRoute } from "../private-route/private-route";
import { FullOffer, OffersList } from "../../types/offer";
import { offersList } from "../../mocks/offer-list";


type AppMainPageProps ={
    rentalOffersCount: number;
    offers: FullOffer[];
    offersList: OffersList[];
}
function App({rentalOffersCount, offers, offersList}:AppMainPageProps): JSX.Element {
    return (
        <BrowserRouter>
        <Routes>
            <Route
            path={AppRoute.Main}
            element={<MainPage rentalOffersCount={rentalOffersCount} offersList={offersList}/>}
            />
            <Route
            path={AppRoute.Favorites}
            element={<FavoritesPage favoritesList={offersList.filter((o)=>o.isFavorite)}/>
                // <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><FavoritesPage favoritesList={favoritesList}/></PrivateRoute>
                //<Route path={AppRoute.Favorites} element={<FavoritesPage favoritesList={favoritesList}/>}></Route>
            }
            />
            <Route
            path={AppRoute.Login}
            element={<LoginPage/>}
            />
            <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage offers={offers} offersList={offersList}/>}/>
            <Route
            path={AppRoute.Offer}
            element={<OfferPage offers={offers} offersList={offersList}/>}
            />
            <Route
            path="*"
            element={<NotFound/>}
            />
        </Routes>
        </BrowserRouter>
        // <MainPage rentalOffersCount={rentalOffersCount}/>
    );
}

export default App;