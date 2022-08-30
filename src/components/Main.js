import React from 'react';
import '../styles/Main.scss';
import Clients from '../images/clients.svg';
import Recovered from '../images/recovered.svg';
import Cases from '../images/cases.svg';
import Injury from '../images/injury.svg';
import Mislead from '../images/mislead.png';
import Warrants from '../images/warrants.png';
import Crimes from '../images/crimes.png';
import Traffic from '../images/traffic.png';

const Main = () => {
    return (
        <main>
            <section className="statistic">
                <h2 className="statistic__title title">Every Client Matters</h2>
                <p className="statistic__subtitle subtitle">Problems trying to resolve
                    the conflict between the two major realms of Classical physics:
                    Newtonian mechanics</p>
                <ul className="statistic__list list">
                    <li className="statistic__item">
                        <img className="statistic__item_img" src={Clients} />
                        <h3 className="statistic__item_title">1700+</h3>
                        <p className="statistic__item_subtitle">TRUSTED CLIENTS</p>
                    </li>
                    <li className="statistic__item">
                        <img className="statistic__item_img" src={Recovered} />
                        <h3 className="statistic__item_title">$180 M</h3>
                        <p className="statistic__item_subtitle">RECOVERED</p>
                    </li>
                    <li className="statistic__item">
                        <img className="statistic__item_img" src={Cases} />
                        <h3 className="statistic__item_title">98%</h3>
                        <p className="statistic__item_subtitle">SUCCESSFUL CASES</p>
                    </li>
                    <li className="statistic__item">
                        <img className="statistic__item_img" src={Injury} />
                        <h3 className="statistic__item_title">10,6</h3>
                        <p className="statistic__item_subtitle">INJURY CASES</p>
                    </li>
                </ul>
            </section>
            <section className="practice">
                <h2 className="practice__title title">Practice Advice</h2>
                <p className="practice__subtitle subtitle">Problems trying to resolve the conflict between
                    the two major realms of Classical physics: Newtonian mechanics</p>
                <ul className="practice__list list">
                    <li className="practice__item">
                        <div className="practice__container">
                            <h4 className="practice__item_title">Frauds or
                                Mislead</h4>
                            <p className="practice__item_subtitle">Newton thought that
                                light was made up of
                                particles, but then it
                                was discovered </p>
                        </div>
                        <img className="practice__item_img" src={Mislead} />
                    </li>
                    <li className="practice__item">
                        <div className="practice__container">
                            <h4 className="practice__item_title">Bailes &
                                Warrants</h4>
                            <p className="practice__item_subtitle">“Quantum mechanics”
                                is the description of the
                                behaviour of matter</p>
                        </div>
                        <img className="practice__item_img" src={Warrants} />
                    </li>
                    <li className="practice__item">
                        <div className="practice__container">
                            <h4 className="practice__item_title">Federal Drug
                                Crimes</h4>
                            <p className="practice__item_subtitle">They describe a
                                universe consisting of
                                bodies moving</p>
                        </div>
                        <img className="practice__item_img" src={Crimes} />
                    </li>
                    <li className="practice__item">
                        <div className="practice__container">
                            <h4 className="practice__item_title">Traffic Related
                                Crimes</h4>
                            <p className="practice__item_subtitle">They finally obtained
                                a consistent description
                                of the behaviour </p>
                        </div>
                        <img className="practice__item_img" src={Traffic} />
                    </li>
                </ul>
            </section>
            <section className="description">
                <h2 className="practice__title title">Who We Are</h2>
                <p className="practice__subtitle subtitle">Problems trying to resolve the conflict between the two major realms
                    of Classical physics: Newtonian mechanics</p>
                <div>
                    
                </div>
            </section>
        </main>
    )
}

export default Main;