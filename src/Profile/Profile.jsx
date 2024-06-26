import React from 'react';
import "./Profile.scss";

export const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__container">
                <div className="profile__header">
                    <img src="https://www.rcnp.es/assets/frontend/onepage/img/people/img8-large.jpg" alt="User Avatar"
                         className="profile__image"/>
                    <h1 className="profile__name">Джон Дроу</h1>
                    <div className="profile__info">
                        <p className="profile__email"><a href="mailto:john@drow.com">john@drow.com</a></p>
                        <p className="profile__phone"><a href="tel:+79531591526">+7 (953) 159-15-26</a></p>
                    </div>
                </div>

                <div className="profile__biography"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Delectus eaque et eum nemo nulla quasi quibusdam temporibus. Atque enim, maxime. Commodi eligendi
                    magnam nostrum possimus rerum. Dolor illum non temporibus.</p></div>

            </div>
        </div>
    );
};