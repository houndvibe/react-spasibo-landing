import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import NavButton from '../components/UI/NavButton'
import Switch from './UI/Switch';
import Card from './Card';
import Offer from '../components/Offer'
import Plate from './Plate';
import { onHideCityPopup } from '../store/actions'
import {
  navButtonsData,
  cardsData,
  offersData,
  platesData
} from '../data/Data'
import '../css/PartnersPage.css'

const PartnersPage = ({
  onHideCityPopup,
  isCitySelectPopupVisible,
  history
}) => {

  const demoActionHandler = () => {
    history.push('/action')
  }

  return (
    <div
      className='partnersPage'
      onClick={isCitySelectPopupVisible ? onHideCityPopup : null}
    >
      <div className='partnersPage__content'>

        <div className='title'>
          Партнеры и предложения
        </div>

        <div className='navButtons'>
          {navButtonsData.map(item => {
            return (
              <NavButton
                title={item}
                onClick={demoActionHandler}
                key={Math.random() + item}
              />
            )
          })}
        </div>

        <div className='modeSvitcher'>
          <Switch
            leftText={'Начисляют Спасибо'}
            rightText={'Принимают Спасибо'}
          />
        </div>

        <div className='cards'>
          {cardsData.map(card => {
            return (
              <Card
                percent={card.percent}
                name={card.name}
                logo={card.logo}
                onClick={demoActionHandler}
                key={Math.random() + card.name}
              />
            )
          })}
        </div>

        <div className='moreCards'>
          <NavButton
            title={'еще 4 партнера'}
            active={true}
            onClick={demoActionHandler}
          />
        </div>

        <div className='subtitle'>
          3 предложения в категории «Электроника и бытовая техника»
        </div>

        <div className='offers'>
          {offersData.map(offer => {
            return (
              <Offer
                preview={offer.preview}
                logo={offer.logo}
                name={offer.name}
                text={offer.text}
                onClick={demoActionHandler}
              />
            )
          })}
        </div>

        <div className='moreOffers'>
          <NavButton
            title={'еще 4 предложения'}
            active={true}
            onClick={demoActionHandler} />
        </div>

        <div className='plates'>
          {platesData.map(plate => {
            return (
              <Plate
                text={plate.text}
                content={plate.content}
                onClick={demoActionHandler}
              />
            )
          })}
        </div>

      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  isCitySelectPopupVisible: state.isCitySelectPopupVisible
});

const mapDispatchToProps = (dispatch) => ({
  onHideCityPopup: () => dispatch(onHideCityPopup()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PartnersPage));
