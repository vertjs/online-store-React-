import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

export default function Catalog(props) {
    return (
        <section className="container catalog">
            <h2 className="text-center">Каталог</h2>

            <form className="catalog-search-form form-inline">
                <input className="form-control" placeholder="Поиск"/>
            </form>

            <ul className="catalog-categories nav justify-content-center">
                <li className="nav-item">
                    <NavLink to='#' exact className="nav-link active">Все</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='#' exact className="nav-link">Женская обувь</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='#' exact className="nav-link">Мужская обувь</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='#' exact className="nav-link">Обувь унисекс</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='#' exact className="nav-link">Детская обувь</NavLink>
                </li>
            </ul>

            <div className="row">
                <div className="col-4">
                    <div className="card catalog-item-card">
                        <img src="https://cdn-images.farfetch-contents.com/12/93/06/52/12930652_13567910_1000.jpg"
                            className="card-img-top img-fluid" alt="Босоножки 'MYER'"/>
                        <div className="card-body">
                            <p className="card-text">Босоножки 'MYER'</p>
                            <p className="card-text">34 000 руб.</p>
                            <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card catalog-item-card">
                        <img src="https://cdn-images.farfetch-contents.com/12/94/66/72/12946672_13518465_1000.jpg"
                            className="card-img-top img-fluid" alt="Босоножки 'Keira'"/>
                        <div className="card-body">
                            <p className="card-text">Босоножки 'Keira'</p>
                            <p className="card-text">7 600 руб.</p>
                            <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card catalog-item-card">
                        <img src="https://cdn-images.farfetch-contents.com/12/99/04/32/12990432_13705715_1000.jpg"
                            className="card-img-top img-fluid" alt="Супергеройские кеды"/>
                        <div className="card-body">
                            <p className="card-text">Супергеройские кеды</p>
                            <p className="card-text">1 400 руб.</p>
                            <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card catalog-item-card">
                        <img src="https://cdn-images.farfetch-contents.com/12/93/06/52/12930652_13567910_1000.jpg"
                            className="card-img-top img-fluid" alt="Босоножки 'MYER'"/>
                        <div className="card-body">
                            <p className="card-text">Босоножки 'MYER'</p>
                            <p className="card-text">34 000 руб.</p>
                            <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card catalog-item-card">
                        <img src="https://cdn-images.farfetch-contents.com/12/94/66/72/12946672_13518465_1000.jpg"
                            className="card-img-top img-fluid" alt="Босоножки 'Keira'"/>
                        <div className="card-body">
                            <p className="card-text">Босоножки 'Keira'</p>
                            <p className="card-text">7 600 руб.</p>
                            <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card catalog-item-card">
                        <img src="https://cdn-images.farfetch-contents.com/12/99/04/32/12990432_13705715_1000.jpg"
                            className="card-img-top img-fluid" alt="Супергеройские кеды"/>
                        <div className="card-body">
                            <p className="card-text">Супергеройские кеды</p>
                            <p className="card-text">1 400 руб.</p>
                            <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <button className="btn btn-outline-primary">Загрузить ещё</button>
            </div>
        </section>
    )
}

Catalog.propTypes = {

}

