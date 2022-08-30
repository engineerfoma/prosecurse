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
import Video from '../images/video.png';
import Small from '../images/people_small.svg';
import Arr from '../images/small_arr.svg';
import Hooli from '../images/hooli.svg';
import Lya from '../images/lya.svg';
import Clever from '../images/clev.svg';
import Stripe from '../images/strip.svg';
import AWS from '../images/aws.svg';
import Smile from '../images/smile.svg';

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
                        <img className="statistic__item_img" src={Clients} alt="клиент" />
                        <h3 className="statistic__item_title">1700+</h3>
                        <p className="statistic__item_subtitle">TRUSTED CLIENTS</p>
                    </li>
                    <li className="statistic__item">
                        <img className="statistic__item_img" src={Recovered} alt="лист" />
                        <h3 className="statistic__item_title">$180 M</h3>
                        <p className="statistic__item_subtitle">RECOVERED</p>
                    </li>
                    <li className="statistic__item">
                        <img className="statistic__item_img" src={Cases} alt="весы" />
                        <h3 className="statistic__item_title">98%</h3>
                        <p className="statistic__item_subtitle">SUCCESSFUL CASES</p>
                    </li>
                    <li className="statistic__item">
                        <img className="statistic__item_img" src={Injury} alt="молоток" />
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
                        <img className="practice__item_img" src={Mislead} alt="картинка1" />
                    </li>
                    <li className="practice__item">
                        <div className="practice__container">
                            <h4 className="practice__item_title">Bailes &
                                Warrants</h4>
                            <p className="practice__item_subtitle">“Quantum mechanics”
                                is the description of the
                                behaviour of matter</p>
                        </div>
                        <img className="practice__item_img" src={Warrants} alt="картинка2" />
                    </li>
                    <li className="practice__item">
                        <div className="practice__container">
                            <h4 className="practice__item_title">Federal Drug
                                Crimes</h4>
                            <p className="practice__item_subtitle subtitle__last">They describe a
                                universe consisting of
                                bodies moving</p>
                        </div>
                        <img className="practice__item_img" src={Crimes} alt="картинка3" />
                    </li>
                    <li className="practice__item">
                        <div className="practice__container">
                            <h4 className="practice__item_title">Traffic Related
                                Crimes</h4>
                            <p className="practice__item_subtitle subtitle__last">They finally obtained
                                a consistent description
                                of the behaviour </p>
                        </div>
                        <img className="practice__item_img" src={Traffic} alt="картинка4" />
                    </li>
                </ul>
            </section>
            <section className="description">
                <h2 className="description__title title">Who We Are</h2>
                <p className="description__subtitle subtitle">Problems trying to resolve the conflict between the two major realms
                    of Classical physics: Newtonian mechanics</p>
                <div className="description__container">
                    <img className="description__video" src={Video} alt="плеер" />
                    <div className="text-container">
                        <h3 className="text-container__title title">Most trusted in
                            our field</h3>
                        <p className="text-container__subtitle subtitle">
                            Most calendars are designed for teams. Slate
                            is designed for freelancers who want a
                            simple way to plan their schedule.
                        </p>
                        <ul className="text-container__list">
                            <li className="text-container__item">
                                <img className="text-container__item_img" src={Small} alt="коллектив" />
                                <div className="text-container__text">
                                    <p className="text-container__text_title">the quick fox jumps over the lazy
                                        dog</p>
                                    <span className="text-container__text_subtitle">Things on a very small scale ...</span>
                                </div>
                            </li>
                            <li className="text-container__item">
                                <img className="text-container__item_img" src={Arr} alt="скорость" />
                                <div className="text-container__text">
                                    <p className="text-container__text_title">the quick fox jumps over the lazy
                                        dog</p>
                                    <span className="text-container__text_subtitle">Things on a very small scale ...</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="partners">
                <div className="partners__container">
                    <ul className="partners__list">
                        <li className="partners__list_item">
                            <img className="partners__list_img" src={Hooli} alt="хооли" />
                        </li>
                        <li className="partners__list_item">
                            <img className="partners__list_img" src={Lya} alt="ЛИА" />
                        </li>
                        <li className="partners__list_item">
                            <img className="partners__list_img" src={Clever} alt="лист" />
                        </li>
                        <li className="partners__list_item">
                            <img className="partners__list_img" src={Stripe} alt="стрип" />
                        </li>
                        <li className="partners__list_item">
                            <img className="partners__list_img" src={AWS} alt="АВС" />
                        </li>
                        <li className="partners__list_item">
                            <img className="partners__list_img" src={Smile} alt="улыбка" />
                        </li>
                    </ul>
                    <form className="partners__form">
                        <h3 className="partners__form_title">Subscribe For Latest
                            Newsletter</h3>
                        <input
                            type="email"
                            id="email-input"
                            name="fieldEmail"
                            placeholder="Your Email"
                            className="partners__form_input input_type_email"
                            required
                            minLength="2"
                            maxLength="50"
                        />
                        <button type="submit" className="button partners__form_button">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default Main;